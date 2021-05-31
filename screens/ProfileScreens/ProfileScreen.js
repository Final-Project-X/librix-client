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
import PrimaryText from '../../components/Texts/PrimaryText';
import PrimaryLight from '../../components/Texts/PrimaryLight';
import PrimaryMedium from '../../components/Texts/PrimaryMedium';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import AlertModal from '../../components/AlertModal/AlertModal';
import { MatchesIconButton } from '../../components/Buttons/IconButtons/MatchesIconButton';
import Icon from '../../assets/favicon.png';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { colors } from '../../global/styles';

const booksToOffer = [
  // {
  //   authors: ['Robert Dimery'],
  //   category: ['Popular music'],
  //   language: 'English',
  //   condition: 'average',
  //   selectedFiles:
  //     'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ1xebBiuWpBBbsBEovQfm0ilY9ex_ejvHCbhhCpHuzEdNUvNvf6ITitqjrHSnalVXwVHEgYfIGwE3UjM3QYKrQe8xL78Ru&usqp=CAE',
  //   reserved: false,
  //   interestedUsers: [],
  //   _id: '609a81d8be7697a885774541',
  //   city: 'berlin',
  //   title: 'One Thousand and One Albums You Must Hear Before You Die',
  //   description:
  //     'What did Time magazine consider the twentieth-century’s greatest album? Which anthem by Prince was an attempt to emulate Bob Seger? And what links Count Basie and Batman? If you thought you knew your music, then think again. 1001Albums You Must Hear Before You Die, is totally revised and fully updated for 2013, and is the definitive guide to accompany your interest in music. Written by top UK and US music journalists, and includes a preface by Michael Lydon, the founding editor of the Rolling Stone magazine. It celebrates the great and ground-breaking albums throughout the eras - from the genesis of Fifties rock ‘n’ roll to the technological and electronic innovations of the 2000s. Each entry includes key tracks and explains exactly why each of these albums deserved to be included in the list, offering an insight into the process of their creation, development, and success. With albums from Elvis Presley, Frank Sinatra, Miles Davis, The Rolling Stones, Bob Dylan, The Sex Pistols, ACDC, Ray Price, the Beach Boys, Sonic Youth, P J Harvey, Jack White, Green Day, Christina Aguilera, and the latest from David Bowie, as well as new cutting-edge entries such as Kendrick Lamar and Django Django, 1001 Albums You Must Hear Before You Die covers all the works that have formed part of the soundtracks to all our lives, at one point or another. Illustrated with more than 900 iconic images of album covers, bands and artists, as well as photographs from many legendary gigs, 1001 Albums You Must Hear Before You Die, covers from the 1950s to the present and is the single most comprehensive list of music that changed the world, an absolute must-have for all the musically inspired.',
  //   publishedDate: 2013,
  //   pages: 960,
  //   shape: 'as good as new',
  //   owner: '609a81d7be7697a88577453e',
  // },
  // {
  //   authors: ['Robert Dimery'],
  //   category: ['Popular music'],
  //   language: 'English',
  //   condition: 'average',
  //   selectedFiles:
  //     'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ1xebBiuWpBBbsBEovQfm0ilY9ex_ejvHCbhhCpHuzEdNUvNvf6ITitqjrHSnalVXwVHEgYfIGwE3UjM3QYKrQe8xL78Ru&usqp=CAE',
  //   reserved: false,
  //   interestedUsers: [],
  //   _id: '609a81d8be7697a885774541',
  //   city: 'berlin',
  //   title: 'One Thousand and One Albums You Must Hear Before You Die',
  //   description:
  //     'What did Time magazine consider the twentieth-century’s greatest album? Which anthem by Prince was an attempt to emulate Bob Seger? And what links Count Basie and Batman? If you thought you knew your music, then think again. 1001Albums You Must Hear Before You Die, is totally revised and fully updated for 2013, and is the definitive guide to accompany your interest in music. Written by top UK and US music journalists, and includes a preface by Michael Lydon, the founding editor of the Rolling Stone magazine. It celebrates the great and ground-breaking albums throughout the eras - from the genesis of Fifties rock ‘n’ roll to the technological and electronic innovations of the 2000s. Each entry includes key tracks and explains exactly why each of these albums deserved to be included in the list, offering an insight into the process of their creation, development, and success. With albums from Elvis Presley, Frank Sinatra, Miles Davis, The Rolling Stones, Bob Dylan, The Sex Pistols, ACDC, Ray Price, the Beach Boys, Sonic Youth, P J Harvey, Jack White, Green Day, Christina Aguilera, and the latest from David Bowie, as well as new cutting-edge entries such as Kendrick Lamar and Django Django, 1001 Albums You Must Hear Before You Die covers all the works that have formed part of the soundtracks to all our lives, at one point or another. Illustrated with more than 900 iconic images of album covers, bands and artists, as well as photographs from many legendary gigs, 1001 Albums You Must Hear Before You Die, covers from the 1950s to the present and is the single most comprehensive list of music that changed the world, an absolute must-have for all the musically inspired.',
  //   publishedDate: 2013,
  //   pages: 960,
  //   shape: 'as good as new',
  //   owner: '609a81d7be7697a88577453e',
  // },
  // {
  //   authors: ['Marcus Hünnebeck'],
  //   category: ['Drama'],
  //   language: 'English',
  //   condition: 'average',
  //   selectedFiles: 'https://m.media-amazon.com/images/I/51htp+0pH4L.jpg',
  //   reserved: false,
  //   interestedUsers: ['609a81d7be7697a88577453c'],
  //   _id: '609a81d8be7697a885774542',
  //   city: 'berlin',
  //   title: 'Zur Schau gestellt',
  //   description:
  //     'Thriller Kindle Ausgabe. und mehr. Sie hat ihren schlimmsten Albtraum gelebt – nun wird er zum Bestseller. Künstler Ruben Reus hat einen begehrten Auftrag ergattert: Er darf auf einem Kreuzfahrtschiff aus dem neuen Bestseller eines bekannten Autors lesen.',
  //   subtitle: 'Thriller',
  //   publishedDate: 2021,
  //   shape: 'as good as new',
  //   owner: '609a81d7be7697a88577453c',
  // },
  // {
  //   authors: ['Suzy Toronto'],
  //   category: ['Self-Help'],
  //   language: 'English',
  //   condition: 'good',
  //   publishedDate: 1999,
  //   selectedFiles:
  //     'https://images-na.ssl-images-amazon.com/images/I/61-8-hLsi3L._SX355_BO1,204,203,200_.jpg',
  //   reserved: false,
  //   interestedUsers: ['609a81d7be7697a88577453d'],
  //   _id: '609a81d9be7697a885774543',
  //   city: 'berlin',
  //   title:
  //     'Life Is Short Buy the Boots and Other Wonderful Wacky Words of Wisdom',
  //   description:
  //     'Author, artist Suzy Toronto believes life is a journey that’s meant to be enjoyed -- and there’s no better way to travel to wherever life takes you than in a rockin’ hot pair of boots! Suzy’s wacky words of advice and wisdom will have you kicking up your heels and dancing the do-si-do, stop worrying about every little thing, and focusing instead on what is truly important. Life is filled with uncertainty, and sometimes you just have to jump in, even if it means getting your boots a little dirty. So... dream big, live it up, shine bright like the person you know you are, and for heaven’s sake, go ahead and buy that pair of boots you’ve had your eye on.',
  //   pages: 44,
  //   shape: 'as good as new',
  //   owner: '609a81d7be7697a88577453e',
  // },
  // {
  //   authors: ['Suzy Toronto'],
  //   category: ['Self-Help'],
  //   language: 'English',
  //   condition: 'good',
  //   publishedDate: 1999,
  //   selectedFiles:
  //     'https://images-na.ssl-images-amazon.com/images/I/61-8-hLsi3L._SX355_BO1,204,203,200_.jpg',
  //   reserved: false,
  //   interestedUsers: ['609a81d7be7697a88577453d'],
  //   _id: '609a81d9be7697a885774543',
  //   city: 'berlin',
  //   title:
  //     'Life Is Short Buy the Boots and Other Wonderful Wacky Words of Wisdom',
  //   description:
  //     'Author, artist Suzy Toronto believes life is a journey that’s meant to be enjoyed -- and there’s no better way to travel to wherever life takes you than in a rockin’ hot pair of boots! Suzy’s wacky words of advice and wisdom will have you kicking up your heels and dancing the do-si-do, stop worrying about every little thing, and focusing instead on what is truly important. Life is filled with uncertainty, and sometimes you just have to jump in, even if it means getting your boots a little dirty. So... dream big, live it up, shine bright like the person you know you are, and for heaven’s sake, go ahead and buy that pair of boots you’ve had your eye on.',
  //   pages: 44,
  //   shape: 'as good as new',
  //   owner: '609a81d7be7697a88577453e',
  // },
];

const BookItem = ({ book, navigation }) => {
  const handlePress = () => {
    navigation.navigate('SingleBook', { item: book });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.listItem, styles.flexRow]}
    >
      <Image source={{ uri: book.selectedFiles }} style={styles.bookImage} />
      <View style={styles.listItemTexts}>
        <PrimaryBold text={book.title} numberOfLines={1} />
        <PrimaryText text={book.authors.join(', ')} numberOfLines={1} />
      </View>
    </TouchableOpacity>
  );
};

const ProfileScreen = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <AlertModal
        showModal={showModal}
        setShowModal={setShowModal}
        buttonText="Delete"
      >
        <PrimaryMedium
          customStyles={[styles.modalText, styles.textMarginBottom]}
          text="All your data will be deleted forever and you will not have access to it"
        />
        <PrimaryMedium
          customStyles={styles.modalText}
          text="Are you sure you want to delete your account?"
        />
      </AlertModal>
      <ScreenGradient customStyles={styles.gradient}>
        <View style={styles.userCard}>
          <View style={styles.flexRow}>
            <View>
              <Image source={Icon} style={styles.avatar} />
              <PrimaryLight text="10 points" />
            </View>
            <View>
              <PrimaryBold
                text="Username"
                customStyles={[styles.userDataText, styles.username]}
              />
              <PrimaryText
                text="user@email.com"
                customStyles={styles.userDataText}
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
        <View style={styles.scrollArea}>
          {booksToOffer.length ? (
            <FlatList
              data={booksToOffer}
              renderItem={(data) => (
                <BookItem book={data.item} navigation={navigation} />
              )}
              keyExtractor={(item, idx) =>
                `${item.title} - ${item.description} ${idx}`
              }
            />
          ) : (
            <PrimaryText
              text="Currently no books to offer"
              customStyles={styles.marginLeft}
            />
          )}
        </View>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={[styles.marginLeft, styles.flexRow]}
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
