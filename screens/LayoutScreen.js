import React, {useEffect} from 'react';
import BottomTabs from '../components/BottomTabs';
import {connect} from 'react-redux';
import Header from '../components/Header';
import ContentScreen from './ContentScreen';
import quitBackHandler from '../utils/quitBackHandler';
import {changeScreen} from '../stores/navigator';

const HeaderContainer = connect((state) => {
  return {screenName: state.navigator.screenName};
})(Header);

const LayoutScreen = ({navigation, dispatch}) => {
  useEffect(() => {
    quitBackHandler.register();
    return () => {
      quitBackHandler.unregister();
    };
  }, []);

  return (
    <>
      <HeaderContainer
        onSettingClick={() => {
          navigation.push('Setting');
        }}
        onMailClick={() => {
          navigation.push('SendMail');
        }}
      />
      <ContentScreen />
      <BottomTabs
        onTabTap={(screenName, title) => {
          dispatch(changeScreen(title));
          navigation.navigate(screenName);
        }}
      />
    </>
  );
};

export default LayoutScreen;
