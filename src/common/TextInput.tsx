import React, {ReactElement, useRef} from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

import Text, {Props as TextProps} from './Text';
import Touchable, {Props as TouchableProps} from './Touchable';
import View, {Props as ViewProps} from './View';
import {colors} from '../config/theme';

export interface Props extends TextInputProps {
  left?: ReactElement;
  right?: ReactElement;
  error?: string;
  label?: string;
  labelProps?: TextProps;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  containerProps?: TouchableProps;
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerProps?: ViewProps;
  contentContainerStyle?: StyleProp<ViewStyle>;
  onPress?: null | ((event: GestureResponderEvent) => void);
}

/* =============================================================================
<TextInput />
============================================================================= */
const TextInput: React.FC<Props> = ({
  label,
  left,
  right,
  value,
  error,
  editable,
  labelStyle,
  labelProps,
  inputStyle,
  containerStyle,
  containerProps,
  contentContainerStyle,
  contentContainerProps,
  onPress,
  ...rest
}) => {
  const _textInput = useRef<RNTextInput>(null);
  const isError = Boolean(error);
  const errorDescription = error || '';

  const _handlePress = (e: GestureResponderEvent) => {
    if (typeof onPress === 'function') {
      onPress(e);
    } else if (_textInput.current && editable) {
      _textInput.current.focus();
    }
  };

  return (
    <Touchable
      style={[styles.container, containerStyle]}
      disabled={!editable}
      onPress={_handlePress}
      {...containerProps}>
      {!!label && (
        <Text style={[styles.label, labelStyle]} {...labelProps}>
          {label}
        </Text>
      )}
      <View
        style={[
          styles.content,
          isError && styles.errorContent,
          contentContainerStyle,
        ]}
        {...contentContainerProps}>
        {left}
        <RNTextInput
          ref={_textInput}
          value={value}
          style={[
            styles.input,
            left && styles.inputWithLeft,
            right && styles.inputWithRight,
            inputStyle,
          ]}
          editable={editable}
          {...rest}
        />
        {right}
      </View>
      {isError && (
        <Text style={styles.errorDescription}>{errorDescription}</Text>
      )}
    </Touchable>
  );
};

TextInput.defaultProps = {
  editable: true,
  selectionColor: '#8A93A0',
  placeholderTextColor: colors.placeholder,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 12,
    backgroundColor: 'transparent',
  },
  label: {
    marginBottom: 8,
    color: colors.label,
    fontSize: 16,
    fontFamily: 'Intel-Semibold',
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border,
  },
  input: {
    height: 56,
    flex: 1,
    paddingHorizontal: 0,
    color: colors.text,
    fontSize: 15,
    fontFamily: 'Inter-Regular',
  },
  inputWithLeft: {
    marginLeft: 14,
  },
  inputWithRight: {
    marginRight: 14,
  },
  errorContent: {
    borderWidth: 1,
    borderColor: colors.error,
  },
  errorDescription: {
    color: colors.error,
    marginTop: 5,
    textAlign: 'center',
  },
});

/* Export
============================================================================= */
export default TextInput;
