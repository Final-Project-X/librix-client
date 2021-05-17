import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
      <LinearGradient
        colors={['rgba(255,255,255,0.1)', 'rgba(247,148,9,0.9)']}
        style={styles.background}
      >
        <Text style={styles.text}>
          Please enter an ISBN number, and we'll pre-fill the info for you.
        </Text>
        <Text style={styles.label}>ISNB</Text>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            value={isbn}
            autoFocus={true}
            onChangeText={(val) => handleIsbn(val)}
          />
          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => navigation.navigate('AddBook2')}
          >
            <FontAwesome name="arrow-right" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.or}>OR</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddBook2')}
        >
          <Text style={styles.buttonText}>Continue manually</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default AddBook1;
