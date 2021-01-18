import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {changeScreen} from '../stores/navigator';
import {useDispatch} from 'react-redux';
import {getTemplate} from '../stores/mailTemplate';
import mailer from '../utils/mailer';

const SendMailScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  useFocusEffect(
    React.useCallback(() => {
      console.log(route);
      dispatch(changeScreen('发送邮件'));
    }, [dispatch, route]),
  );

  let template;

  dispatch(getTemplate()).then((_template) => {
    template = _template;
  });

  const sendMail = () => {
    console.log(template);
    mailer.sendMail(template).then((result) => {
      console.log(result);
    });
  };

  return (
    <View>
      <Text h1>Send Mail Screen</Text>
      <Button title="发送邮件" onPress={sendMail} />
    </View>
  );
};

export default SendMailScreen;
