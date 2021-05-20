import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import PrimaryText from '../../components/Texts/PrimaryText';
import PrimaryLight from '../../components/Texts/PrimaryLight';
import Icon from '../../assets/favicon.png';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../global/styles';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenGradient>
        <View>
          <View style={styles.userDataContainer}>
            <View>
              <Image source={Icon} />
              <PrimaryLight text="10 points" />
            </View>
            <View>
              <PrimaryText text="Username" />
              <PrimaryText text="user@email.com" />
              <PrimaryText text="City" />
            </View>
          </View>
          <View>
            <PrimaryText text="I order total directed against this conspiracy to pay off - Stay out of the Garden Of Delights - The Kid at the wheel and his foot on the floor - Already set off the charge - Postulate a biologic film running from the beginning to the end " />
            <TouchableOpacity style={styles.button}>
              <Feather name="edit-3" size={24} color={colors.textFaded} />
              <PrimaryLight
                text="Edit profile"
                customStyles={styles.buttonText}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScreenGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userDataContainer: {
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
  },
  buttonText: {
    color: colors.textFaded,
  },
});

export default ProfileScreen;
