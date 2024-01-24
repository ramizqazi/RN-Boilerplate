import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';

import Touchable, {Props as TouchableProps} from './Touchable';

export interface Props extends TouchableProps {
  size: number;
  source: number | Source;
}

/* =============================================================================
<Avatar />
============================================================================= */
const Avatar: React.FC<Props> = ({size, source, style, ...rest}) => {
  const _style = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  return (
    <Touchable style={[styles.container, _style, style]} {...rest}>
      <FastImage style={{width: size, height: size}} source={source} />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});

/* Export
============================================================================= */
export default Avatar;
