import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';

const Saved = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Saved Books</Text>
      </View>
    </SafeAreaView>
  );
};
const Books = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Pool of Books</Text>
      </View>
    </SafeAreaView>
  );
};
const AddBook = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Add a Book</Text>
      </View>
    </SafeAreaView>
  );
};
const Matches = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Matches</Text>
      </View>
    </SafeAreaView>
  );
};
const Messages = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Messages</Text>
      </View>
    </SafeAreaView>
  );
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer theme={{ colors: { primary: 'black' } }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const routesIcons = {
              Saved: 'bookmark',
              Books: 'book-open',
              'Add book': 'plus-circle',
              Matches: 'check-circle',
              Messages: 'message-circle',
            };

            return (
              <Feather
                name={routesIcons[route.name]}
                size={size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          activeBackgroundColor: '#5F41EE',
          inactiveTintColor: 'grey',
          style: {
            backgroundColor: 'black',
            borderRadius: 50,
            height: 75,
          },
          tabStyle: {
            paddingTop: 15,
            height: 75,
            paddingBottom: 20,
            borderRadius: 50,
          },
        }}
      >
        <Tab.Screen name="Saved" component={Saved} />
        <Tab.Screen name="Books" component={Books} />
        <Tab.Screen name="Add book" component={AddBook} />
        <Tab.Screen name="Matches" component={Matches} />
        <Tab.Screen name="Messages" component={Messages} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
