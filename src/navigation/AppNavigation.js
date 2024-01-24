import React from 'react';
import {connect} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from '../auth/screens/AuthStack';
import HomeTab from './HomeTab';
import {colors} from '../config/theme';

import {selectUser} from '../auth/redux/authSlice';

const Stack = createNativeStackNavigator();

/* =============================================================================
<AppNavigation />
============================================================================= */
const AppNavigation = ({isAuthenticated}) => {
  const _handleOnReady = async () => {
    try {
      // Hide splash screen
      await RNBootSplash.hide({fade: true});
    } catch (e) {
      // TODO
    }
  };

  return (
    <NavigationContainer theme={theme} onReady={_handleOnReady}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="HomeTab" component={HomeTab} />
          </>
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const theme = {
  dark: false,
  colors: {
    primary: colors.primary,
    background: colors.background,
    text: colors.text,
    border: colors.border,
    notification: colors.accent,
  },
};

const mapStateToProps = state => ({
  isAuthenticated: Boolean(selectUser(state)),
});

const propsAreEqual = (prevProps, nextProps) =>
  prevProps.isAuthenticated === nextProps.isAuthenticated;

/* Export
============================================================================= */
export default connect(mapStateToProps)(
  React.memo(AppNavigation, propsAreEqual),
);
