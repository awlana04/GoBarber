import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  margin-bottom: 8px;

  background: #232129;

  border-width: 2px;
  border-color: #232129;
  border-radius: 10px;

  flex-direction: row;
  align-items: center;

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #c53030;
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

export const TextInput = styled.TextInput`
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';

  flex: 1;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
