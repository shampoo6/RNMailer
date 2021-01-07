import React from 'react';
import BackHeader from '../components/BackHeader';
import Setting from '../components/Setting';

// 有一个header用于导航返回的页面
const SettingScreen = ({navigation}) => {
  return (
    <>
      <BackHeader
        onBack={() => {
          navigation.goBack();
        }}
      />
      <Setting />
    </>
  );
};

export default SettingScreen;
