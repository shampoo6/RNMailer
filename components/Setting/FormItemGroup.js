import React from 'react';
import {StyleSheet} from 'react-native';
// import {Text, Divider} from 'react-native-elements';
import GroupTitle from './GroupTitle';
import FormItemContainer from './FormItemContainer';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
});

const FormItemGroup = ({title, children}) => {
  return (
    <FormItemContainer style={styles.container}>
      <GroupTitle title={title} />
      {children}
    </FormItemContainer>
  );
};

export default FormItemGroup;
