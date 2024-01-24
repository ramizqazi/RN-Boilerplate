import React from 'react';
import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

export interface Props extends ScrollViewProps {
  Component: typeof React.Component;
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

/* =============================================================================
<Content />
============================================================================= */
const Content: React.FC<Props> = ({
  Component,
  children,
  containerStyle,
  contentContainerStyle,
  ...rest
}) => {
  return (
    <Component
      style={[styles.container, containerStyle]}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      {...rest}>
      {children}
    </Component>
  );
};

Content.defaultProps = {
  Component: ScrollView,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
});

/* Export
============================================================================= */
export default Content;
