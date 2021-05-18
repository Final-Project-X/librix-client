import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import ButtonGradient from '../../components/Gradients/ButtonGradient';

import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const AddBook1 = ({ navigation }) => {
  const [isbn, setIsbn] = useState('');

  // send ISBN to backend
  const handleIsbn = (val) => {
    setIsbn(val);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenGradient>
        <Text style={styles.text}>
          Please enter an ISBN number, and we'll pre-fill the info for you.
        </Text>
        <Text style={styles.label}>ISBN</Text>
        <View style={styles.input}>
          <TextInput
            style={[styles.isbnInput, styles.inputText]}
            value={isbn}
            autoFocus={true}
            onChangeText={(val) => handleIsbn(val)}
          />
          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => navigation.navigate('AddBook2')}
          >
            <FontAwesome name="arrow-right" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.or}>OR</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddBook2')}
        >
          <ButtonGradient>
            <Text style={styles.buttonText}>Continue manually</Text>
          </ButtonGradient>
        </TouchableOpacity>
      </ScreenGradient>
    </SafeAreaView>
  );
};

export default AddBook1;
