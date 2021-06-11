import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SavedBooks from '../screens/SavedBooksScreen/SavedBooks';
import SingleBook from '../screens/SingleBookScreen/SingleBook';
import MainStackHeader from '../components/Headers/MainStackHeader';
import AddBookStack from '../navigation/AddBookStack/';
import StackHeader from '../components/Headers/StackHeader';
import { useSelector } from 'react-redux';
import { colors } from '../global/styles';

const Stack = createStackNavigator();

const SavedBooksStack = ({ navigation }) => {
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
        name="SavedBooks"
        component={SavedBooks}
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
        name="Add a Book"
        component={AddBookStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SavedBooksStack;
