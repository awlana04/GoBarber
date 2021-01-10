import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    height: 124px;

    background: #28262e;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        width: 24px;
        height: 24px;

        color: #999591;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin: -140px auto 0;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  form {
    width: 340px;
    margin: 40px 0;

    text-align: center;

    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;

      font-size: 20px;

      text-align: left;
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

    input[name='old_password'] {
      margin-top: 24px;
    }
  }
`;

export const AvatarInput = styled.div`
  width: 186px;
  margin-bottom: 32px;

  align-self: center;

  position: relative;

  img {
    width: 186px;
    height: 186px;

    border-radius: 50%;
  }

  label {
    width: 48px;
    height: 48px;

    cursor: pointer;
    background: #ff9000;

    border: none;
    border-radius: 50%;

    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;

      color: #312e38;
    }
  }
`;
