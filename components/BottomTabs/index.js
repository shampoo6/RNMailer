import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import TabButton from './TabButton';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 60,
    justifyContent: 'flex-end',
    backgroundColor: '#2089dc',
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

const BottomTabs = () => {
  let tabs = [
    {
      title: 'tab1',
      activeIcon: 'add-circle',
      inactiveIcon: 'add-circle-outline',
      active: false,
    },
    {
      title: 'tab2',
      activeIcon: 'add-circle',
      inactiveIcon: 'add-circle-outline',
      active: true,
    },
    {
      title: 'tab3',
      activeIcon: 'add-circle',
      inactiveIcon: 'add-circle-outline',
      active: false,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        {tabs.map((tab, index) => (
          <TabButton index={index} {...tab} key={tab.title} />
        ))}
      </View>
    </View>
  );
};

export default BottomTabs;
