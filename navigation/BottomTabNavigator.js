import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LibrixTabBar from '../components/LibrixTabBar/LibrixTabBar';
import AddBookStack from './AddBookStack';
import IconButton from '../components/Buttons/IconButton';
import ScreenGradient from '../components/Gradients/ScreenGradient';
import { colors } from '../global/styles';

const GradientMainScreen = ({ screenText, children, handlePress }) => {
  return (
    <ScreenGradient>
      <SafeAreaView>
        <View>
          <Text>{screenText}</Text>

          <IconButton
            iconSize="24"
            iconName="user"
            iconColor={colors.white}
            buttonColor={colors.primary.dark}
            handlePress={handlePress}
          />

          {children}
        </View>
      </SafeAreaView>
    </ScreenGradient>
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

export default BottomTabNavigator;
