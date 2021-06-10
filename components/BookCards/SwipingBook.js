import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PrimaryText from '../Texts/PrimaryText';
import SerifText from '../Texts/SerifText';
import styles from './styles';
import Icon from '../../assets/book-open.png';

const SwipingBook = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SingleBook', { item })}
    >
      <View style={styles.card}>
        <Image
          source={
            item?.selectedFiles.length > 0
              ? { uri: `data:image/jpeg;base64,${item.selectedFiles[0]}` }
              : Icon
          }
          style={styles.cardImage}
        />
        <View style={styles.info}>
          <SerifText text={item?.title} customStyles={styles.title} />
          <PrimaryText
            text={`by ${item?.authors?.join(', ')}`}
            customStyles={styles.text}
          />
          <PrimaryText text={item?.description} numberOfLines={3} />
          <PrimaryText
            text={`Language: ${item?.language}`}
            customStyles={styles.lan}
          />
          <PrimaryText
            text={`Genre: ${item?.genre}`}
            customStyles={styles.lan}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SwipingBook;
