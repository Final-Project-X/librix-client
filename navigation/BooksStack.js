import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Books from '../screens/BooksScreen/Books';
import SingleBook from '../screens/SingleBookScreen/SingleBook';

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
      <Stack.Screen
        name="SingleBook"
        component={SingleBook}
        options={{ title: null }}
      />
    </Stack.Navigator>
  );
};

export default BooksStack;
