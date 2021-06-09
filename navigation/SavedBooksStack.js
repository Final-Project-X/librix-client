import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SavedBooks from '../screens/SavedBooksScreen/SavedBooks';
import SingleBook from '../screens/SingleBookScreen/SingleBook';
import MainStackHeader from '../components/Headers/MainStackHeader';
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
        options={{ title: null }}
      />
    </Stack.Navigator>
  );
};

export default SavedBooksStack;
