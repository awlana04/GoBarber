import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    padding: 8px;

    background: #ff9000;
    color: #312e38;
    font-size: 14px;
    font-weight: 500;
    border-radius: 4px;

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    position: absolute;
    left: 50%;
    bottom: calc(100% + 12px);

    transform: translateX(-50%);

    &::before {
      content: '';
      border-width: 6px 6px 0 6px;

      border-style: solid;
      border-color: #ff9000 transparent;

      position: absolute;
      top: 100%;
      left: 50%;

      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
