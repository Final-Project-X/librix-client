import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
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
  const [bookInfo, setBookInfo] = useState(book);

  const handleBookInfo = (val1, val2, val3) => {
    const authorsArr = (value) => {
      if (typeof value === 'string') {
        return value.split(',').map((item) => item.trim());
      } else {
        return value;
      }
    };

    if (!val1 || !val2 || !val3) {
      return setError('All fields are require!');
    } else {
      navigation.navigate('AddBook3', {
        title: val1,
        authors: authorsArr(val2),
        publishedDate: val3.slice(0, 4),
        description: bookInfo?.description,
      });
      setBookInfo(null);
      setError(null);
    }
  };

  return (
    <ScreenGradient>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          style={styles.content}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
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
              defaultValue={bookInfo?.title}
              onChangeText={(val) => setTitle(val)}
            />
            <TextInput
              style={styles.inputText}
              value={authors}
              placeholder="Author's name"
              placeholderTextColor="black"
              defaultValue={bookInfo?.authors.join(', ')}
              onChangeText={(val) => setAuthors(val)}
            />
            <TextInput
              style={styles.inputText}
              value={publishedDate}
              placeholder="Year"
              placeholderTextColor="black"
              defaultValue={bookInfo?.publishedDate.slice(0, 4)}
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
                    title || bookInfo?.title,
                    authors || bookInfo?.authors,
                    publishedDate || bookInfo?.publishedDate,
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
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScreenGradient>
  );
};

export default AddBook2;
