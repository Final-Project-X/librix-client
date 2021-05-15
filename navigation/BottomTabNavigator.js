import React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { createDrawerNavigator } from '@react-navigation/drawer';

const GradientMainScreen = ({ screenText, children, handlePress }) => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
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
const AddBook = ({ navigation }) => (
  <GradientMainScreen
    screenText="Add a Book"
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

const LibrixTabBar = ({ state, descriptors, navigation }) => {
  // console.log('state:', state);
  // console.log('descriptors:', descriptors);
  // console.log('navigation:', navigation);
  return (
    <LinearGradient
      colors={['#5F41EE', '#DBD3FF']}
      start={[0, 0]}
      end={[0.5, 1]}
      style={styles.navBackgroundGradient}
    >
      <View style={styles.navContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          // const label =
          //   options.tabBarLabel !== undefined
          //     ? options.tabBarLabel
          //     : options.title !== undefined
          //     ? options.title
          //     : route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const routesIcons = {
            Saved: 'bookmark',
            Books: 'book-open',
            'Add book': 'plus-circle',
            Matches: 'check-circle',
            Messages: 'message-circle',
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                styles.tab,
                isFocused ? styles.focusedTab : styles.unfocusedTab,
              ]}
            >
              <Feather
                name={routesIcons[route.name]}
                size={24}
                color={isFocused ? 'white' : '#111111'}
              />
              {/* <Text
                style={
                  isFocused ? styles.focusedTabLabel : styles.unfocusedTabLabel
                }
              >
                {label}
              </Text> */}
            </TouchableOpacity>
          );
        })}
      </View>
    </LinearGradient>
  );
};

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

const Filter = ({ navigation }) => (
  <SafeAreaView>
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Filter preferences')}
      >
        <Text>Set preferences</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Main')}
      >
        <Text>Apply</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const Profile = ({ navigation }) => (
  <SafeAreaView>
    <View>
      <Text style={{ alignSelf: 'center' }}>Profile</Text>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={24} color="black" />
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const Drawer = createDrawerNavigator();

const BottomTabNavigator = () => {
  return (
    // <NavigationContainer>

    <Tab.Navigator tabBar={(props) => <LibrixTabBar {...props} />}>
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Books" component={Books} />
      <Tab.Screen name="Add book" component={AddBook} />
      <Tab.Screen name="Matches" component={Matches} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={BottomTabNavigator} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Preferences" component={Filter} />
        <Drawer.Screen name="Log out" component={LogOut} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// const MainNavigation = () => {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator />
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
// };

const styles = StyleSheet.create({
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
  profileIcon: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#5F41EE',
    borderRadius: 50,
    // justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  navBackgroundGradient: {
    height: 66,
    marginBottom: 5,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: '1%',
    // is there a way to calculate width depending on the screen width?
    width: '98%',
  },
  navContainer: {
    // flex: 1,
    height: 60,
    backgroundColor: '#ffffff',
    width: '99%',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tab: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'relative',
    zIndex: 100,
  },
  focusedTab: {
    backgroundColor: '#5F41EE',
    zIndex: 200,
    height: 66,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 13,
    elevation: 5,
  },
  focusedTabLabel: {
    color: '#ffffff',
  },
  unfocusedTab: {
    backgroundColor: 'white',
  },
  unfocusedTabLabel: {
    color: '#111111',
  },
});

// export default BottomTabNavigator;
export default DrawerNavigator;
// export default MainNavigation;
