import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LibrixTabBar from '../components/LibrixTabBar/LibrixTabBar';
import AddBookStack from './AddBookStack';
import BooksStack from './BooksStack';
import SavedBooksStack from './SavedBooksStack';
import MatchesStack from './MatchesStack';
import MassagesStack from './MessagesStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <LibrixTabBar {...props} />}
      initialRouteName="Books"
    >
      <Tab.Screen name="Saved" component={SavedBooksStack} />
      <Tab.Screen name="Books" component={BooksStack} />
      <Tab.Screen name="Add book" component={AddBookStack} />
      <Tab.Screen name="Matches" component={MatchesStack} />
      <Tab.Screen name="Messages" component={MassagesStack} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
