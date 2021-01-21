import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Provider } from '../Dashboard';

interface ProviderContainerProps {
  selected: boolean;
}

interface ProviderImageProps {
  selected: boolean;
}

interface ProviderInitialsProps {
  selected: boolean;
}

interface ProviderNameProps {
  selected: boolean;
}

interface HourProps {
  available: boolean;
  selected: boolean;
}

interface HourTextProps {
  selected: boolean;
}

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

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  margin-left: 16px;

  color: #f5ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
`;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  margin-left: auto;
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

  border: 1px #ff9000;
  border-radius: 28px;

  justify-content: center;
  align-items: center;
`;
export const UserInitials = styled.Text`
  color: #ff9000;
  font-size: 24px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 24 },
  showsVerticalScrollIndicator: false,
})``;

export const ProvidersListContainer = styled.View`
  height: 112px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px;
`;

export const ProviderContainer = styled(RectButton)<ProviderContainerProps>`
  padding: 8px 12px;
  margin-right: 16px;

  background: ${({ selected }) => (selected ? '#ff9000' : '#3e3b47')};
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
`;

export const ProviderAvatar = styled.Image<ProviderImageProps>`
  width: 32px;
  height: 32px;
  margin-left: auto;
  padding: 3px;

  border-width: 1px;
  border-color: ${({ selected }) => (selected ? '#312e38' : '#ff9000')};
  border-radius: 16px;
`;

export const ProviderInitialsContainer = styled.View<ProviderInitialsProps>`
  width: 32px;
  height: 32px;
  padding: 3px;

  background: #312e38;

  border-width: 1px;
  border-color: ${({ selected }) => (selected ? '#28262e' : '#ff9000')};
  border-radius: 16px;

  justify-content: center;
  align-items: center;
`;
export const ProviderInitials = styled.Text`
  color: #ff9000;
  font-size: 12px;
`;

export const ProviderName = styled.Text<ProviderNameProps>`
  margin-left: 8px;

  color: ${({ selected }) => (selected ? '#232129' : '#f4ede8')};
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
`;

export const Calendar = styled.View``;

export const Title = styled.Text`
  margin: 0 24px 24px;

  color: #f4ede8;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
`;

export const OpenDatePickerButton = styled(RectButton)`
  height: 46px;
  margin: 0 24px;

  background: #ff9000;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const OpenDatePickerButtonText = styled.Text`
  color: #232129;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
`;

export const Schedule = styled.View`
  padding: 24px 0 16px;
`;

export const Section = styled.View`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.Text`
  margin: 0 24px 12px;

  color: #999591;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;

export const SectionContent = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Hour = styled(RectButton)<HourProps>`
  margin-right: 8px;
  padding: 12px;

  background: ${(props) => (props.selected ? '#ff9000' : '#3e3b47')};
  border-radius: 10px;

  opacity: ${(props) => (props.available ? 1 : 0.3)};
`;

export const HourText = styled.Text<HourTextProps>`
  color: ${(props) => (props.selected ? '#232129' : '#f4ede8')};
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const CreateAppointmentButton = styled(RectButton)`
  height: 50px;
  margin: 0 24px;

  background: #ff9000;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const CreateAppointmentButtonText = styled.Text`
  color: #232129;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
`;
