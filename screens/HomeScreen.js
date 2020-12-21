import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text h1>This is Home</Text>
      <Button
        title="navigate to details"
        onPress={() => {
          navigation.navigate('Details', {id: 0, message: 'from Home'});
        }}
      />
    </View>
  );
};

export default HomeScreen;
