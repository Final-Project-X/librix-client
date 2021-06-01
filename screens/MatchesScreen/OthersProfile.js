import React, { useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import PrimaryHeader from '../../components/Headers/PrimaryHeader';
import PrimaryText from '../../components/Texts/PrimaryText';
import PrimaryLight from '../../components/Texts/PrimaryLight';
import PrimaryMedium from '../../components/Texts/PrimaryMedium';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import AlertModal from '../../components/AlertModal/AlertModal';
import Icon from '../../assets/favicon.png';
import { Feather } from '@expo/vector-icons';
import { colors, shadow } from '../../global/styles';

const SAMPLE_MATCHES_OBJECT = [
  {
    _id: '60a763235ff68c2c15fe2d2b',
    bookOne: {
      _id: '60a7631c5ff68c2c15fe2d1e',
      authors: ['Osha Gray Davidson'],
      isbn: ['1469646609'],
      city: 'berlin',
      selectedFiles: [
        'https://i.pinimg.com/originals/d0/5d/fa/d05dfab680acc23e84e619fab3fce9ef.jpg',
      ],
      reserved: false,
      title: 'The Best of Enemies, Movie Edition',
      description:
        "C. P. Ellis grew up in the poor white section of Durham, North Carolina, and as a young man joined the Ku Klux Klan. Ann Atwater, a single mother from the poor black part of town, quit her job as a household domestic to join the civil rights fight. During the 1960s, as the country struggled with the explosive issue of race, Ellis and Atwater met on opposite sides of the public school integration issue. Their encounters were charged with hatred and suspicion. In an amazing set of transformations, however, each of them came to see how the other had been exploited by the South's rigid power structure, and they forged a friendship that flourished against a backdrop of unrelenting bigotry. Now a major motion picture, The Best of Enemies offers a vivid portrait of a relationship that defied all odds. View the movie trailer here: https://youtu.be/eKM6fSTs-A0",
      publishedDate: '2019-02',
      condition: 'as good as new',
      category: 'book',
      owner: {
        username: 'audreeeeyyy',
      },
    },
    bookTwo: {
      _id: '60a763225ff68c2c15fe2d2a',
      authors: [
        'Jeremy Crawford',
        'James Wyatt',
        'Wizards of the Coast, Inc',
        'Robert J. Schwalb',
        'Bruce R. Cordell',
      ],
      isbn: ['0786965606'],
      city: 'berlin',
      selectedFiles: [
        'https://i.ebayimg.com/images/g/yAIAAOSwv9pfYnGW/s-l640.jpg',
      ],
      reserved: false,
      title: "Player's Handbook",
      description:
        "A player's handbook for the newest edition of the role-playing game contains rules for character creation and advancement, backgrounds and skills, exploration, equipment, and spells.",
      publishedDate: '2014',
      condition: 'as good as new',
      category: 'book',
      owner: {
        username: 'lisa',
      },
    },
    chat: {},
    status: 'pending',
    createdAt: '2021-05-21T07:37:07.275+00:00',
  },
  {
    _id: '60a763235ff68c2c15fe2d2c',
    bookOne: {
      _id: '60a7631c5ff68c2c15fe2d1f',
      authors: ['J. K. Rowling'],
      isbn: ['3551354022'],
      city: 'berlin',
      selectedFiles: [
        'https://www.carlsen-harrypotter.de/sites/default/files/produkt/cover/9783551354020_0.jpg',
      ],
      reserved: false,
      title: 'Harry Potter und die Kammer des Schreckens',
      description:
        'The second book in the Harry Potter series translated into German.',
      publishedDate: '2006',
      condition: 'as good as new',
      category: 'book',
      owner: {
        username: 'audreeeeyyy',
      },
    },
    bookTwo: {
      _id: '60a763225ff68c2c15fe2d2a',
      authors: [
        'Jeremy Crawford',
        'James Wyatt',
        'Wizards of the Coast, Inc',
        'Robert J. Schwalb',
        'Bruce R. Cordell',
      ],
      isbn: ['0786965606'],
      city: 'berlin',
      selectedFiles: [
        'https://i.ebayimg.com/images/g/yAIAAOSwv9pfYnGW/s-l640.jpg',
      ],
      reserved: false,
      title: "Player's Handbook",
      description:
        "A player's handbook for the newest edition of the role-playing game contains rules for character creation and advancement, backgrounds and skills, exploration, equipment, and spells.",
      publishedDate: '2014',
      condition: 'as good as new',
      category: 'book',
      owner: {
        username: 'lisa',
      },
    },
    chat: {},
    status: 'pending',
    createdAt: '2021-05-21T07:37:07.275+00:00',
  },
];

const Match = ({ matchInfo, username, setShowModal, navigation }) => {
  const { bookOne, bookTwo } = matchInfo;
  const leftHandBook = bookOne.owner.username === username ? bookOne : bookTwo;
  const rightHandBook = bookOne.owner.username === username ? bookTwo : bookOne;

  return (
    <View style={[styles.flexRow, styles.match]}>
      <View style={styles.bookCard}>
        <View style={styles.nameLabel}>
          <PrimaryBold customStyles={styles.nameLabelText} text="You" />
        </View>
        <View style={styles.imageShadow}>
          <Image
            style={[styles.bookImage, styles.imageShadow]}
            source={
              leftHandBook.selectedFiles.length > 0
                ? { uri: leftHandBook.selectedFiles[0] }
                : Icon
            }
          />
        </View>
        <PrimaryBold text={leftHandBook.title} numberOfLines={2} />
      </View>
      <Feather
        name="refresh-cw"
        size={24}
        color={colors.primary.dark}
        style={styles.rotateIcon}
      />
      <View style={styles.bookCard}>
        <View style={styles.nameLabel}>
          <PrimaryBold
            customStyles={styles.nameLabelText}
            text={rightHandBook.owner.username}
            numberOfLines={1}
          />
        </View>
        <View style={styles.imageShadow}>
          <Image
            style={[styles.bookImage, styles.imageShadow]}
            source={
              rightHandBook.selectedFiles.length > 0
                ? { uri: rightHandBook.selectedFiles[0] }
                : Icon
            }
          />
        </View>
        <PrimaryBold text={rightHandBook.title} numberOfLines={2} />
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Matches')}
          style={[styles.button, styles.purpleBtn]}
        >
          <Feather name="message-circle" size={16} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={[styles.button, styles.orangeBtn]}
        >
          <Feather name="trash" size={16} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const OthersProfile = ({ navigation, otherUser, userId }) => {
  const username = 'audreeeyyy';
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <AlertModal
        showModal={showModal}
        setShowModal={setShowModal}
        whiteButtonText="Stop"
        buttonText="It's over"
      >
        <PrimaryMedium
          text="You want to cut the connection?"
          customStyles={[styles.modalText, styles.modalBoldText]}
        />
        <PrimaryText text="Thats' ok." customStyles={styles.modalText} />
        <PrimaryText
          text="Pressing the purpleBtn button will make every word regarding this relationship disappear."
          customStyles={styles.modalText}
        />
        <PrimaryText
          text="Clean breakup — no bull***"
          customStyles={styles.modalText}
        />
      </AlertModal>
      <ScreenGradient customStyles={styles.gradient}>
        <PrimaryHeader navigation={navigation} text={`${username}'s profile`} />
        <View style={styles.userCard}>
          <View style={[styles.flexRow, styles.alignCenter]}>
            <View>
              <Image source={Icon} style={styles.avatar} />
              <PrimaryLight text="10 points" />
            </View>
            <View>
              <PrimaryText
                text="Username"
                customStyles={[styles.userDataText, styles.username]}
              />
              <PrimaryText text="City" customStyles={styles.userDataText} />
            </View>
          </View>
          <View>
            <ScrollView style={styles.aboutUserContainer}>
              <PrimaryText
                customStyles={styles.aboutUser}
                text="I order total directed against this conspiracy to pay off - Stay out of the Garden Of Delights - The Kid at the wheel and his foot on the floor - Already set off the charge - Postulate a biologic film running from the beginning to the end "
              />
            </ScrollView>
          </View>
        </View>
        <PrimaryMedium
          text={`Matches with ${username}`}
          customStyles={styles.listHeader}
          numberOfLines={2}
        />
        <FlatList
          data={SAMPLE_MATCHES_OBJECT}
          renderItem={({ item }) => (
            <Match
              matchInfo={item}
              username={username}
              setShowModal={setShowModal}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      </ScreenGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  gradient: {
    padding: 20,
    paddingBottom: 0,
  },
  userCard: {
    padding: 20,
    borderRadius: 25,
    backgroundColor: colors.white,
    marginBottom: 10,
  },
  avatar: {
    width: 75,
    height: 75,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: 'red',
    borderRadius: 50,
  },
  userDataText: {
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
  },
  aboutUserContainer: {
    height: 60,
    marginTop: 15,
  },
  aboutUser: {
    fontSize: 16,
  },
  listHeader: {
    fontSize: 20,
    marginVertical: 5,
    marginLeft: 10,
  },
  match: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  bookCard: {
    width: 100,
    shadowColor: colors.black,
  },
  nameLabel: {
    position: 'absolute',
    top: -5,
    left: -5,
    zIndex: 3,
    backgroundColor: colors.white,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderColor: colors.secondary.light,
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  nameLabelText: {
    color: colors.secondary.dark,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  bookImage: {
    width: '100%',
    height: 100,
    borderRadius: 20,
    marginBottom: 5,
  },
  imageShadow: shadow.image,
  rotateIcon: {
    marginHorizontal: 15,
  },
  buttonGroup: {
    marginLeft: 15,
  },
  button: {
    padding: 11,
    borderRadius: 50,
  },
  purpleBtn: {
    backgroundColor: colors.primary.dark,
    marginBottom: 15,
  },
  orangeBtn: {
    backgroundColor: colors.secondary.dark,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 30,
    marginBottom: 20,
  },
  modalBoldText: {
    fontSize: 20,
    marginHorizontal: 20,
  },
  textMarginBottom: {
    marginBottom: 20,
  },
});

export default OthersProfile;
