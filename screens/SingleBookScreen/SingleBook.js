import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import PrimaryText from '../../components/Texts/PrimaryText';

import SerifText from '../../components/Texts/SerifText';
import styles from './styles';
import Icon from '../../assets/book-open.png';

const SingleBook = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <ScreenGradient>
      <View style={styles.container}>
        <ScrollView
          style={styles.singleBook}
          contentContainerStyle={styles.contentContainer}
        >
          <Image
            source={
              item.selectedFiles.length > 0
                ? { uri: `data:image/jpeg;base64,${item.selectedFiles[0]}` }
                : Icon
            }
            style={styles.card}
          />

          <View>
            <SerifText
              text={item?.title}
              customStyles={[styles.text, styles.title]}
            />
            <PrimaryText
              text={`by ${item?.authors.join(', ')}`}
              customStyles={[styles.text, styles.author]}
            />

            <PrimaryText text={item?.description} customStyles={styles.des} />
            {item?.personalDescription ? (
              <PrimaryText
                text={`Personal notes: ${item.personalDescription}`}
                customStyles={styles.note}
              />
            ) : null}

            <PrimaryText
              text={`Language: ${item?.language}`}
              customStyles={styles.item}
            />
            <PrimaryText
              text={`Year: ${item?.publishedDate}`}
              customStyles={styles.item}
            />
            <PrimaryText
              text={`Genre: ${item?.genre}`}
              customStyles={styles.item}
            />
            <PrimaryText
              text={`Condition: ${item?.condition}`}
              customStyles={styles.item}
            />
          </View>
        </ScrollView>
      </View>
    </ScreenGradient>
  );
};

export default SingleBook;
