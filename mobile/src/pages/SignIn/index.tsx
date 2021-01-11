import React from 'react';
import { Image } from 'react-native';
import { useFonts } from 'expo-font';
import { RobotoSlab_400Regular, RobotoSlab_500Medium } from '@expo-google-fonts/roboto-slab';

import Logo from '../../assets/logo.png';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Container>
      <Image source={Logo} />

      <Title>Faça seu logon</Title>
    </Container>
  );
};

export default SignIn;
