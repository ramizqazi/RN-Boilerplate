import React from 'react';
import {
  ColorValue,
  DimensionValue,
  FlexAlignType,
  StyleProp,
  Text as RNText,
  TextProps,
  TextStyle,
} from 'react-native';

import {colors} from '../config/theme';

export interface Props extends TextProps {
  style?: StyleProp<TextStyle>;
  // Flex styles
  flex?: number;
  alignSelf?: 'auto' | FlexAlignType;
  // Margin styles
  m?: DimensionValue;
  mt?: DimensionValue;
  ml?: DimensionValue;
  mr?: DimensionValue;
  mb?: DimensionValue;
  my?: DimensionValue;
  mx?: DimensionValue;
  // Text styles
  color?: ColorValue;
  size?: number;
  font?:
    | 'Inter-Regular'
    | 'Inter-Bold'
    | 'Inter-ExtraBold'
    | 'Inter-Light'
    | 'Inter-Medium'
    | 'Inter-SemiBold'
    | 'Inter-Thin'
    | 'Inter-Black';
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  ls?: number;
  lh?: number;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
}

/* =============================================================================
<Text />
============================================================================= */
const Text: React.FC<Props> = ({
  style,
  children,
  flex,
  alignSelf,
  m,
  mt,
  ml,
  mr,
  mb,
  my,
  mx,
  color,
  size,
  font,
  weight,
  ls,
  lh,
  align,
  transform,
  ...rest
}) => {
  const _style = {
    flex: flex,
    alignSelf: alignSelf,
    margin: m,
    marginTop: mt,
    marginLeft: ml,
    marginRight: mr,
    marginBottom: mb,
    marginVertical: my,
    marginHorizontal: mx,
    color: color,
    fontSize: size,
    fontFamily: font,
    fontWeight: weight,
    letterSpacing: ls,
    lineHeight: lh,
    textAlign: align,
    textTransform: transform,
  };

  return (
    <RNText style={[_style, style]} {...rest}>
      {children}
    </RNText>
  );
};

Text.defaultProps = {
  color: colors.text,
  size: 16,
  font: 'Inter-Regular',
};

/* Export
============================================================================= */
export default Text;
