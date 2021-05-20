import React, { useState, useCallback } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import ButtonGradient from '../../components/Gradients/ButtonGradient';
import UploadImageBtn from '../../components/Buttons/UploadImageBtn';

const AddBook3 = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [valueGenre, setValueGenre] = useState(null);
  const [genreOpen, setGenreOpen] = useState(false);
  const [genres, setGenres] = useState([
    { label: 'Drama', value: 'drama' },
    { label: 'Crime', value: 'crime' },
    { label: 'Comic book', value: 'comic book' },
    { label: 'Classic', value: 'classic' },
    { label: 'Poetry', value: 'poetry' },
    { label: 'Self-help', value: 'self-help' },
    { label: 'Children book', value: 'children book' },
  ]);
  const [valueCondition, setValueCondition] = useState(null);
  const [conditionOpen, setConditionOpen] = useState(false);
  const [conditions, setConditions] = useState([
    { label: 'As good as new', value: 'as good as new' },
    { label: 'Average', value: 'average' },
    { label: 'Below average', value: 'below average' },
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

  const [note, setNote] = useState('');

  const onGenreOpen = useCallback(() => {
    setGenreOpen(true);
  }, []);

  const onGenreClose = useCallback(() => {
    setGenreOpen(false);
  }, []);

  const onConditionOpen = useCallback(() => {
    setConditionOpen(true);
  }, []);

  const onConditionClose = useCallback(() => {
    setConditionOpen(false);
  }, []);

  const onLanguageOpen = useCallback(() => {
    setLanguageOpen(true);
  }, []);

  const onLanguageClose = useCallback(() => {
    setLanguageOpen(false);
  }, []);

  // add book info to bookdata inludes image.base64
  const handlePublishBook = (valueNote, valueLan, valueGen, valueCon) => {
    navigation.navigate('Books');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenGradient>
        <Text style={styles.text}>And now the rest ...</Text>
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
              dropDownDirection="TOP"
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
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.inputText, styles.noteText]}
              value={note}
              onChangeText={(val) => setNote(val)}
              placeholder="Personal notes (description)"
              multiline={true}
              textAlignVertical="top"
            />
          </View>
          <UploadImageBtn setImage={setImage} navigation={navigation} />
          {image && <Image source={{ uri: image.uri }} style={styles.image} />}
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              handlePublishBook(note, valueLanguage, valueGenre, valueCondition)
            }
          >
            <ButtonGradient>
              <Text style={styles.buttonText}>Publish book</Text>
            </ButtonGradient>
          </TouchableOpacity>
        </View>
      </ScreenGradient>
    </SafeAreaView>
  );
};

export default AddBook3;
