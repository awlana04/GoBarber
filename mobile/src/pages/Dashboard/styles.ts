import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;

  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  line-height: 28px;
  font-size: 20px;
  font-family: 'RobotoSlab_400Regular';
`;

export const UserName = styled.Text`
  color: #ff9000;
  font-family: 'RobotoSlab_500Medium';
`;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;

  border-radius: 28px;
`;

