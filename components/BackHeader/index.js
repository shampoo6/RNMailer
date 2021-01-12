import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import AntDIcon from 'react-native-vector-icons/AntDesign';

const BackHeader = (props) => {
  const back = () => {
    props.onBack();
  };

  const leftButton = () => {
    return (
      <TouchableOpacity onPress={back}>
        <AntDIcon name={'arrowleft'} color={'#fff'} size={30} />
      </TouchableOpacity>
    );
  };

  return (
    <Header
      leftComponent={leftButton}
      rightComponent={props.rightComponent}
      centerComponent={{text: props.title, style: {color: '#fff'}}}
    />
  );
};

export default BackHeader;
