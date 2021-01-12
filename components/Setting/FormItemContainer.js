import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
});

const FormItemContainer = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default FormItemContainer;
