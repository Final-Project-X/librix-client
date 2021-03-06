import React, { useState, useCallback } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import ButtonGradient from '../../components/Gradients/ButtonGradient';
import UploadImageBtn from '../../components/Buttons/UploadImageBtn';
import PrimaryText from '../../components/Texts/PrimaryText';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import { addBookToOfferedBooks } from '../../redux/actions/usersBooksActions';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../../utils/apiCalls';

const AddBook3 = ({ navigation, route }) => {
  const [errors, setErrors] = useState(null);
  const [disabled, setDisabled] = useState(false);
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
    { label: 'Horror', value: 'Horror' },
    { label: 'Sci-fi', value: 'Sci-fi' },
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
    { label: 'Polish', value: 'Polish' },
    { label: 'Slovak', value: 'Slovak' },
    { label: 'Ukrainian', value: 'Ukrainian' },
    { label: 'Italian', value: 'Italian' },
    { label: 'Czech', value: 'Czech' },
    { label: 'Arabic', value: 'Arabic' },
    { label: 'Turkish', value: 'Turkish' },
    { label: 'Greek', value: 'Greek' },
    { label: 'Other', value: 'Other' },
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
  const userToken = useSelector((state) => state.token.token);

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
    setDisabled(true);
    const newBook = {
      ...bookData,
      genre: valueGen,
      condition: valueCon,
      language: valueLan,
      personalDescription: valueNote,
      selectedFiles: [image?.base64],
    };

    const showAlert = () => {
      Alert.alert('Book added', 'You have successfuly added your book!', [
        { text: 'OK' },
      ]);
    };
    try {
      if (!valueGen || !valueCon || !valueLan || !image) {
        setErrors('Please make sure fields are filled in correctly!');
        setDisabled(false);
      } else {
        const result = await addBook(newBook, userToken);
        console.log('result.data', result.data);
        if (result.data && result.data._id) {
          showAlert();
          setDisabled(false);
        } else if (result.error) {
          setErrors('Sorry, your image size is too large.');
          setDisabled(false);
        }
        dispatch(addBookToOfferedBooks(result.data));
        navigation.navigate('Books');
        setValueGenre(null);
        setValueCondition(null);
        setValueLanguage(null);
        setNote(null);
        setImage(null);
        setErrors(null);
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
    <ScreenGradient>
      <TouchableWithoutFeedback onPress={handlePress} accessible={false}>
        <View style={styles.content}>
          <PrimaryText text="And now the rest ..." customStyles={styles.text} />
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
                  placeholder="Describe the book (optional)"
                  multiline={true}
                  textAlignVertical="top"
                  enablesReturnkeyAutomatically={true}
                />
              </View>
            </View>
            <View style={styles.upload}>
              <UploadImageBtn setImage={setImage} navigation={navigation} />
            </View>
            {errors && (
              <PrimaryText text={errors} customStyles={styles.inputError} />
            )}
            {image && (
              <PrimaryBold
                text="Your Image has been uploaded!"
                customStyles={styles.imageText}
              />
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
              disabled={disabled}
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
  );
};

export default AddBook3;
