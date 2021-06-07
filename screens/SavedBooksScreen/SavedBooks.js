import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import SavedBookList from '../../components/BookCards/SavedBookList';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import ButtonGradient from '../../components/Gradients/ButtonGradient';
import styles from './styles';
import { useSelector } from 'react-redux';

const SavedBooks = ({ navigation }) => {
  const savedBooks = useSelector((state) => state.savedBooks.savedBooks);
  console.log('savedBooks from savedBooks.js:', savedBooks);

  return (
    <ScreenGradient>
      <PrimaryBold text={'Books you saved'} customStyles={styles.title} />
      {savedBooks?.length < 1 ? (
        <View>
          <PrimaryBold
            text="You haven't saved any books. Go start looking ..."
            customStyles={styles.text}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <ButtonGradient>
              <PrimaryBold text="Go Back" customStyles={styles.buttonText} />
            </ButtonGradient>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <FlatList
            style={styles.flatlist}
            data={savedBooks}
            renderItem={({ item }) => (
              <SavedBookList
                item={item}
                savedBooks={savedBooks}
                navigation={navigation}
              />
            )}
            keyExtractor={(item) => item._id}
          />
        </View>
      )}
    </ScreenGradient>
  );
};

export default SavedBooks;
