import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import AntDIcon from 'react-native-vector-icons/AntDesign';

const BackHeader = (props) => {
  const [rightComponent, setRightComponent] = useState(props.rightComponent);

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
      rightComponent={rightComponent}
      centerComponent={{text: '模板设置', style: {color: '#fff'}}}
    />
  );
};

export default BackHeader;
