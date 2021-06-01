import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native';
import PrimaryText from '../../components/Texts/PrimaryText';
import PrimaryMedium from '../../components/Texts/PrimaryMedium';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../global/styles';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoSection}>
        <View style={styles.flexRow}>
          <Feather name="book-open" size={30} color="black" />
          <PrimaryText text="librix" customStyles={styles.logoText} />
        </View>
        <PrimaryText
          text="like Tinder. for books."
          customStyles={styles.slogan}
        />
      </View>
      <View style={styles.lowerSection}>
        <PrimaryText
          text="Get rid of books you don't need anymore."
          customStyles={styles.productDescription}
        />
        <PrimaryText
          text="Exchange them for the ones you would love to read."
          customStyles={styles.productDescription}
        />
        <View style={[styles.buttonGroup, styles.flexRow]}>
          <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
            <View style={styles.button}>
              <PrimaryMedium text="Log in" customStyles={styles.buttonLabel} />
            </View>
          </TouchableOpacity>
          <PrimaryText text="or" customStyles={styles.or} />
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <View style={styles.button}>
              <PrimaryMedium text="Sign up" customStyles={styles.buttonLabel} />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View style={[styles.useTip, styles.flexRow]}>
            <Feather name="chevrons-right" size={24} color="black" />
            <PrimaryText
              text="Want the book? Swipe right!"
              customStyles={styles.useTipText}
            />
          </View>
          <View style={[styles.useTip, styles.flexRow]}>
            <Feather name="chevrons-left" size={24} color="black" />
            <PrimaryText
              text="Don't want the book? Swipe left!"
              customStyles={styles.useTipText}
            />
          </View>
          <View style={[styles.useTip, styles.flexRow]}>
            <Feather name="chevrons-down" size={24} color="black" />
            <PrimaryText
              text="Aren't sure? Bookmark for later!"
              customStyles={styles.useTipText}
            />
          </View>
          <View style={[styles.useTip, styles.flexRow]}>
            <Feather name="check-circle" size={24} color="black" />
            <PrimaryText
              text="Have match? Swap the books!"
              customStyles={styles.useTipText}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
  },
  logoSection: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: '#dddddd',
  },
  logoText: {
    fontSize: 22,
    marginLeft: 10,
  },
  slogan: {
    marginTop: 10,
  },
  lowerSection: {
    paddingHorizontal: 40,
    paddingTop: 30,
  },
  productDescription: {
    fontSize: 16,
    textAlign: 'center',
  },
  buttonGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 35,
  },
  button: {
    backgroundColor: colors.almostBlack,
    borderRadius: 5,
  },
  buttonLabel: {
    margin: 11,
    fontSize: 18,
    color: colors.white,
  },
  or: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  useTip: {
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 10,
  },
  useTipText: {
    marginLeft: 20,
  },
});

export default HomeScreen;
