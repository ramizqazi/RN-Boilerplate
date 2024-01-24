import React from 'react';
import {
  AnimatableNumericValue,
  ColorValue,
  DimensionValue,
  FlexAlignType,
  StyleProp,
  StyleSheet,
  View as RNView,
  ViewProps,
  ViewStyle,
} from 'react-native';

export interface Props extends ViewProps {
  style?: StyleProp<ViewStyle>;
  center?: boolean;
  horizontal?: boolean;
  // Flex styles
  flex?: number;
  gap?: number;
  rGap?: number;
  cGap?: number;
  align?: FlexAlignType;
  alignSelf?: 'auto' | FlexAlignType;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  // Layout styles
  w?: DimensionValue;
  h?: DimensionValue;
  bg?: ColorValue;
  radius?: AnimatableNumericValue;
  overflow?: 'visible' | 'hidden' | 'scroll';
  opacity?: AnimatableNumericValue;
  zIndex?: number;
  // Margin styles
  m?: DimensionValue;
  mt?: DimensionValue;
  ml?: DimensionValue;
  mr?: DimensionValue;
  mb?: DimensionValue;
  my?: DimensionValue;
  mx?: DimensionValue;
  // Padding styles
  p?: DimensionValue;
  pt?: DimensionValue;
  pl?: DimensionValue;
  pr?: DimensionValue;
  pb?: DimensionValue;
  py?: DimensionValue;
  px?: DimensionValue;
}

/* =============================================================================
<View />
============================================================================= */
const View: React.FC<Props> = ({
  style,
  center,
  children,
  horizontal,
  flex,
  gap,
  rGap,
  cGap,
  align,
  alignSelf,
  justify,
  w,
  h,
  bg,
  radius,
  overflow,
  opacity,
  zIndex,
  m,
  mt,
  ml,
  mr,
  mb,
  my,
  mx,
  p,
  pt,
  pl,
  pr,
  pb,
  py,
  px,
  ...rest
}) => {
  const _style = {
    flex: flex,
    gap: gap,
    rowGap: rGap,
    columnGap: cGap,
    alignItems: align,
    alignSelf: alignSelf,
    justifyContent: justify,
    width: w,
    height: h,
    backgroundColor: bg,
    borderRadius: radius,
    overflow,
    opacity,
    zIndex,
    margin: m,
    marginTop: mt,
    marginLeft: ml,
    marginRight: mr,
    marginBottom: mb,
    marginVertical: my,
    marginHorizontal: mx,
    padding: p,
    paddingTop: pt,
    paddingLeft: pl,
    paddingRight: pr,
    paddingBottom: pb,
    paddingVertical: py,
    paddingHorizontal: px,
  };

  return (
    <RNView
      style={[
        _style,
        center && styles.center,
        horizontal && styles.horizontal,
        style,
      ]}
      {...rest}>
      {children}
    </RNView>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

/* Export
============================================================================= */
export default View;
