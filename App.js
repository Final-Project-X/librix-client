import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
// import MainNavigation from './navigation/BottomTabNavigator';
import DrawerNavigator from './navigation/BottomTabNavigator';

export default function App() {
  return (
    // <BottomTabNavigator />
    <DrawerNavigator />
    // <MainNavigation />
    // <View style={styles.container}>
    //   <Text>📖 librix</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
