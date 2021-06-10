import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddBook1 from '../screens/AddBookScreens/AddBook1';
import AddBook2 from '../screens/AddBookScreens/AddBook2';
import AddBook3 from '../screens/AddBookScreens/AddBook3';
import StackHeader from '../components/Headers/StackHeader';

const Stack = createStackNavigator();

export default function AddBookStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddBook1"
        component={AddBook1}
        options={{
          header: ({ navigation }) => (
            <StackHeader
              navigation={navigation}
              text="Add your book: step 1 of 3"
            />
          ),
        }}
      />
      <Stack.Screen
        name="AddBook2"
        component={AddBook2}
        options={{
          header: ({ navigation }) => (
            <StackHeader
              navigation={navigation}
              text="Add your book: step 2 of 3"
            />
          ),
        }}
      />
      <Stack.Screen
        name="AddBook3"
        component={AddBook3}
        options={{
          header: ({ navigation }) => (
            <StackHeader
              navigation={navigation}
              text="Add your book: step 3 of 3"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
