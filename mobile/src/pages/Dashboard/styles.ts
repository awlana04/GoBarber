import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Provider } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;

  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

Header.displayName = 'DashboardHeader';

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';

  line-height: 28px;
`;

export const UserName = styled.Text`
  color: #ff9000;
  font-family: 'RobotoSlab-Medium';
`;

export const ProfileButton = styled.TouchableOpacity``;

export const SignOutButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  padding: 3px;

  border-width: 1px;
  border-color: #ff9000;
  border-radius: 28px;
`;

export const UserInitialsContainer = styled.View`
  width: 56px;
  height: 56px;
  padding: 3px;

  background: #312e38;
  color: #ff9000;

  border: 1px #ff9000;
  border-radius: 28px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserInitials = styled.Text`
  color: #ff9000;
  font-size: 24px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px 16px;
`;

export const ProvidersListTitle = styled.Text`
  margin-bottom: 24px;

  color: #f4ede8;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
`;

export const ProviderContainer = styled(RectButton)`
  margin-bottom: 16px;
  padding: 20px;

  background: #3e3b47;
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
`;

export const ProviderAvatar = styled.Image`
  width: 72px;
  height: 72px;
  padding: 3px;

  border-width: 1px;
  border-color: #ff9000;
  border-radius: 36px;
`;

export const ProviderInitialsContainer = styled.View`
  width: 72px;
  height: 72px;
  padding: 3px;

  background: #312e38;

  border-radius: 36px;
  border: 1px #ff9000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProviderInitials = styled.Text`
  color: #ff9000;
  font-size: 24px;
`;

export const ProviderInfo = styled.View`
  margin-left: 20px;

  flex: 1;
`;

export const ProviderName = styled.Text`
  color: #f4ede8;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
`;

export const ProviderMeta = styled.View`
  margin-top: 8px;

  flex-direction: row;
  align-items: center;
`;

export const ProviderMetaText = styled.Text`
  color: #999591;
  margin-left: 8px;
  font-family: 'RobotoSlab-Regular';
`;
