import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'; // 引入导航
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'react-native-elements'; // 引入ui
import store from './stores'; // 引入 store
import {connect, Provider} from 'react-redux';
import PushNotification from 'react-native-push-notification';
// 导航注册的Screen
import LayoutScreen from './screens/LayoutScreen';
import SettingScreen from './screens/SettingScreen';
import ContentScreen from './screens/Mail/ContentScreen';
import SignScreen from './screens/Mail/SignScreen';
import SendMailScreen from './screens/SendMailScreen';


// 注册本地推送
// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);

    // process the notification
    console.log('this is navigation');
    console.log(global.nav);

    global.nav.push('SendMail');

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish();
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);

    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function (err) {
    console.error(err.message, err);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: false,
});

PushNotification.createChannel(
  {
    channelId: 'test-channel', // (required)
    channelName: 'My test channel', // (required)
    channelDescription: 'A channel for test', // (optional) default: undefined.
    playSound: true, // (optional) default: true
    soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    importance: 4, // (optional) default: 4. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  },
  (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);

PushNotification.cancelAllLocalNotifications();
PushNotification.localNotificationSchedule({
  //... You can use all the options from localNotifications
  channelId: 'test-channel',
  title: 'this is Schedule title',
  message: 'this is a test notification Schedule message',
  date: new Date(Date.now() + 5 * 1000), // in 60 secs
  allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
  soundName: 'snake_call_in.mp3',
});

const LayoutScreenContainer = connect((state) => {
  return {screenName: state.navigator.screenName};
})(LayoutScreen);

const Stack = createStackNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          {/* todo 测试代码 */}
          <Navigator
            initialRouteName="Layout"
            // initialRouteName="Setting"
            // initialRouteName="Test1"
            screenOptions={{headerShown: false}}>
            <Screen name="Layout" component={LayoutScreenContainer} />
            <Screen name="Setting" component={SettingScreen} />
            <Screen name="Mail/Content" component={ContentScreen} />
            <Screen name="Mail/Sign" component={SignScreen} />
            <Screen name="SendMail" component={SendMailScreen} />
          </Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
