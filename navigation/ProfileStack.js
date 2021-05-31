import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import SingleBook from '../screens/SingleBookScreen/SingleBook';
import AddBookStack from '../navigation/AddBookStack';
import BackButton from '../components/Buttons/BackButton';
import EditProfile from '../screens/ProfileScreens/EditProfile';
import OthersProfile from '../screens/ProfileScreens/OthersProfile';

const ProfileStack = createStackNavigator();

export default ({ navigation }) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="OthersProfile" component={OthersProfile} />
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerLeft: () => (
            <BackButton handlePress={() => navigation.goBack()} />
          ),
          title: 'Your Profile',
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: 'Edit your profile' }}
      />
      <ProfileStack.Screen
        name="SingleBook"
        component={SingleBook}
        options={{ title: null }}
      />
      <ProfileStack.Screen
        name="AddBookStack"
        component={AddBookStack}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};
