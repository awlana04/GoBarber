import styled from 'styled-components';
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

  place-content: center;
  align-items: center;

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

    color: #f4ede8;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;
