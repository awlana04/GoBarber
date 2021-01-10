import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 22px 0;

  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;

    background: transparent;
    border: 0;

    svg {
      width: 20px;
      height: 20px;

      color: #999591;
    }
  }
`;

export const Profile = styled.div`
  margin-left: 80px;

  display: flex;
  align-items: center;

  img {
    width: 56px;
    height: 56px;

    border-radius: 50%;
  }

  div {
    margin-left: 16px;

    line-height: 24px;

    display: flex;
    flex-direction: column;

    span {
      color: #f4ede8;
    }

    strong {
      color: #ff9000;
    }
  }
`;

export const Content = styled.main`
  max-width: 1075px;
  margin: 54px auto;

  display: flex;
`;

export const Schedule = styled.div`
  margin-right: 120px;

  flex: 1;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 18px;

    color: #ff9000;
    font-weight: 500;

    display: flex;
    align-items: center;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';

      width: 1px;
      height: 12px;
      margin: 0 8px;

      background: #ff9000;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 54px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    margin-top: 14px;
    padding: 10px 22px;

    background: #3e3b47;
    border-radius: 10px;

    position: relative;

    display: flex;
    align-items: center;

    &::before {
      content: '';

      width: 1px;
      height: 80%;

      background: #ff9000;

      position: absolute;
      top: 10%;
      left: 0;
    }

    img {
      width: 80px;
      height: 80px;

      border-radius: 50%;
    }

    strong {
      margin-left: 14px;

      color: #fff;
      font-size: 20px;
    }

    span {
      margin-left: auto;

      color: #999591;

      display: flex;
      align-items: center;

      svg {
        margin-right: 8px;

        color: #ff9000;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    margin-bottom: 16px;
    padding-bottom: 16px;

    color: #999591;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;

    display: block;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: auto;

    color: #f4ede8;

    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;

      color: #ff9000;
    }
  }

  div {
    margin-left: 24px;
    padding: 16px 24px;

    background: #3e3b47;
    border-radius: 10px;

    display: flex;
    align-items: center;

    flex: 1;

    img {
      width: 56px;
      height: 56px;

      border-radius: 50%;
    }

    strong {
      margin-left: 24px;

      color: #fff;
      font-size: 20px;
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    background: #28262e;
    border-radius: 10px;
  }
  .DayPicker-wrapper {
    padding-bottom: 0;
  }
  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }
  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }
  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }
  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }
  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }
  .DayPicker-Day--today {
    font-weight: normal;
  }
  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }
  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;
