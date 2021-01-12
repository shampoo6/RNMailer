import React, {useRef} from 'react';
import {RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import {TouchableOpacity} from 'react-native';
import AntDIcon from 'react-native-vector-icons/AntDesign';
import {Header} from 'react-native-elements';

const ContentScreen = (props) => {
  let contentStyle = {
    backgroundColor: '#fff',
    // color: '#fff',
    placeholderColor: 'gray',
    // cssText: '#editor {background-color: #f3f3f3}', // initial valid
    contentCSSText: 'font-size: 16px; min-height: 200px; height: 100%;', // initial valid
  };
  const editor = useRef();
  let _html =
    '<p>顺颂商祺！</p><p><img src="http://mail-online.nosdn.127.net/bccc117b969ed7620287b262eb8b5763.jpg" /></p><p class="ql-align-justify"><strong>陆宪甫&nbsp;&nbsp;|&nbsp;教学部</strong></p><p class="ql-align-justify">公司地址：<span style="color: rgb(31, 31, 31);">重庆市九龙坡区渝州路87号双薪时代九楼</span></p><p class="ql-align-justify">手机号码：17783683002</p><p class="ql-align-justify">电子邮件：<a href="mailto:luxf_cq@hqyj.com" rel="noopener noreferrer" target="_blank">luxf_cq@hqyj.com</a></p><p class="ql-align-justify">集团官网：<a href="http://www.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">www.hqyj.com</a>&nbsp;</p><p class="ql-align-justify">创客学院：<a href="http://www.makeru.com.cn/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">www.makeru.com.cn</a><span style="color: rgb(31, 31, 31);">&nbsp;</span></p><p class="ql-align-justify"><span style="color: rgb(31, 31, 31);">研发中心：</span><a href="http://www.fsdev.com.cn/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">www.fsdev.com.cn</a></p><p class="ql-align-justify"><br></p><p class="ql-align-justify"><a href="http://bj.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">北京</a>·<a href="http://sh.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">上海</a>·<a href="http://sz.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">深圳</a>·<a href="http://cd.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">成都</a>·<a href="http://nj.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">南京</a>·<a href="http://wh.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">武汉</a>·<a href="http://xa.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">西安</a>·<a href="http://gz.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">广州</a>·<a href="http://sy.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">沈阳</a>·<a href="http://jn.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">济南</a>·<a href="http://cq.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">重庆</a>·<a href="http://cs.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">长沙</a></p>';

  const handleChange = (html) => {
    _html = html;
  };

  const save = () => {
    console.log(_html);
    goBack();
  };

  const goBack = () => {
    props.navigation.goBack();
  };

  const onPressAddImage = () => {
    // insert URL
    editor.current.insertImage(
      'http://mail-online.nosdn.127.net/bccc117b969ed7620287b262eb8b5763.jpg',
      'background: gray;',
    );
    // insert base64
    // this.richText.current?.insertImage(`data:${image.mime};base64,${image.data}`);
  };

  const leftButton = () => {
    return (
      <TouchableOpacity onPress={goBack}>
        <AntDIcon name={'arrowleft'} color={'#fff'} size={30} />
      </TouchableOpacity>
    );
  };

  const rightComponent = () => {
    return (
      <TouchableOpacity onPress={save}>
        <AntDIcon name={'check'} color={'#fff'} size={30} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header
        leftComponent={leftButton}
        rightComponent={rightComponent}
        centerComponent={{text: '签名', style: {color: '#fff'}}}
      />
      <RichEditor
        // initialFocus={true}
        ref={editor}
        editorStyle={contentStyle}
        placeholder={'请输入'}
        initialContentHTML={_html}
        onChange={handleChange}
      />
      <RichToolbar
        editor={editor}
        selectedIconTint={'#2095F2'}
        disabledIconTint={'#bfbfbf'}
        onPressAddImage={onPressAddImage}
      />
    </>
  );
};

export default ContentScreen;
