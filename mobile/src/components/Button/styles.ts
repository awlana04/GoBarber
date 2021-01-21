import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: ${Dimensions.get('window').width - 60}px;
  height: 60px;
  margin-top: 8px;

  background: #ff9000;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #312e38;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
`;
