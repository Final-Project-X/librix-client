import React from 'react';
import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Avatar from '../../assets/icon.png';

const MainStackHeader = ({ drawerToggler, avatar }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={drawerToggler}>
        <Image
          source={avatar ? { uri: avatar } : Avatar}
          style={styles.image}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35,
    borderRadius: 25,
  },
});

export default MainStackHeader;
