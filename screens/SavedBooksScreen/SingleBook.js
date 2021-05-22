import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import styles from './styles';
import PrimaryText from '../../components/Texts/PrimaryText';
import SerifText from '../../components/Texts/SerifText';

const SingleBook = ({ route }) => {
  const { item } = route.params;
  return (
    <ScreenGradient>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.singleBook}>
          <Image source={{ uri: item.selectedFiles }} style={styles.card} />

          <View>
            <SerifText text={item.title} customStyles={styles.text} />
            <PrimaryText
              text={`by ${item.authors.join(', ')}`}
              customStyles={styles.text}
            />

            <PrimaryText text={item.description} />
            <PrimaryText
              text={`Personal notes: ${item.note}`}
              customStyles={styles.note}
            />
            <View style={styles.item1}>
              <PrimaryText
                text={`Language: ${item.language}`}
                customStyles={styles.lan}
              />
              <PrimaryText text={`Year: ${item.publishedDate}`} />
            </View>
            <View style={styles.item1}>
              <PrimaryText
                text={`Category: ${item.category[0]}`}
                customStyles={styles.lan}
              />
              <PrimaryText text={`Condition: ${item.condition}`} />
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenGradient>
  );
};

export default SingleBook;
