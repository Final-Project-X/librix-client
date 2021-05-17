import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import LogInScreen from '../screens/AuthScreens/LoginScreen';

const AuthStack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Home" component={HomeScreen} />
        <AuthStack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: 'Sign up' }}
        />
        <AuthStack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{ title: 'Log in' }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};
