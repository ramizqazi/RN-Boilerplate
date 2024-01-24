import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeTabBar from './HomeTabBar';

const Tab = createBottomTabNavigator();

/* =============================================================================
<HomeTab />
============================================================================= */
const HomeTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={renderTabBar}>
      <Tab.Screen name="Home" component={EMPTY_SCREEN} />
      <Tab.Screen name="Map" component={EMPTY_SCREEN} />
      <Tab.Screen name="Profile" component={EMPTY_SCREEN} />
      <Tab.Screen name="Settings" component={EMPTY_SCREEN} />
    </Tab.Navigator>
  );
};

const renderTabBar = props => <HomeTabBar {...props} />;

// TODO - Temporaray screen
const EMPTY_SCREEN = () => null;

/* Export
============================================================================= */
export default HomeTab;
