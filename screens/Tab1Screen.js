import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';

const Tab1Screen = () => {
  const postLocalNotification = () => {};

  return (
    <View>
      <Text h1>This is Tab1</Text>
      <Button
        title={'post local notification'}
        onPress={postLocalNotification}
      />
    </View>
  );
};

export default Tab1Screen;
