import React from 'react';
import BottomTabs from '../components/BottomTabs';
import {connect} from 'react-redux';
import Header from '../components/Header';
import ContentScreen from './ContentScreen';
// import Drawer from '../components/Drawer';

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//   },
//   navContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//   },
//   navigationContainer: {
//     backgroundColor: '#ecf0f1',
//   },
//   paragraph: {
//     padding: 16,
//     fontSize: 15,
//     textAlign: 'center',
//   },
// });

const HeaderContainer = connect((state) => {
  return {screenName: state.navigator.screenName};
})(Header);

const LayoutScreen = ({navigation}) => {
  // const drawer = useRef(null);

  return (
    // <DrawerLayoutAndroid
    //   ref={drawer}
    //   drawerWidth={300}
    //   drawerPosition="left"
    //   renderNavigationView={Drawer}>
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
        onTabTap={(screenName) => {
          console.log(screenName);
          navigation.navigate(screenName);
        }}
      />
    </>
    // </DrawerLayoutAndroid>
    // <View style={styles.container}>
    //   <HeaderContainer />
    //   <ContentScreen />
    //   <BottomTabs
    //     onTabTap={(screenName) => {
    //       console.log(screenName);
    //       navigation.navigate(screenName);
    //     }}
    //   />
    // </View>
  );
};

export default LayoutScreen;
