import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Divider} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'red',
  },
  title: {
    marginBottom: 10,
  },
});

const GroupTitle = ({title}) => {
  return (
    <View style={styles.container}>
      <Text h4 style={styles.title}>
        {title}
      </Text>
      <Divider />
    </View>
  );
};

export default GroupTitle;
