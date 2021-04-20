import React, {useRef, useState} from 'react';
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

const SendMailScreen = ({navigation}) => {
  const dispatch = useDispatch();
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

  dispatch(getTemplate()).then((_template) => {
    template = Object.assign({}, _template);
  });

  const sendMail = () => {
    setDisableBtn(true);
    mailer.sendMail(template).then((result) => {
      console.log(result);
      if (result) {
        // toast.current.show('发送成功 ', 5000);
        ToastAndroid.showWithGravityAndOffset(
          '发送成功',
          5000,
          ToastAndroid.TOP,
          0,
          50,
        );
      } else {
        // toast.current.show('发送失败 请重试 ', 5000);
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
