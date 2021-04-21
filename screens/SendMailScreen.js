import React, {useRef, useState, useEffect} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {getTemplate} from '../stores/mailTemplate';
import mailer from '../utils/mailer';
import {RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import BackHeader from '../components/BackHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PostRecordList from '../stores/postRecordList';

const SendMailScreen = ({route, navigation}) => {
  const recordId = route.params ? route.params.recordId : undefined;
  const dispatch = useDispatch();
  const editor = useRef();
  const [disableBtn, setDisableBtn] = useState(false);

  useEffect(() => {
    console.log('change recordId: ' + recordId);
  }, [recordId]);

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

  dispatch(getTemplate()).then((_template) => {
    template = Object.assign({}, _template);
    if (recordId) {
      PostRecordList.getInstance()
        .getOne(recordId)
        .then((r) => {
          template.content = r.content;
        });
    }
  });

  const sendMail = () => {
    setDisableBtn(true);
    mailer.sendMail(template).then((result) => {
      console.log(result);
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
    });
  };

  const goBack = () => {
    navigation.goBack();
  };

  const handleChange = (_html) => {
    template.content = _html;
  };

  const onEditReady = () => {
    editor.current.setContentHTML(template.content);
  };

  return (
    <>
      <BackHeader
        title="发送邮件"
        onBack={goBack}
        rightComponent={rightComponent}
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

export default SendMailScreen;
