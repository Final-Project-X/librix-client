import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import SwipingBook from '../../components/BookCards/SwipingBook';
import { colors } from '../../global/styles';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import { Feather } from '@expo/vector-icons';
// const books = async () => {
// const response = await getBooks()
// return data
// };

//books array here is just for testing
const books = [
  {
    authors: ['Robert Dimery'],
    category: ['Popular music'],
    language: 'English',
    condition: 'good',
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
    condition: 'new',
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
    language: 'English',
  },
  {
    authors: ['Suzy Toronto'],
    category: ['Self-Help'],
    publishedDate: 1998,
    condition: 'good',
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
    authors: ['Roman Mars', 'Kurt Kohlstedt'],
    category: ['Crime'],
    condition: 'acceptable',
    selectedFiles: 'https://bilder.buecher.de/produkte/58/58726/58726418n.jpg',
    reserved: false,
    interestedUsers: ['609a81d7be7697a88577453e'],
    _id: '609a81dabe7697a885774544',
    city: 'berlin',
    title: 'The 99% Invisible City',
    subtitle: 'A Field Guide to the Wonders of the Modern Metropolis',
    description:
      '99% Invisible’ is a big-ideas podcast about small-seeming things, revealing stories baked into the buildings we inhabit, the streets we drive, and the sidewalks we traverse. The show celebrates design and architecture in all of its functional glory and accidental absurdity, with intriguing tales of both designers and the people impacted by their designs.00Now, in ‘The 99% Invisible City: A Field Guide to Hidden World of Everyday Design’, host Roman Mars and coauthor Kurt Kohlstedt zoom in on the various elements that make our cities work, exploring the origins and other fascinating stories behind everything from power grids and fire escapes to drinking fountains and street signs. With deeply researched entries and beautiful line drawings throughout, The 99% Invisible City will captivate devoted fans of the show and anyone curious about design, urban environments, and the unsung marvels of the world around them.',
    pages: 288,
    publishedDate: 1997,
    shape: 'as good as new',
    owner: '609a81d7be7697a88577453e',
    language: 'English',
  },
  {
    authors: ['Jojo Moyes'],
    category: ['Romance'],
    publishedDate: 2010,
    language: 'English',
    condition: 'new',
    selectedFiles:
      'https://upload.wikimedia.org/wikipedia/en/f/fd/Me_Before_You_%28film%29.jpg',
    title: 'Me Before You',
    subtitle: 'A Field Guide to the Wonders of the Modern Metropolis',
    description:
      'They had nothing in common until love gave them everything to lose.',
  },
  {
    authors: ['	Bernard Cornwell'],
    language: 'English',
    publishedDate: 2010,
    category: ['Romance'],
    condition: 'good',
    selectedFiles:
      'https://images2.medimops.eu/product/5fbfff/M00446520942-large.jpg',
    title: 'Selling the Invisible: A Field Guide to Modern Marketing',
    subtitle: 'A Field Guide to the Wonders of the Modern Metropolis',
    description:
      'SELLING THE INVISIBLE is a succinct and often entertaining look at the unique characteristics of services and their prospects, and how any service, from a home-based consultancy to a multinational brokerage, can turn more prospects into clients and keep them.',
  },
];

const Books = ({ navigation }) => {
  const [likedBooks, setLikedBooks] = useState([]);
  const [savedBooks, setSavedBooks] = useState([]);

  const handleYes = ({ book }) => {
    setLikedBooks([...likedBooks, book]);
  };

  const handleSave = ({ book }) => {
    setSavedBooks([...savedBooks, book]);
  };

  const handleNope = ({ book }) => {
    return books.filter((item) => item.title !== book?.title);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenGradient>
        <Swiper
          cards={books}
          cardIndex={0}
          renderCard={(book) => (
            <SwipingBook item={book} navigation={navigation} />
          )}
          onSwipedLeft={(book) => handleNope(book)}
          onSwipedBottom={(book) => handleSave(book)}
          onSwipedRight={(book) => handleYes(book)}
          disableTopSwipe
          overlayLabelsOpacity
          infinite
          backgroundColor={'transparent'}
          overlayLabels={{
            left: {
              title: (
                <Feather
                  name="x-circle"
                  size={50}
                  color={colors.error}
                  backgroundColor={colors.green}
                />
              ),
              style: {
                wrapper: {
                  alignItems: 'flex-end',
                  marginTop: 20,
                  marginLeft: 20,
                  elevation: 4,
                },
              },
            },
            right: {
              title: <Feather name="check-circle" size={50} color="green" />,
              style: {
                wrapper: {
                  alignItems: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20,
                  elevation: 4,
                },
              },
            },
            bottom: {
              title: (
                <Feather
                  name="bookmark"
                  size={50}
                  color={colors.secondary.dark}
                />
              ),
              style: {
                wrapper: {
                  alignItems: 'center',
                  marginTop: -80,
                  elevation: 4,
                },
              },
            },
          }}
        />
      </ScreenGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Books;
