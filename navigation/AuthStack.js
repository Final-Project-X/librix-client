import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/AuthScreens/HomeScreen';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import LogInScreen from '../screens/AuthScreens/LoginScreen';
import AuthHeader from '../components/Headers/AuthHeader';

const AuthStack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ header: () => <AuthHeader /> }}
        />
        <AuthStack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{ header: () => <AuthHeader /> }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};
