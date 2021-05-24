import React, { useState } from 'react';
import { View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import ButtonGradient from '../../components/Gradients/ButtonGradient';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import PrimaryText from '../../components/Texts/PrimaryText';

import { Feather } from '@expo/vector-icons';
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
        <View style={styles.content}>
          <PrimaryText
            text="Enter ISBN number, and we'll pre-fill the rest."
            customStyles={styles.text}
          />
          <View style={styles.input}>
            <TextInput
              style={styles.isbnInput}
              value={isbn}
              autoFocus={true}
              placeholder="ISBN"
              placeholderTextColor="black"
              onChangeText={(val) => handleIsbn(val)}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.smallButton}
              onPress={() => navigation.navigate('AddBook2')}
            >
              <Feather name="arrow-right" size={14} color="white" />
            </TouchableOpacity>
          </View>
          <PrimaryText text="or" customStyles={styles.or} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AddBook2')}
          >
            <ButtonGradient>
              <PrimaryBold
                text="Fill in manually"
                customStyles={styles.buttonText}
              />
            </ButtonGradient>
          </TouchableOpacity>
        </View>
      </ScreenGradient>
    </SafeAreaView>
  );
};

export default AddBook1;
