// navigation/Home.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';

const Home = () => {
  return (
    <NavigationContainer independent={true}>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default Home;
