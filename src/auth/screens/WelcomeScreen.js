import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Button, Container, Content, Text, View} from '../../common';
import WelcomArt from '../../assets/images/welcom-art.svg';

/* =============================================================================
<WelcomeScreen />
============================================================================= */
const WelcomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <Container>
      <Content contentContainerStyle={{paddingBottom: insets.bottom + 30}}>
        <View flex={1} center>
          <WelcomArt />
        </View>
        <Text font="Inter-SemiBold" size={28} align="center" mb={10}>
          Book your dream{'\n'}
          flight with Travelin
        </Text>
        <Text size={14} font="Inter-Medium" align="center">
          It is a long established fact that a reader will{'\n'}
          be distracted by the readable content.
        </Text>
        <Button
          mt={30}
          size="lg"
          title="Get Started"
          left={<Feather name="map-pin" color="#fff" size={22} />}
        />
      </Content>
    </Container>
  );
};

/* Export
============================================================================= */
export default WelcomeScreen;
