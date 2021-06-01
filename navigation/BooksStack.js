import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Books from '../screens/BooksScreen/Books';
import SingleBook from '../screens/SingleBookScreen/SingleBook';
import AddBook1 from '../screens/AddBookScreens/AddBook1';
import AddBook2 from '../screens/AddBookScreens/AddBook2';
import AddBook3 from '../screens/AddBookScreens/AddBook3';
import Filter from '../screens/FilterScreen/Filter';

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
        name="Filter"
        component={Filter}
        options={{ title: 'Your preferences' }}
      />
      <Stack.Screen
        name="AddBook1"
        component={AddBook1}
        options={{ title: 'Add your book: step 1 of 3' }}
      />
      <Stack.Screen
        name="AddBook2"
        component={AddBook2}
        options={{ title: 'Add your book: step 2 of 3' }}
      />
      <Stack.Screen
        name="AddBook3"
        component={AddBook3}
        options={{ title: 'Add your book: step 3 of 3' }}
      />
    </Stack.Navigator>
  );
};

export default BooksStack;
