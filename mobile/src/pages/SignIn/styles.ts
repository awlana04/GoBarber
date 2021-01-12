import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  padding: 0 30px;

  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin: 64px 0 24px;

  color: #f4ede8;
  font-size: 24px;
  font-family: 'RobotoSlab_500Medium';
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab_400Regular';
  font-size: 16px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  padding: 16px 0 ${16 + getBottomSpace()}px;

  background: #312e38;

  border-top-width: 1px;
  border-color: #232129;

  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CreateAccountButtonText = styled.Text`
  margin-left: 16px;

  color: #ff9000;
  font-family: 'RobotoSlab_400Regular';
  font-size: 16px;
`;
