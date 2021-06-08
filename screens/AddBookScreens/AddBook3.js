import React, { useState, useCallback, useRef } from 'react';
import {
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import ButtonGradient from '../../components/Gradients/ButtonGradient';
import UploadImageBtn from '../../components/Buttons/UploadImageBtn';
import PrimaryText from '../../components/Texts/PrimaryText';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import {
  addBookToOfferedBooks,
  getBooksToOffer,
} from '../../redux/actions/usersBooksActions';
import { useDispatch, useSelector } from 'react-redux';

const AddBook3 = ({ navigation, route }) => {
  const [error, setError] = useState(null);
  const [note, setNote] = useState(null);
  const [image, setImage] = useState(null);
  const [valueGenre, setValueGenre] = useState(null);
  const [genreOpen, setGenreOpen] = useState(false);
  const [genres, setGenres] = useState([
    { label: 'Fiction', value: 'Fiction' },
    { label: 'Action', value: 'Action' },
    { label: 'Children book', value: 'Children book' },
    { label: 'Classic', value: 'Classic' },
    { label: 'Comic book', value: 'Comic book' },
    { label: 'Crime', value: 'Crime' },
    { label: 'Drama', value: 'Drama' },
    { label: 'Fantasy', value: 'Fantasy' },
    { label: 'Romance', value: 'Romance' },
    { label: 'Non-fiction', value: 'Non-fiction' },
    { label: 'Biography', value: 'Biography' },
    { label: 'History', value: 'History' },
    { label: 'Leisure', value: 'Leisure' },
    { label: 'Poetry', value: 'Poetry' },
    { label: 'Self-help', value: 'Self-help' },
    { label: 'Science', value: 'Science' },
  ]);
  const [valueCondition, setValueCondition] = useState(null);
  const [conditionOpen, setConditionOpen] = useState(false);
  const [conditions, setConditions] = useState([
    { label: 'Like new', value: 'Like new' },
    { label: 'Good', value: 'Good' },
    { label: 'Average', value: 'Average' },
    { label: 'Acceptable', value: 'Acceptable' },
  ]);

  const [valueLanguage, setValueLanguage] = useState(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [languages, setLanguages] = useState([
    { label: 'English', value: 'English' },
    { label: 'French', value: 'French' },
    { label: 'German', value: 'German' },
    { label: 'Spanish', value: 'Spanish' },
    { label: 'Chinese', value: 'Chinese' },
  ]);

  const onGenreOpen = useCallback(() => {
    setGenreOpen(true);
    setConditionOpen(false);
    setLanguageOpen(false);
  }, []);

  const onGenreClose = useCallback(() => {
    setGenreOpen(false);
  }, []);

  const onConditionOpen = useCallback(() => {
    setConditionOpen(true);
    setGenreOpen(false);
    setLanguageOpen(false);
  }, []);

  const onConditionClose = useCallback(() => {
    setConditionOpen(false);
  }, []);

  const onLanguageOpen = useCallback(() => {
    setLanguageOpen(true);
    setGenreOpen(false);
    setConditionOpen(false);
  }, []);

  const onLanguageClose = useCallback(() => {
    setLanguageOpen(false);
  }, []);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const { title, authors, publishedDate, description } = route.params;
  const bookData = {
    city: user.city,
    owner: user._id,
    title: title,
    authors: authors,
    publishedDate: publishedDate,
    description: description,
  };

  const handlePublishBook = async (valueGen, valueCon, valueLan, valueNote) => {
    const newBook = {
      ...bookData,
      genre: valueGen,
      condition: valueCon,
      language: valueLan,
      personalDescription: valueNote,
      selectedFiles: [image.base64],
    };
    console.log(newBook);
    try {
      if (!valueGen || !valueCon || !valueLan || !valueNote || !image.base64) {
        setError('All fields are required!');
      } else {
        dispatch(addBookToOfferedBooks(newBook, user.booksToOffer));
        dispatch(getBooksToOffer(user.booksToOffer));
        navigation.navigate('Books');
        setError(null);
        setNote(null);
        setImage(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePress = () => {
    if (genreOpen) {
      setGenreOpen(false);
    } else if (conditionOpen) {
      setConditionOpen(false);
    } else if (languageOpen) {
      setLanguageOpen(false);
    }
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenGradient>
        <TouchableWithoutFeedback onPress={handlePress} accessible={false}>
          <View style={styles.content}>
            <PrimaryText
              text="And now the rest ..."
              customStyles={styles.text}
            />
            <View style={styles.main}>
              <View style={styles.pickerContainer}>
                <DropDownPicker
                  style={styles.picker}
                  open={genreOpen}
                  value={valueGenre}
                  items={genres}
                  searchable={false}
                  placeholder="Genre"
                  onClose={onGenreClose}
                  setOpen={onGenreOpen}
                  onPress={onGenreOpen}
                  setValue={setValueGenre}
                  setItems={setGenres}
                  onChangeValue={(val) => setValueGenre(val)}
                  dropDownContainerStyle={styles.backgroundDrop}
                  zIndex={3000}
                  zIndexInverse={5000}
                  dropDownDirection="BOTTOM"
                />
                <DropDownPicker
                  style={styles.picker}
                  open={conditionOpen}
                  value={valueCondition}
                  items={conditions}
                  searchable={false}
                  placeholder="Condition"
                  onClose={onConditionClose}
                  setOpen={onConditionOpen}
                  onPress={onConditionOpen}
                  setValue={setValueCondition}
                  setItems={setConditions}
                  onChangeValue={(val) => setValueCondition(val)}
                  dropDownContainerStyle={styles.backgroundDrop}
                  zIndex={2000}
                  zIndexInverse={4000}
                  dropDownDirection="BOTTOM"
                />
                <DropDownPicker
                  style={styles.picker}
                  open={languageOpen}
                  value={valueLanguage}
                  items={languages}
                  searchable={false}
                  placeholder="Language"
                  onClose={onLanguageClose}
                  setOpen={onLanguageOpen}
                  onPress={onLanguageOpen}
                  setValue={setValueLanguage}
                  setItems={setLanguages}
                  onChangeValue={(val) => setValueLanguage(val)}
                  dropDownContainerStyle={styles.backgroundDrop}
                  zIndex={1000}
                  zIndexInverse={3000}
                  dropDownDirection="BOTTOM"
                />
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.inputText, styles.noteText]}
                    value={note}
                    onChangeText={(val) => setNote(val)}
                    placeholder="Describe the book"
                    multiline={true}
                    textAlignVertical="top"
                    enablesReturnkeyAutomatically={true}
                  />
                </View>
              </View>
              <View style={styles.upload}>
                <UploadImageBtn setImage={setImage} navigation={navigation} />
              </View>
              {image && (
                <PrimaryBold
                  text="Your Image has been uploaded!"
                  customStyles={styles.imageText}
                />
              )}
              {error && (
                <PrimaryText text={error} customStyles={styles.inputError} />
              )}
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  handlePublishBook(
                    valueGenre,
                    valueCondition,
                    valueLanguage,
                    note,
                  )
                }
              >
                <ButtonGradient>
                  <PrimaryBold
                    text="Publish book"
                    customStyles={styles.buttonText}
                  />
                </ButtonGradient>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScreenGradient>
    </SafeAreaView>
  );
};

export default AddBook3;
