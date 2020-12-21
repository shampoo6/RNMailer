import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';
// import {useFocusEffect} from '@react-navigation/native';

const DetailsScreen = ({navigation, route}) => {
  let {id, message} = route.params;

  // useEffect 触发时机可以当作react 生命周期钩子触发
  // useEffect(() => {
  //   console.log('DetailsScreen did mounted');
  //   return () => {
  //     console.log('DetailsScreen will unmounted');
  //   };
  // }, []);
  // useFocusEffect 获取或失去焦点时触发，和声明周期有所区别
  // useFocusEffect(
  //   React.useCallback(() => {
  //     // Do something when the screen is focused
  //     console.log(`details id: ${id} is focused`);
  //     return () => {
  //       // Do something when the screen is unfocused
  //       // Useful for cleanup functions
  //
  //       console.log(`details id: ${id} is unfocused`);
  //     };
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []),
  // );

  return (
    <View>
      <Text h1>This is Details {id}</Text>
      <Text h3>from pre screen message: {message}</Text>
      <Button
        title="navigate to next details"
        onPress={() => {
          navigation.push('Details', {
            id: id + 1,
            message: `from Details ${id}`,
          });
        }}
      />
      <Button
        title="go Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Button
        title="go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="pop to top"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

export default DetailsScreen;
