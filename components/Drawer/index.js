import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  btn: {
    width: '100%',
  },
});

const Drawer = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text h1>这是抽屉</Text>
      </View>
      <View style={styles.btn}>
        <Button title={'设置模板'} />
      </View>
    </View>
  );
};

export default Drawer;
