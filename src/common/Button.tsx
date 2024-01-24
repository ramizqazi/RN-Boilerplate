import React, {ReactElement} from 'react';
import {ActivityIndicator, StyleProp, TextStyle} from 'react-native';

import Text, {Props as TextProps} from './Text';
import Touchable, {Props as TouchableProps} from './Touchable';
import {colors} from '../config/theme';

export interface Props extends TouchableProps {
  type: 'solid' | 'clear' | 'outline';
  size: 'sm' | 'md' | 'lg';
  variant: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  titleProps?: TextProps;
  left?: ReactElement;
  right?: ReactElement;
  loading?: boolean;
  uppercase?: boolean;
}

/* =============================================================================
<Button />
============================================================================= */
const Button: React.FC<Props> = ({
  style,
  type,
  size,
  variant,
  title,
  titleProps,
  titleStyle,
  left,
  right,
  loading,
  disabled,
  uppercase,
  ...rest
}) => {
  const bg =
    type === 'solid'
      ? disabled
        ? colors.disabled
        : colors[variant]
      : 'transparnet';
  const py = size === 'lg' ? 16 : size === 'md' ? 14 : 10;

  const color =
    type === 'solid'
      ? disabled
        ? '#dadada'
        : colors.white
      : disabled
      ? colors.disabled
      : colors[variant];
  const fontSize = size === 'lg' ? 16 : size === 'md' ? 16 : 14;
  const textTransform = uppercase ? 'uppercase' : undefined;

  const borderWidth = type === 'outline' ? 1 : 0;
  const borderColor =
    type === 'outline'
      ? disabled
        ? colors.disabled
        : colors[variant]
      : 'transparent';

  return (
    <Touchable
      style={[{borderWidth, borderColor}, style]}
      py={py}
      bg={bg}
      center
      {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={color} />
      ) : (
        <>
          {left}
          {Boolean(title) && (
            <Text
              style={[titleStyle]}
              color={color}
              size={fontSize}
              transform={textTransform}
              mx={10}
              {...titleProps}>
              {title}
            </Text>
          )}
          {right}
        </>
      )}
    </Touchable>
  );
};

Button.defaultProps = {
  type: 'solid',
  size: 'md',
  variant: 'primary',
  horizontal: true,
  radius: 10,
  uppercase: true,
  // android_ripple: {
  //   color: colors.ripple,
  //   borderless: false,
  //   radius: -5,
  // },
};

/* Export
============================================================================= */
export default Button;
