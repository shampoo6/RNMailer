import React, {useRef} from 'react';
import BackHeader from '../components/BackHeader';
import Setting from '../components/Setting';
import AntDIcon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {getTemplate, setTemplate} from '../stores/mailTemplate';

// 有一个header用于导航返回的页面
const SettingScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const settings = useRef();

  dispatch(getTemplate()).then((_template) => {
    settings.current.setTemplate(_template);
  });

  const saveTemplate = () => {
    dispatch(setTemplate(settings.current.getTemplate()));
    navigation.goBack();
  };

  const goBack = () => {
    navigation.goBack();
  };

  const rightComponent = () => {
    return (
      <TouchableOpacity onPress={saveTemplate}>
        <AntDIcon name={'check'} color={'#fff'} size={30} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <BackHeader
        title="模板设置"
        onBack={goBack}
        rightComponent={rightComponent}
      />
      <Setting
        ref={settings}
        onEditContent={() => navigation.push('Mail/Content')}
        onEditSign={() => navigation.push('Mail/Sign')}
      />
    </>
  );
};

export default SettingScreen;
