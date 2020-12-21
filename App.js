import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Header, ThemeProvider} from 'react-native-elements';

import Tab1Screen from './screens/Tab1Screen';
import Tab2Screen from './screens/Tab2Screen';
import Tab3Screen from './screens/Tab3Screen';

import BottomTabs from './components/BottomTabs';

const Stack = createStackNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;

const App = () => {
  return (
    <ThemeProvider>
      <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
      <NavigationContainer>
        <Navigator initialRouteName="Tab1" screenOptions={{headerShown: false}}>
          <Screen name="Tab1" component={Tab1Screen} />
          <Screen name="Tab2" component={Tab2Screen} />
          <Screen name="Tab3" component={Tab3Screen} />
        </Navigator>
      </NavigationContainer>
      <BottomTabs />
    </ThemeProvider>
  );
};

export default App;
