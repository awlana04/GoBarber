import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 16px;

  background: #232129;
  color: #666360;
  border-radius: 10px;
  border: 2px solid #232129;

  display: flex;
  align-items: center;

  &:focus {
    background: #fff;
  }

  & ::placeholder {
    color: #666360;
  }

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    border: 0;

    background: transparent;
    color: #f4ede8;
  }

  svg {
    margin-right: 16px;
  }
`;
