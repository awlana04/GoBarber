import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { RobotoSlab_400Regular, RobotoSlab_500Medium } from '@expo-google-fonts/roboto-slab';

import AppProvider from './src/hooks';
import Routes from './src/routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />

      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
}

export default App;
