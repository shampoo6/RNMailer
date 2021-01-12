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
      email: 'shampoo6@163.com',
      pwd: 'PDIVXWEXEPZWGXDR',
      smtp: 'smtp.163.com',
      name: '陆宪甫2233',
      to: 'hywllxf@163.com, 454714691@qq.com',
      cc: '2721445883@qq.com',
      subject: '测试主题',
      content: '测试内容',
      sign:
        '<p>顺颂商祺！</p><p><img src="http://mail-online.nosdn.127.net/bccc117b969ed7620287b262eb8b5763.jpg" /></p><p class="ql-align-justify"><strong>陆宪甫&nbsp;&nbsp;|&nbsp;教学部</strong></p><p class="ql-align-justify">公司地址：<span style="color: rgb(31, 31, 31);">重庆市九龙坡区渝州路87号双薪时代九楼</span></p><p class="ql-align-justify">手机号码：17783683002</p><p class="ql-align-justify">电子邮件：<a href="mailto:luxf_cq@hqyj.com" rel="noopener noreferrer" target="_blank">luxf_cq@hqyj.com</a></p><p class="ql-align-justify">集团官网：<a href="http://www.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">www.hqyj.com</a>&nbsp;</p><p class="ql-align-justify">创客学院：<a href="http://www.makeru.com.cn/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">www.makeru.com.cn</a><span style="color: rgb(31, 31, 31);">&nbsp;</span></p><p class="ql-align-justify"><span style="color: rgb(31, 31, 31);">研发中心：</span><a href="http://www.fsdev.com.cn/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">www.fsdev.com.cn</a></p><p class="ql-align-justify"><br></p><p class="ql-align-justify"><a href="http://bj.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">北京</a>·<a href="http://sh.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">上海</a>·<a href="http://sz.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">深圳</a>·<a href="http://cd.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">成都</a>·<a href="http://nj.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">南京</a>·<a href="http://wh.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">武汉</a>·<a href="http://xa.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">西安</a>·<a href="http://gz.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">广州</a>·<a href="http://sy.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">沈阳</a>·<a href="http://jn.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">济南</a>·<a href="http://cq.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">重庆</a>·<a href="http://cs.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">长沙</a></p>',
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
