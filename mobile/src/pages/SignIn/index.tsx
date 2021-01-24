import React from 'react';
import { Image } from 'react-native';
import Icon from '';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/logo.png';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={Logo} />

      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />

      <Input name="password" icon="lock" placeholder="Senha" />

      <Button onPress={() => console.log('Hello World!')}>Entrar</Button>
    </Container>
  );
};

export default SignIn;
