import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  margin-bottom: 8px;
  padding: 0 16px;

  background: #232129;
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const TextInput = styled.TextInput`
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab_400Regular';

  flex: 1;
`;