import React from 'react';
import {View, StyleSheet} from 'react-native';
// import {Text, Divider} from 'react-native-elements';
import GroupTitle from './GroupTitle';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
});

const FormItemGroup = ({title, children}) => {
  return (
    <View style={styles.container}>
      <GroupTitle title={title} />
      {children}
    </View>
  );
};

export default FormItemGroup;
