import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import SavedBookList from '../../components/BookCards/SavedBookList';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import ButtonGradient from '../../components/Gradients/ButtonGradient';
import styles from './styles';

const booksSaved = [
  {
    authors: ['Robert Dimery'],
    category: ['Popular music'],
    language: 'English',
    condition: 'average',
    selectedFiles:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ1xebBiuWpBBbsBEovQfm0ilY9ex_ejvHCbhhCpHuzEdNUvNvf6ITitqjrHSnalVXwVHEgYfIGwE3UjM3QYKrQe8xL78Ru&usqp=CAE',
    reserved: false,
    interestedUsers: [],
    _id: '609a81d8be7697a885774541',
    city: 'berlin',
    title: 'One Thousand and One Albums You Must Hear Before You Die',
    description:
      'What did Time magazine consider the twentieth-century’s greatest album? Which anthem by Prince was an attempt to emulate Bob Seger? And what links Count Basie and Batman? If you thought you knew your music, then think again. 1001Albums You Must Hear Before You Die, is totally revised and fully updated for 2013, and is the definitive guide to accompany your interest in music. Written by top UK and US music journalists, and includes a preface by Michael Lydon, the founding editor of the Rolling Stone magazine. It celebrates the great and ground-breaking albums throughout the eras - from the genesis of Fifties rock ‘n’ roll to the technological and electronic innovations of the 2000s. Each entry includes key tracks and explains exactly why each of these albums deserved to be included in the list, offering an insight into the process of their creation, development, and success. With albums from Elvis Presley, Frank Sinatra, Miles Davis, The Rolling Stones, Bob Dylan, The Sex Pistols, ACDC, Ray Price, the Beach Boys, Sonic Youth, P J Harvey, Jack White, Green Day, Christina Aguilera, and the latest from David Bowie, as well as new cutting-edge entries such as Kendrick Lamar and Django Django, 1001 Albums You Must Hear Before You Die covers all the works that have formed part of the soundtracks to all our lives, at one point or another. Illustrated with more than 900 iconic images of album covers, bands and artists, as well as photographs from many legendary gigs, 1001 Albums You Must Hear Before You Die, covers from the 1950s to the present and is the single most comprehensive list of music that changed the world, an absolute must-have for all the musically inspired.',
    publishedDate: 2013,
    pages: 960,
    shape: 'as good as new',
    owner: '609a81d7be7697a88577453e',
  },
  {
    authors: ['Marcus Hünnebeck'],
    category: ['Drama'],
    language: 'English',
    condition: 'average',
    selectedFiles: 'https://m.media-amazon.com/images/I/51htp+0pH4L.jpg',
    reserved: false,
    interestedUsers: ['609a81d7be7697a88577453c'],
    _id: '609a81d8be7697a885774542',
    city: 'berlin',
    title: 'Zur Schau gestellt',
    description:
      'Thriller Kindle Ausgabe. und mehr. Sie hat ihren schlimmsten Albtraum gelebt – nun wird er zum Bestseller. Künstler Ruben Reus hat einen begehrten Auftrag ergattert: Er darf auf einem Kreuzfahrtschiff aus dem neuen Bestseller eines bekannten Autors lesen.',
    subtitle: 'Thriller',
    publishedDate: 2021,
    shape: 'as good as new',
    owner: '609a81d7be7697a88577453c',
  },
  {
    authors: ['Suzy Toronto'],
    category: ['Self-Help'],
    language: 'English',
    condition: 'good',
    publishedDate: 1999,
    selectedFiles:
      'https://images-na.ssl-images-amazon.com/images/I/61-8-hLsi3L._SX355_BO1,204,203,200_.jpg',
    reserved: false,
    interestedUsers: ['609a81d7be7697a88577453d'],
    _id: '609a81d9be7697a885774543',
    city: 'berlin',
    title:
      'Life Is Short Buy the Boots and Other Wonderful Wacky Words of Wisdom',
    description:
      'Author, artist Suzy Toronto believes life is a journey that’s meant to be enjoyed -- and there’s no better way to travel to wherever life takes you than in a rockin’ hot pair of boots! Suzy’s wacky words of advice and wisdom will have you kicking up your heels and dancing the do-si-do, stop worrying about every little thing, and focusing instead on what is truly important. Life is filled with uncertainty, and sometimes you just have to jump in, even if it means getting your boots a little dirty. So... dream big, live it up, shine bright like the person you know you are, and for heaven’s sake, go ahead and buy that pair of boots you’ve had your eye on.',
    pages: 44,
    shape: 'as good as new',
    owner: '609a81d7be7697a88577453e',
  },
  {
    authors: ['Robert Dimery'],
    category: ['Popular music'],
    language: 'English',
    condition: 'average',
    selectedFiles:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ1xebBiuWpBBbsBEovQfm0ilY9ex_ejvHCbhhCpHuzEdNUvNvf6ITitqjrHSnalVXwVHEgYfIGwE3UjM3QYKrQe8xL78Ru&usqp=CAE',
    reserved: false,
    interestedUsers: [],
    _id: '609a81d8be7697a88577453321',
    city: 'berlin',
    title: 'One Thousand and One Albums You Must Hear Before You Die',
    description:
      'What did Time magazine consider the twentieth-century’s greatest album? Which anthem by Prince was an attempt to emulate Bob Seger? And what links Count Basie and Batman? If you thought you knew your music, then think again. 1001Albums You Must Hear Before You Die, is totally revised and fully updated for 2013, and is the definitive guide to accompany your interest in music. Written by top UK and US music journalists, and includes a preface by Michael Lydon, the founding editor of the Rolling Stone magazine. It celebrates the great and ground-breaking albums throughout the eras - from the genesis of Fifties rock ‘n’ roll to the technological and electronic innovations of the 2000s. Each entry includes key tracks and explains exactly why each of these albums deserved to be included in the list, offering an insight into the process of their creation, development, and success. With albums from Elvis Presley, Frank Sinatra, Miles Davis, The Rolling Stones, Bob Dylan, The Sex Pistols, ACDC, Ray Price, the Beach Boys, Sonic Youth, P J Harvey, Jack White, Green Day, Christina Aguilera, and the latest from David Bowie, as well as new cutting-edge entries such as Kendrick Lamar and Django Django, 1001 Albums You Must Hear Before You Die covers all the works that have formed part of the soundtracks to all our lives, at one point or another. Illustrated with more than 900 iconic images of album covers, bands and artists, as well as photographs from many legendary gigs, 1001 Albums You Must Hear Before You Die, covers from the 1950s to the present and is the single most comprehensive list of music that changed the world, an absolute must-have for all the musically inspired.',
    publishedDate: 2013,
    pages: 960,
    shape: 'as good as new',
    owner: '609a81d7be7697a88577453e',
  },
];

const SavedBooks = ({ navigation }) => {
  const [books, setBooks] = useState(booksSaved);

  return (
    <ScreenGradient>
      <PrimaryBold text={'Books you saved'} customStyles={styles.title} />
      {books?.length < 1 ? (
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
            data={books}
            renderItem={({ item }) => (
              <SavedBookList
                item={item}
                setBooks={setBooks}
                books={books}
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
