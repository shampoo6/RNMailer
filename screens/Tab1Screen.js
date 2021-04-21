import React, {useEffect} from 'react';
import {View, NativeModules, NativeEventEmitter} from 'react-native';
import {Text, Button} from 'react-native-elements';
import AlertModule from '../nativeModule/AlertModule';
import PostRecordList from '../stores/postRecordList';

const Tab1Screen = () => {
  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(NativeModules.AlertModule);
    // 注册事件
    let eventListener = eventEmitter.addListener('AlertOver', (event) => {
      console.log(event); // java 传来的事件参数
    });

    return () => {
      // 注销事件
      eventListener.remove();
    };
  }, []);

  const getRecordList = () => {
    PostRecordList.getInstance()
      .getList()
      .then((list) => {
        console.log(list);
      });
  };

  const alert = () => {
    AlertModule.alert('=== hello world ！ ！ ！====', AlertModule.SHORT).then(
      (msg) => {
        console.log(`this is java msg: ${msg}`);
      },
    );
  };

  return (
    <View>
      <Text h1>This is Tab1</Text>
      <Button title={'test alert'} onPress={alert} />
      <Button title={'get record'} onPress={getRecordList} />
    </View>
  );
};

export default Tab1Screen;
