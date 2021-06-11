import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Books from '../screens/BooksScreen/Books';
import SingleBook from '../screens/SingleBookScreen/SingleBook';
import AddBook1 from '../screens/AddBookScreens/AddBook1';
import AddBook2 from '../screens/AddBookScreens/AddBook2';
import AddBook3 from '../screens/AddBookScreens/AddBook3';
import Filter from '../screens/FilterScreen/Filter';
import MainStackHeader from '../components/Headers/MainStackHeader';
import StackHeader from '../components/Headers/StackHeader';
import { useSelector } from 'react-redux';
import { colors } from '../global/styles';

const Stack = createStackNavigator();

const BooksStack = ({ navigation }) => {
  const user = useSelector((state) => state.user.user);
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
        options={{
          headerTitle: (props) => (
            <MainStackHeader
              drawerToggler={() => navigation.toggleDrawer()}
              avatar={user?.avatar}
            />
          ),
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: colors.neutralBackground,
          },
        }}
      />
      <Stack.Screen
        name="SingleBook"
        component={SingleBook}
        options={{
          header: ({ navigation, scene }) => {
            const title = scene.route.params.item.title;

            return <StackHeader navigation={navigation} text={title} />;
          },
        }}
      />
      <Stack.Screen
        name="Filter"
        component={Filter}
        options={{
          headerShown: true,
          header: ({ navigation }) => (
            <StackHeader navigation={navigation} text="Your preferences" />
          ),
        }}
      />
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
};

export default BooksStack;
