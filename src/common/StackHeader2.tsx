import React, {ReactElement} from 'react';
import {ColorValue, GestureResponderEvent, ShadowStyleIOS} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
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
<StackHeader2 />
============================================================================= */
const StackHeader2: React.FC<Props> = ({
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
  const navigation = useNavigation();

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

    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }
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
      h={insets.top + 80}
      horizontal
      align="center"
      style={[_style, style]}
      {...rest}>
      <View h="100%" flex={1} horizontal>
        <Touchable
          h="100%"
          justify="center"
          pl={20}
          pr={16}
          onPress={_handleLeftPress}
          {...leftContainerProps}>
          {left}
        </Touchable>
        <Text align="center" font="Inter-SemiBold" size={24} {...titleProps}>
          {title}
        </Text>
      </View>
      <Touchable
        h="100%"
        align="flex-end"
        justify="center"
        pl={16}
        pr={20}
        onPress={_handleRightPresss}
        {...rightContainerProps}>
        {right}
      </Touchable>
    </View>
  );
};

StackHeader2.defaultProps = {
  bg: colors.background,
  left: <FeatherIcon name="arrow-left" color={colors.text} size={24} />,
};

/* Export
============================================================================= */
export default StackHeader2;
