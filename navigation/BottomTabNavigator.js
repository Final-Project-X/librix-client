import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LibrixTabBar from '../components/LibrixTabBar/LibrixTabBar';
import AddBookStack from './AddBookStack';
import { HeaderIconButton } from '../components/Buttons/IconButtons';
import ScreenGradient from '../components/Gradients/ScreenGradient';
import { colors } from '../global/styles';

const GradientMainScreen = ({
  screenText,
  children,
  toggleDrawer,
  handlePress,
}) => {
  return (
    <ScreenGradient>
      <SafeAreaView>
        <View>
          <HeaderIconButton
            iconName="user"
            iconColor={colors.white}
            buttonColor={colors.primary.dark}
            handlePress={toggleDrawer}
          />

          <Text>{screenText}</Text>

          {children}
        </View>
      </SafeAreaView>
    </ScreenGradient>
  );
};

const Saved = ({ navigation }) => (
  <GradientMainScreen
    screenText="Saved Books"
    toggleDrawer={() => navigation.toggleDrawer()}
  />
);
const Books = ({ navigation }) => (
  <GradientMainScreen
    screenText="Pool of Books"
    toggleDrawer={() => navigation.toggleDrawer()}
  />
);

const Matches = ({ navigation }) => (
  <GradientMainScreen
    screenText="Matches"
    toggleDrawer={() => navigation.toggleDrawer()}
  />
);
const Messages = ({ navigation }) => (
  <GradientMainScreen
    screenText="Messages"
    toggleDrawer={() => navigation.toggleDrawer()}
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
