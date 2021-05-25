import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  PlatformColor,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const BackButton = ({ handlePress }) => {
  if (Platform.OS === 'ios') {
    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.wrapper}>
          <Feather
            name="chevron-left"
            size={36}
            color={PlatformColor('systemBlue')}
            style={styles.icon}
          />
          <Text style={styles.text}>Back</Text>
        </View>
      </TouchableOpacity>
    );
  }
  if (Platform.OS === 'android') {
    return (
      <TouchableOpacity style={styles.icon} onPress={handlePress}>
        <Feather name="arrow-left" size={30} color="black" />
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    ...Platform.select({
      ios: {
        width: 31,
      },
      android: {
        marginLeft: 10,
      },
    }),
  },
  text: {
    color: PlatformColor('systemBlue'),
    fontSize: 18,
  },
});

export default BackButton;
