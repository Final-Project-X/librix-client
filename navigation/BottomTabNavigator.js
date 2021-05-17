import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import LibrixTabBar from '../components/LibrixTabBar/LibrixTabBar';
import AddBookStack from './AddBookStack';

const GradientMainScreen = ({ screenText, children, handlePress }) => {
  return (
    <LinearGradient
      style={styles.fullHeight}
      colors={['white', '#FAA96C']}
      start={[0, 0]}
      end={[1, 1]}
    >
      <SafeAreaView>
        <View>
          <Text>{screenText}</Text>
          <TouchableOpacity style={styles.profileIcon} onPress={handlePress}>
            <Feather name="user" size={24} color="white" />
          </TouchableOpacity>
          {children}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const Saved = ({ navigation }) => (
  <GradientMainScreen
    screenText="Saved Books"
    handlePress={() => navigation.toggleDrawer()}
  />
);
const Books = ({ navigation }) => (
  <GradientMainScreen
    screenText="Pool of Books"
    handlePress={() => navigation.toggleDrawer()}
  />
);

const Matches = ({ navigation }) => (
  <GradientMainScreen
    screenText="Matches"
    handlePress={() => navigation.toggleDrawer()}
  />
);
const Messages = ({ navigation }) => (
  <GradientMainScreen
    screenText="Messages"
    handlePress={() => navigation.toggleDrawer()}
  />
);

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <LibrixTabBar {...props} />}>
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Books" component={Books} />
      <Tab.Screen name="Add book" component={AddBookStack} />
      <Tab.Screen name="Matches" component={Matches} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  fullHeight: {
    flex: 1,
  },
  profileIcon: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#5F41EE',
    borderRadius: 50,
    alignSelf: 'flex-start',
  },
});

export default BottomTabNavigator;
