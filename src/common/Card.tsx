import React from 'react';
import {ColorValue, ShadowStyleIOS} from 'react-native';

import Touchable, {Props as TouchableProps} from './Touchable';
import {colors} from '../config/theme';

export interface Props extends TouchableProps, ShadowStyleIOS {
  borderColor?: ColorValue;
  borderWidth?: number;
  elevation?: number;
}

/* =============================================================================
<Card />
============================================================================= */
const Card: React.FC<Props> = ({
  style,
  borderWidth,
  borderColor,
  shadowColor,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  elevation,
  children,
  ...rest
}) => {
  const _style = {
    borderWidth,
    borderColor,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    elevation,
  };

  return (
    <Touchable style={[_style, style]} {...rest}>
      {children}
    </Touchable>
  );
};

Card.defaultProps = {
  py: 12,
  px: 14,
  bg: colors.card,
  radius: 10,
  borderWidth: 1,
  borderColor: colors.border,
};

/* Export
============================================================================= */
export default Card;
