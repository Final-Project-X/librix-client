import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import SingleBook from '../screens/SingleBookScreen/SingleBook';
import AddBookStack from '../navigation/AddBookStack';
import EditProfile from '../screens/ProfileScreens/EditProfile';
import StackHeader from '../components/Headers/StackHeader';

const ProfileStack = createStackNavigator();

export default () => {
  return (
    <ProfileStack.Navigator headerMode="screen">
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          header: ({ navigation }) => (
            <StackHeader navigation={navigation} text="Your profile" />
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          header: ({ navigation }) => (
            <StackHeader navigation={navigation} text="Edit your profile" />
          ),
        }}
      />
      <ProfileStack.Screen
        name="SingleBook"
        component={SingleBook}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name="AddBookStack"
        component={AddBookStack}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};
