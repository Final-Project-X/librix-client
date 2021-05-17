import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  //   Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';

export default function AddBook3({ navigation }) {
  const [valueGenre, setValueGenre] = useState(null);
  const [genreOpen, setGenreOpen] = useState(false);
  const [genres, setGenres] = useState([
    { label: 'Any', value: 'Any' },
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
    { label: 'Any', value: 'Any' },
    { label: 'As good as new', value: 'as good as new' },
    { label: 'Average', value: 'average' },
    { label: 'Below average', value: 'below average' },
  ]);

  const [valueLanguage, setValueLanguage] = useState(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [languages, setLanguages] = useState([
    { label: 'Any', value: 'Any' },
    { label: 'English', value: 'english' },
    { label: 'French', value: 'french' },
    { label: 'German', value: 'german' },
    { label: 'Spanish', value: 'spanish' },
    { label: 'Chinese', value: 'chinese' },
  ]);

  const [note, setNote] = useState('');
  //   const [image, setImage] = useState(null);

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

  // add upload image code
  const uploadImage = () => {};

  // add book info to bookdata
  const handlePublishBook = (valueNote, valueLan, valueGen, valueCon) => {
    navigation.navigate('Books');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['rgba(255,255,255,0.1)', 'rgba(247,148,9,0.9)']}
        style={styles.background}
      >
        <Text style={styles.text}>And now the rest ...</Text>
        <View style={styles.main}>
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

          <TextInput
            style={styles.inputText}
            value={note}
            onChangeText={(val) => setNote(val)}
            placeholder="Personal notes (description)"
            multiline={true}
            numberOfLines={5}
            textAlignVertical="top"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.uploadButtton} onPress={uploadImage}>
            <Text style={styles.uploadText}>Upload image</Text>
            <Ionicons name="ios-cloud-upload-outline" size={20} color="white" />
          </TouchableOpacity>
          {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            handlePublishBook(note, valueLanguage, valueGenre, valueCondition)
          }
        >
          <Text style={styles.buttonText}>Publish book</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  backgroundDrop: {
    backgroundColor: 'lightblue',
  },
  picker: {
    borderColor: 'transparent',
    borderRadius: 40,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 7 },
  },
  main: {
    marginHorizontal: 40,
  },
  text: {
    textAlign: 'center',
    margin: 20,
    fontSize: 20,
  },
  inputText: {
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
    height: 100,
    backgroundColor: '#ffffff',
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 7 },
  },
  uploadButtton: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: '#2a2a81',
    borderRadius: 40,
    alignSelf: 'flex-start',
    marginLeft: 40,
    flexDirection: 'row',
  },
  uploadText: {
    color: 'white',
    marginRight: 5,
  },
  button: {
    backgroundColor: '#2a2a81',
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 60,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
