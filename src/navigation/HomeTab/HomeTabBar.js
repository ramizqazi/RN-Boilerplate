import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, useWindowDimensions} from 'react-native';

import {View, Touchable, Text} from '../../common';
import {colors} from '../../config/theme';

/* =============================================================================
<HomeTabBar />
============================================================================= */
const HomeTabBar = ({state, descriptors, navigation}) => {
  const insets = useSafeAreaInsets();
  const {width: totalWidth} = useWindowDimensions();
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={styles.container}
      horizontal
      w={totalWidth}
      h={insets.bottom + 70}
      pb={insets.bottom}
      align="center"
      bg={colors.white}>
      {state.routes.map((route, index) => {
        const title = route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Touchable
            key={route.name}
            center
            py={16}
            flex={1}
            rippleColor="#999"
            onPress={onPress}
            onLongPress={onLongPress}>
            {isFocused ? ICONS[index][1] : ICONS[index][0]}
            <Text
              font="Inter-Medium"
              mt={4}
              color={isFocused ? colors.primary : colors.placeholder}
              size={14}>
              {title}
            </Text>
          </Touchable>
        );
      })}
    </View>
  );
};

const ICONS = {
  0: [
    <Feather name="home" color={colors.placeholder} size={22} />,
    <Feather name="home" color={colors.primary} size={22} />,
  ],
  1: [
    <Feather name="map-pin" color={colors.placeholder} size={22} />,
    <Feather name="map-pin" color={colors.primary} size={22} />,
  ],
  2: [
    <Feather name="user" color={colors.placeholder} size={22} />,
    <Feather name="user" color={colors.primary} size={22} />,
  ],
  3: [
    <Feather name="settings" color={colors.placeholder} size={22} />,
    <Feather name="settings" color={colors.primary} size={22} />,
  ],
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

/* Export
============================================================================= */
export default HomeTabBar;
