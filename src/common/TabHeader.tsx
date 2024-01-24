import React, {ReactElement} from 'react';
import {ColorValue, GestureResponderEvent, ShadowStyleIOS} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import View, {Props as ViewProps} from './View';
import Text, {Props as TextProps} from './Text';
import Touchable from './Touchable';
import {colors} from '../config/theme';

export interface Props extends ViewProps, ShadowStyleIOS {
  title?: string;
  titleProps?: TextProps;
  left?: ReactElement;
  leftContainerProps?: ViewProps;
  right?: ReactElement;
  rightContainerProps?: ViewProps;
  borderWidth?: number;
  borderColor?: ColorValue;
  elevation?: number;
  onLeftPress?: null | ((event: GestureResponderEvent) => void);
  onRightPress?: null | ((event: GestureResponderEvent) => void);
}

/* =============================================================================
<TabHeader />
============================================================================= */
const TabHeader: React.FC<Props> = ({
  style,
  title,
  titleProps,
  left,
  right,
  leftContainerProps,
  rightContainerProps,
  borderWidth,
  borderColor,
  shadowColor,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  elevation,
  onLeftPress,
  onRightPress,
  ...rest
}) => {
  const insets = useSafeAreaInsets();
  // const navigation = useNavigation();

  const _style = {
    borderBottomWidth: borderWidth,
    borderBottomColor: borderColor,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    elevation,
  };

  const _handleLeftPress = (event: GestureResponderEvent) => {
    if (typeof onLeftPress === 'function') {
      onLeftPress(event);
      return;
    }

    // if (typeof navigation.toggleDrawer === 'function') {
    //   navigation.toggleDrawer();
    //   return;
    // }
  };

  const _handleRightPresss = (event: GestureResponderEvent) => {
    if (typeof onRightPress === 'function') {
      onRightPress(event);
      return;
    }
  };

  return (
    <View
      w="100%"
      h={insets.top + 60}
      horizontal
      align="center"
      style={[_style, style]}
      {...rest}>
      <Touchable
        h="100%"
        flex={1}
        align="flex-start"
        justify="center"
        pl={20}
        onPress={_handleLeftPress}
        {...leftContainerProps}>
        {left}
      </Touchable>
      <Text flex={4} align="center" font="Inter-SemiBold" {...titleProps}>
        {title}
      </Text>
      <Touchable
        h="100%"
        flex={1}
        align="flex-end"
        justify="center"
        pr={20}
        onPress={_handleRightPresss}
        {...rightContainerProps}>
        {right}
      </Touchable>
    </View>
  );
};

TabHeader.defaultProps = {
  bg: colors.background,
  // left: <FeatherIcon name="menu" color={colors.text} size={20} />,
};

/* Export
============================================================================= */
export default TabHeader;
