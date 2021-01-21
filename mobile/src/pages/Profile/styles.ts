import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  padding: 0 30px 40px;

  flex: 1;

  justify-content: center;
`;

export const Title = styled.Text`
  margin: 16px 0;

  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: ${Platform.OS === 'ios' ? 40 : 40}px;
`;

export const SignOutButton = styled.TouchableOpacity`
  margin-top: ${Platform.OS === 'ios' ? 40 : 40}px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  width: 186px;
  height: 186px;
  margin-top: ${Platform.OS === 'ios' ? 32 : 8}px;
  padding: 3px;

  background: #28262e;

  border: 3px #ff9000;
  border-radius: 98px;

  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  padding: 3px;

  border-width: 3px;
  border-color: #ff9000;
  border-radius: 98px;

  align-self: center;
`;

export const UserInitialsContainer = styled.View``;

export const UserInitials = styled.Text`
  color: #ff9000;
  font-size: 56px;
  font-family: 'RobotoSlab-Medium';
`;
