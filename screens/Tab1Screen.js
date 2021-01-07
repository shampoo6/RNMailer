import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {changeScreen} from '../stores/navigator';

const Tab1Screen = ({dispatch}) => {
  const route = useRoute();
  useFocusEffect(
    React.useCallback(() => {
      console.log(route);
      dispatch(changeScreen(route.name));
    }, [dispatch, route]),
  );

  return (
    <View>
      <Text h1>This is Tab1</Text>
    </View>
  );
};

export default Tab1Screen;
