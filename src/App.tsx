/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-gesture-handler';
import {
  LogBox,
  SafeAreaView,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
// import HomeScreen from './screens/home/homeScreen';
// import ProfileScreen from './screens/profile/profileScreen';
import BottomTabNavigator from './navigations/bottomTabNavigator';
import DrawerNavigator from './navigations/drawerNavigator';

const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={DrawerNavigator} />
        </Stack.Navigator>
        {/* <DrawerNavigator /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
