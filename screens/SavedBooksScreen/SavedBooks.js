import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import SavedBookList from '../../components/BookCards/SavedBookList';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import PrimaryMedium from '../../components/Texts/PrimaryMedium';
import ButtonGradient from '../../components/Gradients/ButtonGradient';
import AlertModal from '../../components/AlertModal/AlertModal';
import styles from './styles';
import { useSelector } from 'react-redux';

const SavedBooks = ({ navigation }) => {
  const savedBooks = useSelector((state) => state.savedBooks.savedBooks);
  const [showModal, setShowModal] = useState(false);

  const handlePress = () => {
    navigation.navigate('AddBook1');
    setShowModal(false);
  };

  return (
    <ScreenGradient>
      <AlertModal
        showModal={showModal}
        setShowModal={setShowModal}
        buttonText="Add a book"
        whiteButtonText="Not now"
        handlePress={handlePress}
      >
        <PrimaryMedium
          customStyles={styles.modalText}
          text="You need to contribute mate!"
        />
        <PrimaryMedium
          customStyles={styles.modalText}
          text="One hand washes the other, this is how we do it."
        />
        <PrimaryMedium
          customStyles={styles.modalText}
          text="Upload a book — and have a look!"
        />
      </AlertModal>
      <PrimaryBold text={'Books you saved'} customStyles={styles.title} />
      {savedBooks?.length < 1 ? (
        <View>
          <PrimaryMedium
            text="You do not have any saved books."
            customStyles={styles.text}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Books')}
          >
            <ButtonGradient>
              <PrimaryBold text="Go Swiping" customStyles={styles.buttonText} />
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
                setShowModal={setShowModal}
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
