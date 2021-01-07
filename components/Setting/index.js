import React from 'react';
import {ScrollView} from 'react-native';
import {Input} from 'react-native-elements';
import FormItemGroup from './FormItemGroup';
// import {RichTextEditor} from 'react-native-zss-rich-text-editor';

const Setting = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <FormItemGroup title={'账户信息'}>
        <Input label="寄件邮箱" placeholder="发送邮件的邮箱" />
        <Input label="授权密码" placeholder="第三方邮箱的授权密码" />
        <Input label="smtp服务器" placeholder="邮箱服务器地址" />
      </FormItemGroup>
      <FormItemGroup title={'邮件内容'}>
        <Input label="寄件人姓名" placeholder="姓名" />
        <Input label="收件人邮箱" placeholder="收件人" />
        <Input label="抄送" placeholder="抄送" />
        <Input label="主题" placeholder="主题" />
        <Input label="收件人称呼" placeholder="收件人称呼" />
        <Input label="内容模板" placeholder="内容模板" />
        <Input label="签名" placeholder="签名" />
        {/*<RichTextEditor
          ref={(r) => (this.richtext = r)}
          initialTitleHTML={'Title!!'}
          initialContentHTML={
            'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'
          }
          editorInitializedCallback={() => this.onEditorInitialized()}
        />*/}
      </FormItemGroup>
    </ScrollView>
  );
};

export default Setting;
