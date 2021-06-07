import React from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import Filter from '../screens/FilterScreen/Filter';
import ProfileStack from '../navigation/ProfileStack';
import LogOut from '../screens/Logout/Logout';

// const LogOut = () => (
//   <SafeAreaView>
//     <View>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => dispatch(logOutUser())}
//       >
//         <Text>Log out</Text>
//       </TouchableOpacity>
//     </View>
//   </SafeAreaView>
// );

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

// const styles = StyleSheet.create({
//   centerAlign: {
//     alignSelf: 'center',
//   },
//   back: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#5F41EE',
//     alignSelf: 'center',
//     color: '#ffffff',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 20,
//   },
// });

export default DrawerNavigator;
