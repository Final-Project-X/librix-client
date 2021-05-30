import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import ButtonGradient from '../../components/Gradients/ButtonGradient';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import PrimaryText from '../../components//Texts/PrimaryText';
import styles from './styles';
import { Feather } from '@expo/vector-icons';

const AddBook2 = ({ navigation, route }) => {
  const [error, setError] = useState(null);
  const [title, setTitle] = useState(null);
  const [authors, setAuthors] = useState(null);
  const [publishedDate, setPublishedDate] = useState(null);

  const { book } = route.params || {};

  const handleBookInfo = (val1, val2, val3) => {
    if (!val1 || !val2 || !val3) {
      return setError('All fields are require!');
    } else {
      navigation.navigate('AddBook3', {
        title: val1,
        authors: val2,
        publishedDate: val3,
        description: book?.description,
      });
      setTitle(null);
      setAuthors(null);
      setPublishedDate(null);
      setError(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenGradient>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.content}>
            <PrimaryText
              text="Please check if the information is correct."
              customStyles={styles.text}
            />

            <View style={styles.formContainer}>
              <TextInput
                style={styles.inputText}
                value={title}
                placeholder="Book title"
                placeholderTextColor="black"
                defaultValue={book?.title}
                onChangeText={(val) => setTitle(val)}
              />
              <TextInput
                style={styles.inputText}
                value={authors}
                placeholder="Author's name"
                placeholderTextColor="black"
                defaultValue={book?.authors?.join(', ')}
                onChangeText={(val) => setAuthors(val)}
              />
              <TextInput
                style={styles.inputText}
                value={publishedDate}
                placeholder="Year"
                placeholderTextColor="black"
                defaultValue={book?.publishedDate}
                onChangeText={(val) => setPublishedDate(val)}
                numeric={true}
              />
              {error && (
                <PrimaryText text={error} customStyles={styles.inputError} />
              )}
              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    handleBookInfo(
                      title || book?.title,
                      [authors] || book?.authors,
                      publishedDate || book?.publishedDate,
                    )
                  }
                >
                  <ButtonGradient>
                    <View style={styles.buttonMix}>
                      <PrimaryBold text="Next" customStyles={styles.btnText} />
                      <Feather name="arrow-right" size={16} color="white" />
                    </View>
                  </ButtonGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScreenGradient>
    </SafeAreaView>
  );
};

export default AddBook2;
