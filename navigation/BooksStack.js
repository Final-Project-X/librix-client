import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Books from '../screens/BooksScreen/Books';
import SingleBook from '../screens/SingleBookScreen/SingleBook';
import AddBook1 from '../screens/AddBookScreens/AddBook1';
import AddBook2 from '../screens/AddBookScreens/AddBook2';
import AddBook3 from '../screens/AddBookScreens/AddBook3';

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
      <Stack.Screen
        name="AddBook1"
        component={AddBook1}
        options={{ title: null }}
      />
      <Stack.Screen
        name="AddBook2"
        component={AddBook2}
        options={{ title: null }}
      />
      <Stack.Screen
        name="AddBook3"
        component={AddBook3}
        options={{ title: null }}
      />
    </Stack.Navigator>
  );
};

export default BooksStack;
