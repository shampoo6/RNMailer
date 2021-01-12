import React, {useRef} from 'react';
import BackHeader from '../components/BackHeader';
import Setting from '../components/Setting';
import AntDIcon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';

// 有一个header用于导航返回的页面
const SettingScreen = ({navigation}) => {
  const settings = useRef();
  const saveTemplate = () => {
    // todo 获取并保存模板
    console.log('save template');
    console.log(settings.current.getTemplate());
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
