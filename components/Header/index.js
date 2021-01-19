import React from 'react';
import {TouchableOpacity} from 'react-native';
import AntDIcon from 'react-native-vector-icons/AntDesign';
import {Header as EHeader} from 'react-native-elements';

const Header = (props) => {
  let {screenName} = props;

  const onSettingClick = () => {
    props.onSettingClick();
  };

  const onMailClick = () => {
    props.onMailClick();
  };

  const leftButton = () => {
    return (
      <TouchableOpacity onPress={onSettingClick}>
        <AntDIcon name={'setting'} color={'#fff'} size={30} />
      </TouchableOpacity>
    );
  };

  const rightButton = () => {
    return (
      <TouchableOpacity onPress={onMailClick}>
        <AntDIcon name={'mail'} color={'#fff'} size={30} />
      </TouchableOpacity>
    );
  };

  return (
    <EHeader
      // leftComponent={{icon: 'menu', color: '#fff'}}
      leftComponent={leftButton}
      centerComponent={{text: screenName, style: {color: '#fff'}}}
      // rightComponent={{icon: 'home', color: '#fff'}}
      rightComponent={rightButton}
    />
  );
};

export default Header;
