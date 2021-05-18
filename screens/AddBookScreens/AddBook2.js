import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import ButtonGradient from '../../components/Gradients/ButtonGradient';

import styles from './styles';

const AddBook2 = ({ navigation }) => {
  const [title, setTitle] = useState(null);
  const [authors, setAuthors] = useState(null);
  const [publishedDate, setPublishedDate] = useState(null);

  //get book from API
  const book = {
    authors: ['Roman Mars', 'Kurt Kohlstedt'],
    category: [],
    selectedFiles: 'https://bilder.buecher.de/produkte/58/58726/58726418n.jpg',
    reserved: false,
    interestedUsers: ['609a81d7be7697a88577453e'],
    _id: '609a81dabe7697a885774544',
    city: 'berlin',
    title: 'The 99% Invisible City',
    subtitle: 'A Field Guide to the Wonders of the Modern Metropolis',
    description:
      '99% Invisible’ is a big-ideas podcast about small-seeming things, revealing stories baked into the buildings we inhabit, the streets we drive, and the sidewalks we traverse. The show celebrates design and architecture in all of its functional glory and accidental absurdity, with intriguing tales of both designers and the people impacted by their designs.00Now, in ‘The 99% Invisible City: A Field Guide to Hidden World of Everyday Design’, host Roman Mars and coauthor Kurt Kohlstedt zoom in on the various elements that make our cities work, exploring the origins and other fascinating stories behind everything from power grids and fire escapes to drinking fountains and street signs. With deeply researched entries and beautiful line drawings throughout, The 99% Invisible City will captivate devoted fans of the show and anyone curious about design, urban environments, and the unsung marvels of the world around them.',
    pages: 288,
    publishedDate: 1997,
    shape: 'as good as new',
    owner: '609a81d7be7697a88577453e',
  };

  //Add the book info to bookdata
  const handleBookInfor = (val1, val2, val3) => {
    console.log(val1, val2, val3);
    navigation.navigate('AddBook3');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenGradient>
        <Text style={styles.text}>
          Please check if the information is correct.
        </Text>
        <View>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.inputText}
            value={title}
            defaultValue={book.title}
            onChangeText={(val) => setTitle(val)}
          />
          <Text style={styles.label}>Author(s)</Text>
          <TextInput
            style={styles.inputText}
            value={authors}
            defaultValue={book.authors?.join(', ')}
            onChangeText={(val) => setAuthors(val)}
          />
          <Text style={styles.label}>Published in</Text>
          <TextInput
            style={styles.inputText}
            value={publishedDate}
            defaultValue={book.publishedDate?.toString()}
            onChangeText={(val) => setPublishedDate(val)}
            numeric={true}
          />
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                handleBookInfor(
                  title || book.title,
                  authors || book.authors,
                  publishedDate || book.publishedDate,
                )
              }
            >
              <ButtonGradient>
                <Text style={styles.buttonText}>Next</Text>
              </ButtonGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScreenGradient>
    </SafeAreaView>
  );
};

export default AddBook2;
