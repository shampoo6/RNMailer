import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import {useFocusEffect} from '@react-navigation/native';
import PostRecordList from '../stores/postRecordList';
// import storage from '../stores/storage';
import moment from 'moment';
import 'moment/locale/zh-cn';

const styles = StyleSheet.create({
  subTitle: {
    color: 'gray',
    fontSize: 12,
  },
  emptyTip: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
  },
});

const RecordListScreen = ({navigation}) => {
  let [list, setList] = useState([]);
  let [refreshing, setRefreshing] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      // todo 测试用删除代码
      // storage.getIdsForKey('postRecords').then((ids) => {
      //   console.log(ids);
      //   ids.forEach((id) => {
      //     storage.remove({
      //       key: 'postRecords',
      //       id: id,
      //     });
      //   });
      // });

      // Do something when the screen is focused
      refreshList();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  const refreshList = () => {
    return new Promise((resolve) => {
      PostRecordList.getInstance()
        .getList()
        .then((_list) => {
          setList(_list);
          resolve();
        });
    });
  };

  const onItemPress = (recordId) => {
    navigation.push('SendMail', {recordId});
  };

  const onRefresh = () => {
    setRefreshing(true);
    refreshList().then(() => {
      setRefreshing(false);
    });
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {list.length === 0 && (
        <View style={styles.emptyTip}>
          <Text>暂无数据</Text>
        </View>
      )}
      {list.map((item, i) => (
        <TouchableOpacity
          key={item.sendTime}
          onPress={() => onItemPress(item.id)}>
          <ListItem bottomDivider>
            {/*<Icon name={item.icon} />*/}
            <ListItem.Content>
              <ListItem.Title>
                {moment(item.sendTime).format('dddd YYYY-MM-DD HH:mm')}
              </ListItem.Title>
              <Text style={styles.subTitle}>
                {moment(item.sendTime).fromNow()}
              </Text>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default RecordListScreen;
