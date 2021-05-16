import React from 'react';
import { View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from '@expo/vector-icons/Feather';
import styles from './style';

const LibrixTabBar = ({ state, descriptors, navigation }) => {
  const windowWidth = useWindowDimensions().width;

  return (
    <LinearGradient
      colors={['#5F41EE', '#DBD3FF']}
      start={[0, 0]}
      end={[0.5, 1]}
      style={styles(windowWidth).navBackgroundGradient}
    >
      <View style={styles(windowWidth).navContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          options.tabBarAccessibilityLabel = route.name;
          options.tabBarTestID = route.key;

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
              style={[
                styles(windowWidth).tab,
                isFocused
                  ? styles(windowWidth).focusedTab
                  : styles(windowWidth).unfocusedTab,
              ]}
            >
              <Feather
                name={routesIcons[route.name]}
                size={24}
                color={isFocused ? 'white' : '#111111'}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </LinearGradient>
  );
};

export default LibrixTabBar;
