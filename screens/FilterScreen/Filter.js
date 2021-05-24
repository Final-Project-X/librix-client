import React, { useState, useCallback } from 'react';
import { TouchableOpacity, TextInput, View, SafeAreaView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import ButtonGradient from '../../components/Gradients/ButtonGradient';
import styles from './styles';
import PrimaryBold from '../../components/Texts/PrimaryBold';

const books = [
  {
    authors: ['Robert Dimery'],
    category: ['Popular music'],
    selectedFiles:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ1xebBiuWpBBbsBEovQfm0ilY9ex_ejvHCbhhCpHuzEdNUvNvf6ITitqjrHSnalVXwVHEgYfIGwE3UjM3QYKrQe8xL78Ru&usqp=CAE',
    reserved: false,
    interestedUsers: [],
    _id: '609a81d8be7697a885774541',
    city: 'berlin',
    title: 'One Thousand and One Albums You Must Hear Before You Die',
    description:
      'What did Time magazine consider the twentieth-century’s greatest album? Which anthem by Prince was an attempt to emulate Bob Seger? And what links Count Basie and Batman? If you thought you knew your music, then think again. 1001Albums You Must Hear Before You Die, is totally revised and fully updated for 2013, and is the definitive guide to accompany your interest in music. Written by top UK and US music journalists, and includes a preface by Michael Lydon, the founding editor of the Rolling Stone magazine. It celebrates the great and ground-breaking albums throughout the eras - from the genesis of Fifties rock ‘n’ roll to the technological and electronic innovations of the 2000s. Each entry includes key tracks and explains exactly why each of these albums deserved to be included in the list, offering an insight into the process of their creation, development, and success. With albums from Elvis Presley, Frank Sinatra, Miles Davis, The Rolling Stones, Bob Dylan, The Sex Pistols, ACDC, Ray Price, the Beach Boys, Sonic Youth, P J Harvey, Jack White, Green Day, Christina Aguilera, and the latest from David Bowie, as well as new cutting-edge entries such as Kendrick Lamar and Django Django, 1001 Albums You Must Hear Before You Die covers all the works that have formed part of the soundtracks to all our lives, at one point or another. Illustrated with more than 900 iconic images of album covers, bands and artists, as well as photographs from many legendary gigs, 1001 Albums You Must Hear Before You Die, covers from the 1950s to the present and is the single most comprehensive list of music that changed the world, an absolute must-have for all the musically inspired.',
    publishedDate: 2013,
    pages: 960,
    shape: 'as good as new',
    owner: '609a81d7be7697a88577453e',
  },
];

const Filter = ({ navigation }) => {
  const [city, setCity] = useState('');
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
  const [poolOfBooks, setPoolOfBooks] = useState([]);

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

  const apply = (location, genre, language) => {
    let newBooks = [];
    if (genre === 'Any' && language === 'Any') {
      newBooks = books.filter((book) => book.city === location);
      return setPoolOfBooks(newBooks);
    } else if (genre !== 'Any') {
      newBooks = books.filter(
        (book) => book.city === location && book.category.includes(genre),
      );
      return setPoolOfBooks(newBooks);
    } else {
      newBooks = books.filter(
        (book) => book.city === location && book.language === language,
      );
      return setPoolOfBooks(newBooks);
    }
  };
  console.log(poolOfBooks);

  return (
    <ScreenGradient>
      <SafeAreaView style={styles.main}>
        <TextInput
          style={styles.input}
          value={city}
          placeholder="City"
          placeholderTextColor="black"
          onChangeText={(val) => setCity(val)}
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
            apply(city, valueGenre, valueLanguage);
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
