import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 24px;

  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 48px;

  color: #f4ede8;
  font-size: 32px;
  font-family: 'RobotoSlab_500Medium';
  text-align: center;
`;

export const Description = styled.Text`
  margin-top: 16px;

  color: #999195;
  font-size: 18px;
  font-family: 'RobotoSlab_400Regular';
`;

export const OkButton = styled(RectButton)`
  margin-top: 24px;
  padding: 12px 24px;

  background: #ff9000;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const OkButtonText = styled.Text`
  color: #312e38;
  font-size: 18px;
  font-family: 'RobotoSlab_500Medium';
`;
