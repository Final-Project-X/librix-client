import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import Filter from '../screens/FilterScreen/Filter';
import ProfileStack from '../navigation/ProfileStack';
import LogOut from '../screens/Logout/Logout';
import StackHeader from '../components/Headers/StackHeader';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={BottomTabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen
        name="Preferences"
        component={Filter}
        options={{
          headerShown: true,
          header: ({ scene }) => {
            const { navigation } = scene.descriptor;
            return (
              <StackHeader navigation={navigation} text="Your preferences" />
            );
          },
        }}
      />
      <Drawer.Screen name="Log out" component={LogOut} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
