import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import SignUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  };

  to {
    opacity: 1;
    transform: translateX(0);
  };
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    width: 340px;
    margin: 40px 0;

    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      margin-top: 24px;

      color: #f4ede8;
      text-decoration: none;

      display: block;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    margin-top: 24px;

    color: #ff9000;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;
