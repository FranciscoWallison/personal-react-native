// navigation/StackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../Login';
import Signup from '../../Signup';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Signup} />
      {/* Adicione mais telas conforme necessário */}
    </Stack.Navigator>
  );
};

export default StackNavigator;