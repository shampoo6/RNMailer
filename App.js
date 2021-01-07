import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'; // 引入导航
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'react-native-elements'; // 引入ui
import store from './stores'; // 引入 store
import {Provider, connect} from 'react-redux';

// 导航注册的Screen
import LayoutScreen from './screens/LayoutScreen';
import SettingScreen from './screens/SettingScreen';

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
            screenOptions={{headerShown: false}}>
            <Screen name="Layout" component={LayoutScreenContainer} />
            <Screen name="Setting" component={SettingScreen} />
          </Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
