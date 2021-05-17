import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Books from '../screens/BooksScreens/Books';

const Stack = createStackNavigator();

const BooksStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
        },
      }}
    >
      <Stack.Screen
        name="Books"
        component={Books}
        options={{ title: 'Find Your Match' }}
      />
    </Stack.Navigator>
  );
};

export default BooksStack;
