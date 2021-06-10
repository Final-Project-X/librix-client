import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import PrimaryText from '../../components/Texts/PrimaryText';
import PrimaryMedium from '../../components/Texts/PrimaryMedium';
import { Feather } from '@expo/vector-icons';
import { colors, shadow } from '../../global/styles';
import logo from '../../assets/logo.png';
import ButtonGradient from '../../components/Gradients/ButtonGradient';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoSection}>
        <Image source={logo} style={styles.image} />
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
          <ButtonGradient customStyles={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
              <PrimaryMedium text="Log in" customStyles={styles.buttonLabel} />
            </TouchableOpacity>
          </ButtonGradient>
          <PrimaryText text="or" customStyles={styles.or} />
          <ButtonGradient customStyles={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <PrimaryMedium text="Sign up" customStyles={styles.buttonLabel} />
            </TouchableOpacity>
          </ButtonGradient>
        </View>
        <View style={[styles.rules, styles.rulesShadow]}>
          <View style={[styles.useTip, styles.flexRow]}>
            <Feather
              name="chevrons-right"
              size={24}
              color={colors.secondary.dark}
            />
            <PrimaryText
              text="Want the book? Swipe right!"
              customStyles={styles.useTipText}
            />
          </View>
          <View style={[styles.useTip, styles.flexRow]}>
            <Feather
              name="chevrons-left"
              size={24}
              color={colors.secondary.dark}
            />
            <PrimaryText
              text="Don't want the book? Swipe left!"
              customStyles={styles.useTipText}
            />
          </View>
          <View style={[styles.useTip, styles.flexRow]}>
            <Feather
              name="chevrons-down"
              size={24}
              color={colors.secondary.dark}
            />
            <PrimaryText
              text="Aren't sure? Bookmark for later!"
              customStyles={styles.useTipText}
            />
          </View>
          <View style={[styles.useTip, styles.flexRow]}>
            <Feather
              name="check-circle"
              size={24}
              color={colors.secondary.dark}
            />
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
    backgroundColor: colors.neutralBackground,
  },
  logoSection: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: '#dddddd',
  },
  image: {
    height: 220,
    width: '100%',
    resizeMode: 'cover',
  },
  logoText: {
    fontSize: 22,
    marginLeft: 10,
  },
  slogan: {
    marginTop: 10,
  },
  lowerSection: {
    paddingHorizontal: '7%',
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
    width: 110,
    alignItems: 'center',
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
    marginLeft: 10,
  },
  rules: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: '5%',
    borderRadius: 20,
  },
  rulesShadow: shadow.card,
});

export default HomeScreen;
