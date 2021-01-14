import React, {useRef} from 'react';
import {RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import {TouchableOpacity} from 'react-native';
import AntDIcon from 'react-native-vector-icons/AntDesign';
import {Header} from 'react-native-elements';
import {getTemplate, setSign} from '../../stores/mailTemplate';
import {useDispatch} from 'react-redux';

const ContentScreen = (props) => {
  const dispatch = useDispatch();

  let contentStyle = {
    backgroundColor: '#fff',
    // color: '#fff',
    placeholderColor: 'gray',
    // cssText: '#editor {background-color: #f3f3f3}', // initial valid
    contentCSSText: 'font-size: 16px; min-height: 200px; height: 100%;', // initial valid
  };
  const editor = useRef();
  let _html = '';

  dispatch(getTemplate()).then((template) => {
    _html = template.sign;
  });

  const onEditReady = () => {
    console.log('ready');
    editor.current.setContentHTML(_html);
  };

  const handleChange = (html) => {
    _html = html;
  };

  const save = () => {
    dispatch(setSign(_html));
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
        editorInitializedCallback={onEditReady}
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
