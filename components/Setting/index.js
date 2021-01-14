import React from 'react';
import {ScrollView} from 'react-native';
import {Input, Button} from 'react-native-elements';
import FormItemGroup from './FormItemGroup';
import {RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import FormItemContainer from './FormItemContainer';

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

    this.contentEditor = React.createRef();
    this.signEditor = React.createRef();

    this.state = {
      email: '',
      pwd: '',
      smtp: '',
      name: '',
      to: '',
      cc: '',
      subject: '',
      // content: '',
      // sign: '',
    };

    this.onPressAddImage = this.onPressAddImage.bind(this);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPwdChange = this.onPwdChange.bind(this);
    this.onSmtpChange = this.onSmtpChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onToChange = this.onToChange.bind(this);
    this.onCcChange = this.onCcChange.bind(this);
    this.onSubjectChange = this.onSubjectChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSignChange = this.handleSignChange.bind(this);
  }

  onPressAddImage() {
    // insert URL
    this.signEditor.current.insertImage(
      'http://mail-online.nosdn.127.net/bccc117b969ed7620287b262eb8b5763.jpg',
      'background: gray;',
    );
    // insert base64
    // this.richText.current?.insertImage(`data:${image.mime};base64,${image.data}`);
  }

  onEmailChange(value) {
    this.setState({email: value});
  }
  onPwdChange(value) {
    this.setState({pwd: value});
  }
  onSmtpChange(value) {
    this.setState({smtp: value});
  }
  onNameChange(value) {
    this.setState({name: value});
  }
  onToChange(value) {
    this.setState({to: value});
  }
  onCcChange(value) {
    this.setState({cc: value});
  }
  onSubjectChange(value) {
    this.setState({subject: value});
  }
  handleContentChange(html) {
    this.contentEditor.current.setContentHTML(html);
    this.setState({content: html});
  }
  handleSignChange(html) {
    this.signEditor.current.setContentHTML(html);
    this.setState({sign: html});
  }

  // 获取数据
  getTemplate() {
    return this.state;
  }

  setTemplate(template) {
    this.setState({
      email: template.email,
      pwd: template.pwd,
      smtp: template.smtp,
      name: template.name,
      to: template.to,
      cc: template.cc,
      subject: template.subject,
    });
  }

  render() {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <FormItemGroup title={'账户信息'}>
          <Input
            label="寄件邮箱"
            placeholder="发送邮件的邮箱"
            value={this.state.email}
            onChangeText={this.onEmailChange}
          />
          <Input
            label="授权密码"
            placeholder="第三方邮箱的授权密码"
            value={this.state.pwd}
            onChangeText={this.onPwdChange}
          />
          <Input
            label="smtp服务器"
            placeholder="邮箱服务器地址"
            value={this.state.smtp}
            onChangeText={this.onSmtpChange}
          />
        </FormItemGroup>
        <FormItemGroup title={'发送配置'}>
          <Input
            label="寄件人姓名"
            placeholder="姓名"
            value={this.state.name}
            onChangeText={this.onNameChange}
          />
          <Input
            label="收件人邮箱"
            placeholder="收件人"
            value={this.state.to}
            onChangeText={this.onToChange}
          />
          <Input
            label="抄送"
            placeholder="抄送"
            value={this.state.cc}
            onChangeText={this.onCcChange}
          />
          <Input
            label="主题"
            placeholder="主题"
            value={this.state.subject}
            onChangeText={this.onSubjectChange}
          />
        </FormItemGroup>
        <FormItemGroup title="内容模板">
          <FormItemContainer>
            <Button
              title="编辑内容模板"
              onPress={() => this.props.onEditContent()}
            />
          </FormItemContainer>
          <FormItemContainer>
            <Button title="编辑签名" onPress={() => this.props.onEditSign()} />
          </FormItemContainer>
        </FormItemGroup>
        {/*<FormItemGroup title={'内容模板'}>
          <RichEditor
            // initialFocus={true}
            editorStyle={this.contentStyle} // default light style
            ref={this.contentEditor}
            placeholder={'请输入'}
            initialContentHTML={this.state.content}
            onChange={this.handleContentChange}
          />
          <RichToolbar
            editor={this.contentEditor}
            selectedIconTint={'#2095F2'}
            disabledIconTint={'#bfbfbf'}
          />
        </FormItemGroup>
        <FormItemGroup title={'签名'}>
          <RichEditor
            // initialFocus={true}
            editorStyle={this.contentStyle} // default light style
            ref={this.signEditor}
            placeholder={'请输入'}
            initialContentHTML={this.state.sign}
            onChange={this.handleSignChange}
          />
          <RichToolbar
            editor={this.signEditor}
            selectedIconTint={'#2095F2'}
            disabledIconTint={'#bfbfbf'}
            onPressAddImage={this.onPressAddImage}
          />
        </FormItemGroup>*/}
      </ScrollView>
    );
  }
}

export default Setting;
