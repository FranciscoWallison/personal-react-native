// navigation/Home.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';

console.log("TELA - Home")
const Home = () => {
  return (
    <>
      <BottomTabNavigator />
    </>
  );
};

export default Home;
