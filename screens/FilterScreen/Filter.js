import React, { useState, useCallback } from 'react';
import { TouchableOpacity, TextInput, View, SafeAreaView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import ButtonGradient from '../../components/Gradients/ButtonGradient';
import styles from './styles';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import { useDispatch, useSelector } from 'react-redux';
import { getPoolOfBooks } from '../../redux/actions/poolOfBooksActions';

const Filter = ({ navigation }) => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState('');
  const [genreOpen, setGenreOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [valueGenre, setValueGenre] = useState(null);
  const [valueLanguage, setValueLanguage] = useState(null);
  const [genres, setGenres] = useState([
    { label: 'Any', value: 'Any' },
    { label: 'Action', value: 'action' },
    { label: 'Children book', value: 'children book' },
    { label: 'Classic', value: 'classic' },
    { label: 'Comic book', value: 'comic book' },
    { label: 'Crime', value: 'crime' },
    { label: 'Drama', value: 'drama' },
    { label: 'Poetry', value: 'poetry' },
    { label: 'Self-help', value: 'self-help' },
  ]);

  const [languages, setLanguages] = useState([
    { label: 'Any', value: 'Any' },
    { label: 'English', value: 'english' },
    { label: 'French', value: 'french' },
    { label: 'German', value: 'german' },
    { label: 'Spanish', value: 'spanish' },
    { label: 'Chinese', value: 'chinese' },
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

  const apply = async (city, genre, language) => {
    dispatch(
      getPoolOfBooks({
        city,
        genre,
        language,
        userID: user._id,
      }),
    );
  };

  return (
    <ScreenGradient>
      <SafeAreaView style={styles.main}>
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
            dropDownDirection="TOP"
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
            zIndex={3000}
            zIndexInverse={1000}
            dropDownDirection="TOP"
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
            <PrimaryBold text="Apply filter" customStyles={styles.buttonText} />
          </ButtonGradient>
        </TouchableOpacity>
      </SafeAreaView>
    </ScreenGradient>
  );
};

export default Filter;
