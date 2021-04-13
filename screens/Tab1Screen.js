import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {changeScreen} from '../stores/navigator';
import PushNotification from 'react-native-push-notification';

const Tab1Screen = ({dispatch}) => {
  const route = useRoute();
  useFocusEffect(
    React.useCallback(() => {
      console.log(route);
      dispatch(changeScreen(route.name));
    }, [dispatch, route]),
  );

  const postLocalNotification = () => {
    console.log('post notification');
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'this is title',
      message: 'this is a test notification message',
      soundName: 'snake_call_in.mp3',
    });
    // PushNotification.localNotificationSchedule({
    //   //... You can use all the options from localNotifications
    //   message: 'My Notification Message', // (required)
    //   date: new Date(Date.now() + 60 * 1000), // in 60 secs
    //   allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
    // });
  };

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
