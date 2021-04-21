import React, {useRef, useState} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  ToastAndroid,
  BackHandler,
} from 'react-native';
import mailer from '../utils/mailer';
import {RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import {Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PostRecordList from '../stores/postRecordList';
import storage from '../stores/storage';

// 该页面是用于用于通过通知激活app时，打开的发送邮件页面
const SimpleSendMailScreen = () => {
  const editor = useRef();
  const [disableBtn, setDisableBtn] = useState(false);

  const contentStyle = {
    backgroundColor: '#fff',
    // color: '#fff',
    placeholderColor: 'gray',
    // cssText: '#editor {background-color: #f3f3f3}', // initial valid
    contentCSSText: 'font-size: 16px; min-height: 200px; height: 100%;', // initial valid
  };

  const rightComponent = () => {
    return (
      <TouchableOpacity onPress={sendMail} disabled={disableBtn}>
        <Ionicons name={'send-outline'} color={'#fff'} size={25} />
      </TouchableOpacity>
    );
  };

  let template;

  const sendMail = () => {
    setDisableBtn(true);
    mailer
      .sendMail(template)
      .then((result) => {
        if (result) {
          ToastAndroid.showWithGravityAndOffset(
            '发送成功',
            5000,
            ToastAndroid.TOP,
            0,
            50,
          );
          // 保存已发送的数据
          let record = Object.assign({sendTime: Date.now()}, template);
          PostRecordList.getInstance().insert(record);
        } else {
          ToastAndroid.showWithGravityAndOffset(
            '发送失败 请重试',
            5000,
            ToastAndroid.TOP,
            0,
            50,
          );
        }
        setDisableBtn(false);
      })
      .finally(() => {
        BackHandler.exitApp();
      });
  };

  const handleChange = (_html) => {
    template.content = _html;
  };

  const onEditReady = () => {
    // 获取邮件模板
    storage
      .load({
        key: 'email',
        id: 'template',
      })
      .then((_template) => {
        template = Object.assign({}, _template);
        // 读取最新记录
        PostRecordList.getInstance()
          .getId()
          .then((id) => {
            return PostRecordList.getInstance().getOne(id);
          })
          .then((r) => {
            if (r) {
              template.content = r.content;
            }
          });
      })
      .catch(() => {
        // 未初始化配置，需要用户初始化配置
        ToastAndroid.showWithGravityAndOffset(
          '请先打开APP初始化设置邮件模板',
          15000,
          ToastAndroid.TOP,
          0,
          50,
        );
      })
      .finally(() => {
        editor.current.setContentHTML(template ? template.content : '');
      });
  };

  return (
    <>
      <Header
        rightComponent={rightComponent}
        centerComponent={{text: '发送邮件', style: {color: '#fff'}}}
      />
      <View style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <RichEditor
            // initialFocus={true}
            ref={editor}
            editorStyle={contentStyle}
            placeholder={'请输入'}
            initialContentHTML=""
            onChange={handleChange}
            editorInitializedCallback={onEditReady}
          />
        </ScrollView>
        <RichToolbar
          editor={editor}
          selectedIconTint={'#2095F2'}
          disabledIconTint={'#bfbfbf'}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SimpleSendMailScreen;
