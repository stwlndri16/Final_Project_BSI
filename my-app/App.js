// import React from 'react'
// import { Provider } from 'react-native-paper'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// // import { theme } from './src/core/theme'

// import {StartPage} from './src/screens/StartPage'
// import {LoginPage} from './src/screens/LoginPage'
// import {RegisterPage} from './src/screens/RegisterPage'
// import {MainPage} from './src/screens/MainPage'


// const Stack = createStackNavigator()

// export default function App() {
//   return (
//     <Provider theme={theme}>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="StartScreen"
//           screenOptions={{
//             headerShown: false,
//           }}
//         >
//           <Stack.Screen name="StartPage" component={StartPage} />
//           <Stack.Screen name="LoginPage" component={LoginPage} />
//           <Stack.Screen name="RegisterPage" component={RegisterPage} />
//           <Stack.Screen name="MainPage" component={MainPage} />
//           {/* <Stack.Screen
//             name="ResetPasswordScreen"
//             component={ResetPasswordScreen}
//           /> */}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   )
// }


// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import HomePage from './src/screens/HomePage'; // Your initial screen
import LoginPage from './src/screens/LoginPage';
import RegisterPage from './src/screens/RegisterPage';


const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="RegisterPage" component={RegisterPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
};

export default App;
