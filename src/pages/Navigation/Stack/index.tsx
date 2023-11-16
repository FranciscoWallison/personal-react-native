// navigation/StackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../Navigation/Menu';
import Login from '../../Login';
import Signup from '../../Signup';
import Splash from '../../Splash';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      {/* Adicione mais telas conforme necessário */}
    </Stack.Navigator>
  );
};

export default StackNavigator;