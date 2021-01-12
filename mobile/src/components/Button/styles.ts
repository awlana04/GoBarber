import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  margin-top: 8px;

  background: #f99000;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #312e38;
  font-family: 'RobotoSlab_500Medium';
  font-size: 18px;
`;
