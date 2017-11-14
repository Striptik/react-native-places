import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';

import Home from '../features/home';
import Places from '../features/places';
import React from 'react';
import { Text, View } from 'react-native';

const Tabs = TabNavigator({
  Places: {
    screen: Places,
    navigationOptions: {
      header: null
    }
  },
  Around: {
    screen: () => <Text>Around</Text>
  },
  Friends: {
    screen: () => <Text>Friends</Text>
  },
});


// FOR DRAWER Navigator
const Drawer = DrawerNavigator(
  {
    Drawer: {
      screen: Tabs,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    drawerPosition: 'right',
    contentComponent: props => (
      <View>
        <Text {...props}>Hello Drawer</Text>
      </View>
    ),
  },
);

// FOR STACK Mavigator
const Stack= StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Places: {
    screen: Drawer,
    navigationOptions: {
      header: null,
    },
  },
});

export default Stack;