import React, { useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import PrimaryText from '../../components/Texts/PrimaryText';
import PrimaryLight from '../../components/Texts/PrimaryLight';
import PrimaryMedium from '../../components/Texts/PrimaryMedium';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import AlertModal from '../../components/AlertModal/AlertModal';
import Icon from '../../assets/favicon.png';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { colors } from '../../global/styles';

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

const Match = ({ matchInfo, username, setShowModal }) => {
  const { bookOne, bookTwo } = matchInfo;
  const leftHandBook = bookOne.owner.username === username ? bookOne : bookTwo;
  const rightHandBook = bookOne.owner.username === username ? bookTwo : bookOne;
  return (
    <View style={styles.flexRow}>
      <View style={styles.bookCard}>
        <View style={styles.nameLabel}>
          <PrimaryBold customStyles={styles.nameLabelText} text="You" />
        </View>
        <Image
          style={[styles.image, styles.imageShadow]}
          source={
            leftHandBook.selectedFiles.length > 0
              ? { uri: leftHandBook.selectedFiles[0] }
              : Icon
          }
        />
        <PrimaryText
          customStyles={styles.bookTitle}
          text={leftHandBook.title}
          numberOfLines={2}
        />
        <PrimaryText
          customStyles={styles.bookAuthor}
          text={leftHandBook.authors[0]}
          numberOfLines={1}
        />
      </View>
      <View style={styles.bookCard}>
        <View style={styles.nameLabel}>
          <PrimaryBold
            customStyles={styles.nameLabelText}
            text={rightHandBook.owner.username}
          />
        </View>
        <Image
          style={[styles.image, styles.imageShadow]}
          source={
            rightHandBook.selectedFiles.length > 0
              ? { uri: rightHandBook.selectedFiles[0] }
              : Icon
          }
        />
        <PrimaryText
          customStyles={styles.bookTitle}
          text={rightHandBook.title}
          numberOfLines={2}
        />
        <PrimaryText
          customStyles={styles.bookAuthor}
          text={rightHandBook.authors[0]}
          numberOfLines={1}
        />
      </View>
      <View>
        <TouchableOpacity>
          <Feather name="message-circle" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="trash" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const OthersProfile = () => {
  const username = 'audreeeyyy';
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <AlertModal
        showModal={showModal}
        setShowModal={setShowModal}
        buttonText="It's over"
      >
        <PrimaryMedium text="You want to cut the connection?" />
        <PrimaryText text="Thats' ok." />
        <PrimaryText text="Pressing the purple button will make every word regarding this relationship disappear." />
        <PrimaryText text="Clean breakup — no bull***" />
      </AlertModal>
      <ScreenGradient customStyles={styles.gradient}>
        <View style={styles.userCard}>
          <View style={styles.flexRow}>
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
        <FlatList
          data={SAMPLE_MATCHES_OBJECT}
          renderItem={({ item }) => (
            <Match
              matchInfo={item}
              username={username}
              setShowModal={setShowModal}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      </ScreenGradient>
    </SafeAreaView>
  );
};

export default OthersProfile;
