import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import PrimaryHeader from '../../components/Headers/PrimaryHeader';
import PrimaryText from '../../components/Texts/PrimaryText';
import PrimaryLight from '../../components/Texts/PrimaryLight';
import PrimaryMedium from '../../components/Texts/PrimaryMedium';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import AlertModal from '../../components/AlertModal/AlertModal';
import ResultModal from '../../components/AlertModal/ResultModal';
import { MatchesIconButton } from '../../components/Buttons/IconButtons/MatchesIconButton';
import { Feather } from '@expo/vector-icons';
import { deleteUser } from '../../redux/actions/userActions';
import { helpDeleteUser } from '../../utils/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../global/styles';
import styles from './styles';

const BookItem = ({ book, navigation }) => {
  const handlePress = () => {
    navigation.navigate('SingleBook', { item: book });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.listItem, styles.flexRow]}
    >
      <Image
        source={{
          uri: book.selectedFiles
            ? `data:image/jpeg;base64,${book.selectedFiles[0]}`
            : null,
        }}
        style={styles.bookImage}
      />
      <View style={styles.listItemTexts}>
        <PrimaryBold text={book.title} numberOfLines={1} />
        <PrimaryText text={book.authors.join(', ')} numberOfLines={1} />
      </View>
    </TouchableOpacity>
  );
};

const ProfileScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user.user);
  const booksToOffer = useSelector((state) => state.usersBooks.booksToOffer);

  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <AlertModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        whiteButtonText="Cancel"
        buttonText="Delete"
        handlePress={async () => {
          const res = await helpDeleteUser(user._id);
          if (res === `User ${user.username} is deleted`) {
            setShowDeleteModal(false);
            setShowConfirmModal(true);
          }
          setShowDeleteModal(false);
          setShowFailModal(true);
        }}
      >
        <PrimaryMedium
          customStyles={[styles.modalText, styles.textMarginBottom]}
          text="All your data will be deleted forever and you will not be able to access it again!"
        />
        <PrimaryMedium
          customStyles={styles.modalText}
          text="Are you sure you want to delete your account?"
        />
      </AlertModal>
      <ResultModal
        buttonText="Dismiss"
        showModal={showConfirmModal}
        dismissModal={() => {
          dispatch(deleteUser());
        }}
      >
        <PrimaryMedium
          text="Your profile has been deleted from our database along with all your data that you have submitted during your subscription with us."
          customStyles={styles.modalText}
        />
      </ResultModal>
      <ResultModal
        buttonText="Dismiss"
        showModal={showFailModal}
        dismissModal={() => setShowFailModal(false)}
      >
        <PrimaryMedium
          text="Something went wrong and we could not delete your profile."
          customStyles={[styles.modalText, styles.textMarginBottom]}
        />
        <PrimaryMedium
          text="Please try again!"
          customStyles={styles.modalText}
        />
      </ResultModal>
      <PrimaryHeader text="Your profile" navigation={navigation} />
      <ScreenGradient customStyles={styles.gradient}>
        <View style={styles.userCard}>
          <View style={styles.flexRow}>
            <View>
              <Image source={{ uri: user.avatar }} style={styles.avatar} />
              <PrimaryLight text="10 points" />
            </View>
            <View>
              <PrimaryBold
                text={user.username}
                customStyles={[styles.userDataText, styles.username]}
              />
              <PrimaryText
                text={user.email}
                customStyles={styles.userDataText}
              />
              <PrimaryText
                text={user.city}
                customStyles={styles.userDataText}
              />
            </View>
          </View>
          <View>
            <ScrollView style={styles.aboutUserContainer}>
              <PrimaryText
                customStyles={styles.aboutUser}
                text={user.aboutMe && user.aboutMe}
              />
            </ScrollView>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}
              style={styles.flexRow}
            >
              <Feather name="edit-3" size={18} color={colors.textFaded} />
              <PrimaryLight
                text="Edit profile"
                customStyles={styles.lightButtonText}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.flexRow, styles.accordionHeaderGroup]}>
          <PrimaryMedium
            text="My books"
            customStyles={styles.accordionHeaderText}
          />
          <MatchesIconButton
            iconName="plus"
            handlePress={() => navigation.navigate('AddBookStack')}
          />
        </View>

        {booksToOffer.length > 0 ? (
          <View style={styles.scrollArea}>
            <FlatList
              data={booksToOffer}
              renderItem={(data) => (
                <BookItem book={data.item} navigation={navigation} />
              )}
              keyExtractor={(item, idx) =>
                `${item.title} - ${item.description} ${idx}`
              }
            />
          </View>
        ) : (
          <PrimaryText
            text="Currently no books to offer"
            customStyles={styles.marginLeft}
          />
        )}

        <TouchableOpacity
          onPress={() => setShowDeleteModal(true)}
          style={[styles.deleteButton, styles.flexRow]}
        >
          <Feather name="trash-2" size={18} color={colors.textFaded} />
          <PrimaryLight
            text="Delete profile"
            customStyles={styles.lightButtonText}
          />
        </TouchableOpacity>
      </ScreenGradient>
    </SafeAreaView>
  );
};

export default ProfileScreen;
