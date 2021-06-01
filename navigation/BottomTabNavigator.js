import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LibrixTabBar from '../components/LibrixTabBar/LibrixTabBar';
import AddBookStack from './AddBookStack';
import { HeaderIconButton } from '../components/Buttons/IconButtons/HeaderIconButton';
import ScreenGradient from '../components/Gradients/ScreenGradient';
import { colors } from '../global/styles';
import BooksStack from './BooksStack';
import SavedBooksStack from './SavedBooksStack';
import { MatchesIconButton } from '../components/Buttons/IconButtons/MatchesIconButton';
import MatchesStack from './MatchesStack';

export const GradientMainScreen = ({
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

const One = ({ navigation }) => (
  <GradientMainScreen
    screenText="One"
    toggleDrawer={() => navigation.toggleDrawer()}
  />
);
const Two = ({ navigation }) => (
  <GradientMainScreen
    screenText="Two"
    toggleDrawer={() => navigation.toggleDrawer()}
  />
);
const Three = ({ navigation }) => (
  <GradientMainScreen
    screenText="Three"
    toggleDrawer={() => navigation.toggleDrawer()}
  />
);
const Four = ({ navigation }) => (
  <GradientMainScreen
    screenText="Four"
    toggleDrawer={() => navigation.toggleDrawer()}
  />
);
const Messages = ({ navigation }) => (
  <GradientMainScreen
    screenText="Messages"
    toggleDrawer={() => navigation.toggleDrawer()}
  >
    <MatchesIconButton iconName="message-circle" handlePress={() => {}} />
  </GradientMainScreen>
);

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <LibrixTabBar {...props} />}
      initialRouteName="Books"
    >
      {/* <Tab.Screen name="Saved" component={SavedBooksStack} /> */}
      <Tab.Screen name="One" component={One} />
      {/* <Tab.Screen name="Books" component={BooksStack} /> */}
      <Tab.Screen name="Two" component={Two} />
      <Tab.Screen name="Add book" component={AddBookStack} />
      <Tab.Screen name="Matches" component={MatchesStack} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
