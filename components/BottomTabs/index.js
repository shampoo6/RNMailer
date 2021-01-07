import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import TabButton from './TabButton';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 60,
    // justifyContent: 'flex-end',
    backgroundColor: '#2089dc',
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

const BottomTabs = (props) => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(true);
  const [active3, setActive3] = useState(false);

  const setActives = [setActive1, setActive2, setActive3];

  let tabs = [
    {
      title: 'tab1',
      screenName: 'Tab1',
      activeIcon: 'add-circle',
      inactiveIcon: 'add-circle-outline',
      active: active1,
    },
    {
      title: 'tab2',
      screenName: 'Tab2',
      activeIcon: 'add-circle',
      inactiveIcon: 'add-circle-outline',
      active: active2,
    },
    {
      title: 'tab3',
      screenName: 'Tab3',
      activeIcon: 'add-circle',
      inactiveIcon: 'add-circle-outline',
      active: active3,
    },
  ];

  let current = ((_tabs) => {
    for (let index in _tabs) {
      let tab = tabs[index];
      if (tab.active) {
        return index;
      }
    }
    return -1;
  })(tabs);

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        {tabs.map((tab, index) => (
          <TabButton
            onClickHandler={(index) => {
              // 修改图标
              try {
                setActives[current](false);
                current = index;
                setActives[current](true);
              } catch (e) {
                console.error(e);
              }
              props.onTabTap(tabs[index].screenName);
            }}
            index={index}
            {...tab}
            key={tab.title}
          />
        ))}
      </View>
    </View>
  );
};

export default BottomTabs;
