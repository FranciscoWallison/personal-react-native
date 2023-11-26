// navigation/StackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../Navigation/Menu';
import Login from '../../Login';
import Signup from '../../Signup';
import Splash from '../../Splash';
import Success from '../../Success';

const Stack = createNativeStackNavigator();

console.log("TELA - StackNavigator")
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={Signup} />
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Success" component={Success} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;