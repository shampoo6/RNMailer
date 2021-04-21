import React from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import Tab1Screen from './Tab1Screen';
import Tab2Screen from './Tab2Screen';
import RecordListScreen from './RecordListScreen';

const Stack = createStackNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;

const Tab1ScreenContainer = connect((state) => {
  return {screenName: state.navigator.screenName};
})(Tab1Screen);
const Tab2ScreenContainer = connect((state) => {
  return {screenName: state.navigator.screenName};
})(Tab2Screen);

const ContentScreen = () => {
  return (
    <Navigator
      initialRouteName="RecordList"
      screenOptions={{headerShown: false}}>
      <Screen name="Tab1" component={Tab1ScreenContainer} />
      <Screen name="Tab2" component={Tab2ScreenContainer} />
      <Screen name="RecordList" component={RecordListScreen} />
    </Navigator>
  );
};

export default ContentScreen;
