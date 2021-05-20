import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import styles from './styles';

const SingleBook = ({ route }) => {
  const { item } = route.params;
  return (
    <ScreenGradient>
      <View style={styles.singleBook}>
        <Image source={{ uri: item.selectedFiles }} style={styles.card} />

        <View style={styles.info2}>
          <Text style={styles.title2}>{item.title}</Text>
          <Text style={styles.title2}>by {item.authors.join(', ')}</Text>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
          >
            <Text>{item.description}</Text>
          </ScrollView>
          <View style={styles.item1}>
            <Text style={styles.lan}>Language: {item.language}</Text>
            <Text>Year: {item.publishedDate}</Text>
          </View>
          <View style={styles.item1}>
            <Text style={styles.lan}>Category: {item.category[0]}</Text>
            <Text>Condition: {item.condition}</Text>
          </View>
        </View>
      </View>
    </ScreenGradient>
  );
};

export default SingleBook;
