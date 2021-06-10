import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import Filter from '../screens/FilterScreen/Filter';
import ProfileStack from '../navigation/ProfileStack';
import LogOut from '../screens/Logout/Logout';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={BottomTabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Preferences" component={Filter} />
      <Drawer.Screen name="Log out" component={LogOut} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
