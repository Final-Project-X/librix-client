import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

export default function AddBook1({ navigation }) {
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
        <Text style={styles.label}>ISBN</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  input: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    margin: 30,
    fontSize: 20,
  },
  label: {
    marginLeft: 40,
    marginBottom: 5,
    marginTop: 20,
  },
  inputText: {
    width: '80%',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 40,
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 7 },
  },
  or: {
    marginTop: 60,
    marginBottom: 20,
    fontSize: 20,
    alignSelf: 'center',
  },
  smallButton: {
    backgroundColor: '#2a2a81',
    borderRadius: 15,
    padding: 10,
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#2a2a81',
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 60,
    marginTop: 40,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
