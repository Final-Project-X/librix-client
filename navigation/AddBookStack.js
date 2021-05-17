import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddBook1 from '../screens/AddBookStack/AddBook1';
import AddBook2 from '../screens/AddBookScreens/AddBook2';
import AddBook3 from '../screens/AddBookStack/AddBook3';

const Stack = createStackNavigator();

export default function AddBookStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
        },
      }}
    >
      <Stack.Screen
        name="AddBook1"
        component={AddBook1}
        options={{
          title: 'Add your book: step 1 of 3',
        }}
      />
      <Stack.Screen
        name="AddBook2"
        component={AddBook2}
        options={{
          title: 'Add your book: step 2 of 3',
        }}
      />
      <Stack.Screen
        name="AddBook3"
        component={AddBook3}
        options={{
          title: 'Add your book: step 3 of 3',
        }}
      />
    </Stack.Navigator>
  );
}
