import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Feed from './Feed';
import Page from './Page';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="home" component={Feed} />
      <Tab.Screen name="home2" component={Feed} />
      <Tab.Screen name="home3" component={Page} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
