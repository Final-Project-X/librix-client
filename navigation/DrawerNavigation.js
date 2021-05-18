import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import Filter from '../screens/FilterScreen/Filter';

const LogOut = () => (
  <SafeAreaView>
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Logged out!')}
      >
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const Profile = ({ navigation }) => (
  <SafeAreaView>
    <View>
      <Text style={styles.centerAlign}>Profile</Text>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={24} color="black" />
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={BottomTabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Preferences" component={Filter} />
      <Drawer.Screen name="Log out" component={LogOut} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  centerAlign: {
    alignSelf: 'center',
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#5F41EE',
    alignSelf: 'center',
    color: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
});

export default DrawerNavigator;
