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
  let _html = '';

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
        centerComponent={{text: '内容模板', style: {color: '#fff'}}}
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
      />
    </>
  );
};

export default ContentScreen;
