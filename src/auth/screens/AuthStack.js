import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from './WelcomeScreen';

const Stack = createNativeStackNavigator();

/* =============================================================================
<AuthStack />
============================================================================= */
const AuthStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

/* Export
============================================================================= */
export default AuthStack;
