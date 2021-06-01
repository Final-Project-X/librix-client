import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import ButtonGradient from '../../components/Gradients/ButtonGradient';
import PrimaryBold from '../../components/Texts/PrimaryBold';

const NoBookCard = ({ navigation }) => (
  <SafeAreaView style={[styles.container, styles.card]}>
    <PrimaryBold
      text="There are no books for you to swipe now!"
      customStyles={styles.noBooks}
    />
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Filter')}
    >
      <ButtonGradient>
        <PrimaryBold text="Reset Filter" customStyles={styles.buttonText} />
      </ButtonGradient>
    </TouchableOpacity>
    <PrimaryBold text="Or" />
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('AddBook1')}
    >
      <ButtonGradient>
        <PrimaryBold text="Add a book" customStyles={styles.buttonText} />
      </ButtonGradient>
    </TouchableOpacity>
  </SafeAreaView>
);

export default NoBookCard;
