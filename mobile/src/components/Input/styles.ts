import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 60px;
  margin-bottom: 8px;
  padding: 0 16px;

  background: #232129;
  border-radius: 10px;
  border-width: 2px;
  border-color: #232129;

  flex-direction: row;
  align-items: center;

  ${(props) =>
  props.isErrored &&
  css`
    border-color: #c53030;
  `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
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
