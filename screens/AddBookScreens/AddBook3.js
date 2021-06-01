import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  LogBox,
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
import { addBook } from '../../utils/apiCalls';
import { addBookToOfferedBooks } from '../../redux/actions/usersBooksActions';
import { useDispatch, useSelector } from 'react-redux';

const AddBook3 = ({ navigation, route }) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  const [error, setError] = useState(null);
  const [note, setNote] = useState(null);
  const [image, setImage] = useState(null);
  const [valueGenre, setValueGenre] = useState(null);
  const [genreOpen, setGenreOpen] = useState(false);
  const [genres, setGenres] = useState([
    { label: 'Action', value: 'action' },
    { label: 'Children book', value: 'children book' },
    { label: 'Classic', value: 'classic' },
    { label: 'Comic book', value: 'comic book' },
    { label: 'Crime', value: 'crime' },
    { label: 'Drama', value: 'drama' },
    { label: 'Poetry', value: 'poetry' },
    { label: 'Self-help', value: 'self-help' },
  ]);
  const [valueCondition, setValueCondition] = useState(null);
  const [conditionOpen, setConditionOpen] = useState(false);
  const [conditions, setConditions] = useState([
    { label: 'Like new', value: 'like new' },
    { label: 'Good', value: 'good' },
    { label: 'Average', value: 'average' },
    { label: 'Acceptable', value: 'acceptable' },
  ]);

  const [valueLanguage, setValueLanguage] = useState(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [languages, setLanguages] = useState([
    { label: 'English', value: 'english' },
    { label: 'French', value: 'french' },
    { label: 'German', value: 'german' },
    { label: 'Spanish', value: 'spanish' },
    { label: 'Chinese', value: 'chinese' },
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
    try {
      if (!valueGen || !valueCon || !valueLan || !valueNote || !image.base64) {
        setError('All fields are required!');
      } else {
        const newBook = await addBook({
          ...bookData,
          genre: valueGen,
          condition: valueCon,
          language: valueLan,
          personalDescription: valueNote,
          selectedFiles: [image.base64],
        });
        dispatch(addBookToOfferedBooks(newBook, user.booksToOffer));
        navigation.navigate('Books');
        setError(null);
        setNote(null);
        setImage(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenGradient>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode={'on-drag'}
        >
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
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
                    zIndexInverse={1000}
                    dropDownDirection="BOTTOM"
                  />
                </View>
                <View style={styles.pickerContainer}>
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
                    zIndexInverse={2000}
                    dropDownDirection="BOTTOM"
                  />
                </View>
                <View style={styles.pickerContainer}>
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
                </View>
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
                <View style={styles.upload}>
                  <UploadImageBtn setImage={setImage} navigation={navigation} />
                  {image && (
                    <Image source={{ uri: image.uri }} style={styles.image} />
                  )}
                </View>
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
        </ScrollView>
      </ScreenGradient>
    </SafeAreaView>
  );
};

export default AddBook3;
