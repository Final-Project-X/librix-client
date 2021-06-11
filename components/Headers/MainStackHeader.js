import React from 'react';
import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Avatar from '../../assets/librix-book-round-logo.png';

const MainStackHeader = ({ drawerToggler, avatar }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={drawerToggler}>
        <Image source={Avatar} style={styles.image} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
});

export default MainStackHeader;
