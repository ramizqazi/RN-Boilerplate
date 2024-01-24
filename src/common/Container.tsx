import React from 'react';
import {StatusBar, StatusBarStyle} from 'react-native';

import View, {Props as ViewProps} from './View';
import {colors} from '../config/theme';

export interface Props extends ViewProps {
  barStyle: StatusBarStyle;
}

/* =============================================================================
<Container />
============================================================================= */
const Container: React.FC<Props> = ({children, barStyle, ...rest}) => {
  return (
    <View {...rest}>
      <StatusBar barStyle={barStyle} backgroundColor={rest.bg} />
      {children}
    </View>
  );
};

Container.defaultProps = {
  flex: 1,
  bg: colors.background,
  barStyle: 'dark-content',
};

/* Export
============================================================================= */
export default Container;
