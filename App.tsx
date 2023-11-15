// // App.tsx
// import React from 'react';
// import AppNavigator from './src/pages/Navigation';

// const App = () => {
//   return <AppNavigator />;
// };

// export default App;
// navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/pages/Navigation/Stack';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
