import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';
import { ContextProvider } from "./src/context/Context";

const App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Router />
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App