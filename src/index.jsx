// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import Home from './screens/Home';


const Stack = createStackNavigator();

const AppSrc = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="RegisterPage" component={RegisterPage} />
          <Stack.Screen name="GamePage" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
};

export default AppSrc;
