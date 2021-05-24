import React, { useState } from 'react';
import { View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import ButtonGradient from '../../components/Gradients/ButtonGradient';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import PrimaryText from '../../components/Texts/PrimaryText';
import { getBookInfo } from '../../utils/apiCalls';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

const AddBook1 = ({ navigation }) => {
  const [isbn, setIsbn] = useState(null);

  const handlePress = async () => {
    if (isbn) {
      const book = await getBookInfo(isbn);
      return navigation.navigate('AddBook2', { book });
    } else {
      return navigation.navigate('AddBook2');
    }
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
              onChangeText={(val) => setIsbn(val)}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.smallButton} onPress={handlePress}>
              <Feather name="arrow-right" size={16} color="white" />
            </TouchableOpacity>
          </View>
          <PrimaryText text="or" customStyles={styles.or} />
          <TouchableOpacity style={styles.button} onPress={handlePress}>
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
