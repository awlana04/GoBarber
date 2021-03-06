import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  padding: 0 30px ${Platform.OS === 'android' ? 75 : 40}px;

  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  margin: 34px 0 20px;

  color: #f4ede8;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
`;

export const BackToSignIn = styled.TouchableOpacity`
  padding: 16px 0 ${16 + getBottomSpace()}px;

  background: #312e38;

  border-top-width: 1px;
  border-color: #232129;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackToSignInText = styled.Text`
  margin-left: 16px;

  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;
