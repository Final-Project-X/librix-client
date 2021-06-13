import React, { useState, useCallback } from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import ButtonGradient from '../../components/Gradients/ButtonGradient';
import styles from './styles';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import { useDispatch, useSelector } from 'react-redux';
import { getPoolOfBooks } from '../../redux/actions/poolOfBooksActions';

const Filter = ({ navigation }) => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState(null);
  const [genreOpen, setGenreOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [valueGenre, setValueGenre] = useState(null);
  const [valueLanguage, setValueLanguage] = useState(null);
  const [genres, setGenres] = useState([
    { label: 'Any', value: 'Any' },
    { label: 'Fiction', value: 'Fiction' },
    { label: 'Action', value: 'Action' },
    { label: 'Children book', value: 'Children book' },
    { label: 'Classic', value: 'Classic' },
    { label: 'Comic book', value: 'Comic book' },
    { label: 'Crime', value: 'Crime' },
    { label: 'Drama', value: 'Drama' },
    { label: 'Fantasy', value: 'Fantasy' },
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

  const [languages, setLanguages] = useState([
    { label: 'Any', value: 'Any' },
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
    setLanguageOpen(false);
  }, []);

  const onGenreClose = useCallback(() => {
    setGenreOpen(false);
  }, []);

  const onLanguageOpen = useCallback(() => {
    setLanguageOpen(true);
    setGenreOpen(false);
  }, []);

  const onLanguageClose = useCallback(() => {
    setLanguageOpen(false);
  }, []);

  const user = useSelector((state) => state.user.user);
  const userToken = useSelector((state) => state.token.token);

  const apply = (city, genre, language) => {
    dispatch(
      getPoolOfBooks(
        {
          city,
          genre,
          language,
          userID: user._id,
        },
        userToken,
      ),
    );
    setLocation(null);
    setValueGenre(null);
    setValueLanguage(null);
  };

  const handlePress = () => {
    if (genreOpen) {
      setGenreOpen(false);
    } else if (languageOpen) {
      setLanguageOpen(false);
    }
    Keyboard.dismiss();
  };

  return (
    <ScreenGradient>
      <TouchableWithoutFeedback onPress={handlePress} accessible={false}>
        <View style={styles.main}>
          <TextInput
            style={styles.input}
            value={location}
            placeholder="City"
            placeholderTextColor="black"
            onChangeText={(val) => setLocation(val)}
            autoFocus={true}
          />
          <View style={styles.pickerContainer}>
            <DropDownPicker
              style={styles.picker}
              open={genreOpen}
              value={valueGenre}
              items={genres}
              searchable={false}
              placeholder="Category"
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              apply(location, valueGenre, valueLanguage);
              navigation.navigate('Books');
            }}
          >
            <ButtonGradient>
              <PrimaryBold
                text="Apply filter"
                customStyles={styles.buttonText}
              />
            </ButtonGradient>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ScreenGradient>
  );
};

export default Filter;
