import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import myStorage from '../stores/myStorage';

const Tab2Screen = () => {
  let id = 0;

  const onSaveSame = () => {
    myStorage
      .save({
        key: 'test',
        id: 'myid',
        data: JSON.stringify({msg: 'test message' + id}),
        expires: 30000,
      })
      .then((result) => {
        console.log(result);
        id++;
      });
  };

  const onSaveDifferent = () => {
    myStorage
      .save({
        key: 'test',
        id: 'myid' + id,
        data: JSON.stringify({msg: 'test message'}),
        expires: 30000,
      })
      .then((result) => {
        console.log(result);
        id++;
      });
  };

  const onLoad = () => {
    myStorage.load({key: 'test', id: 'myid' + (id - 1)}).then((result) => {
      console.log(result);
    });
  };

  return (
    <View>
      <Text h1>This is Tab2</Text>
      <View>
        <Button onPress={onSaveSame} title={'SaveSame'} />
        <Button onPress={onSaveDifferent} title={'SaveDifferent'} />
        <Button onPress={onLoad} title={'load'} />
      </View>
    </View>
  );
};

export default Tab2Screen;
