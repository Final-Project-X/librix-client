import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SavedBooks from '../screens/SavedBooksScreen/SavedBooks';
import SingleBook from '../screens/SavedBooksScreen/SingleBook';

const Stack = createStackNavigator();

const SavedBooksStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
        },
      }}
    >
      <Stack.Screen
        name="SavedBooks"
        component={SavedBooks}
        options={{ title: null }}
      />
      <Stack.Screen
        name="SingleBook"
        component={SingleBook}
        options={{ title: null }}
      />
    </Stack.Navigator>
  );
};

export default SavedBooksStack;
