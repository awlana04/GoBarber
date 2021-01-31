import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  padding: 0 30px ${Platform.OS === 'android' ? 75 : 40}px;

  flex: 1;
  position: relative;

  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const Title = styled.Text`
  margin: 24px 0;

  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;

  border-radius: 98px;

  align-self: center;
`;
