import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
  },
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const fontAndIconColor = '#fff';

const TabButton = (props) => {
  const {index, activeIcon, inactiveIcon, title, active} = props;
  const clickHandler = () => {
    console.log('click handler be called');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.flexContainer} onPress={clickHandler}>
        <Ionicons
          name={active ? activeIcon : inactiveIcon}
          size={30}
          color={fontAndIconColor}
        />
        <Text style={{color: fontAndIconColor}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabButton;
