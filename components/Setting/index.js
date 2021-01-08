import React from 'react';
import {ScrollView} from 'react-native';
import {Input} from 'react-native-elements';
import FormItemGroup from './FormItemGroup';
import {RichEditor, RichToolbar} from 'react-native-pell-rich-editor';

class Setting extends React.Component {
  editor;
  contentStyle = {
    backgroundColor: '#fff',
    // color: '#fff',
    placeholderColor: 'gray',
    // cssText: '#editor {background-color: #f3f3f3}', // initial valid
    contentCSSText: 'font-size: 16px; min-height: 200px; height: 100%;', // initial valid
  };

  constructor(props) {
    super(props);
    this.editor = React.createRef();
  }

  onPressAddImage() {
    // insert URL
    this.editor.current.insertImage(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png',
      'background: gray;',
    );
    // insert base64
    // this.richText.current?.insertImage(`data:${image.mime};base64,${image.data}`);
  }

  handleChange() {}

  // 获取数据
  getTemplate() {}

  render() {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <FormItemGroup title={'账户信息'}>
          <RichToolbar
            editor={this.editor}
            selectedIconTint={'#2095F2'}
            disabledIconTint={'#bfbfbf'}
            onPressAddImage={this.onPressAddImage}
          />
          <RichEditor
            // initialFocus={true}
            editorStyle={this.contentStyle} // default light style
            ref={this.editor}
            placeholder={'请输入'}
            initialContentHTML={''}
            onChange={this.handleChange}
          />
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
        </FormItemGroup>
      </ScrollView>
    );
  }
}

// const Setting = () => {
//   const editor = useRef();
//
//   const contentStyle = {
//     backgroundColor: '#fff',
//     // color: '#fff',
//     placeholderColor: 'gray',
//     // cssText: '#editor {background-color: #f3f3f3}', // initial valid
//     contentCSSText: 'font-size: 16px; min-height: 200px; height: 100%;', // initial valid
//   };
//
//   const onPressAddImage = () => {
//     // insert URL
//     editor.current.insertImage(
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png',
//       'background: gray;',
//     );
//     // insert base64
//     // this.richText.current?.insertImage(`data:${image.mime};base64,${image.data}`);
//   };
//
//   const handleChange = (html) => {};
//
//   return (
//     <ScrollView contentInsetAdjustmentBehavior="automatic">
//       <FormItemGroup title={'账户信息'}>
//         <RichToolbar
//           editor={editor}
//           selectedIconTint={'#2095F2'}
//           disabledIconTint={'#bfbfbf'}
//           onPressAddImage={onPressAddImage}
//         />
//         <RichEditor
//           // initialFocus={true}
//           editorStyle={contentStyle} // default light style
//           ref={editor}
//           placeholder={'please input content'}
//           initialContentHTML={''}
//           onChange={handleChange}
//         />
//         <Input label="寄件邮箱" placeholder="发送邮件的邮箱" />
//         <Input label="授权密码" placeholder="第三方邮箱的授权密码" />
//         <Input label="smtp服务器" placeholder="邮箱服务器地址" />
//       </FormItemGroup>
//       <FormItemGroup title={'邮件内容'}>
//         <Input label="寄件人姓名" placeholder="姓名" />
//         <Input label="收件人邮箱" placeholder="收件人" />
//         <Input label="抄送" placeholder="抄送" />
//         <Input label="主题" placeholder="主题" />
//         <Input label="收件人称呼" placeholder="收件人称呼" />
//         <Input label="内容模板" placeholder="内容模板" />
//         <Input label="签名" placeholder="签名" />
//       </FormItemGroup>
//     </ScrollView>
//   );
// };

export default Setting;
