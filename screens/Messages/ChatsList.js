import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import PrimaryText from '../../components/Texts/PrimaryText';
import PrimaryMedium from '../../components/Texts/PrimaryMedium';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import { useDispatch, useSelector } from 'react-redux';
import { getMatches } from '../../redux/actions/matchesActions';
import Icon from '../../assets/adaptive-icon.png';
import { colors } from '../../global/styles';
import { color } from 'react-native-reanimated';

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
        _id: 'audreeeeyyy',
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
        _id: 'lisa',
      },
    },
    chat: [
      {
        sender: { _id: 'lisa' },
        message: 'Hey, good book! We deal?',
        timeSent: 1257895365856,
      },
      {
        sender: { _id: 'audreeeeyyy' },
        message: "Hi there, I like what you have. Let's do this!",
        timeSent: 125785687455222,
      },
    ],
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
  {
    _id: '60a763235ff68c2c15fe2d2d',
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
  {
    _id: '60a763235ff68c2c15fe2d2e',
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
  {
    _id: '60a763235ff68c2c15fe2d2f',
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
  {
    _id: '60a763235ff68c2c15fe2d2g',
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
  {
    _id: '60a763235ff68c2c15fe2d2h',
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
  {
    _id: '60a763235ff68c2c15fe2d2j',
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
  {
    _id: '60a763235ff68c2c15fe2d2k',
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

const ChatCard = ({ navigation, match }) => {
  const { bookOne, bookTwo, chat } = match;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Conversation', {
          chat,
          userOne: bookOne.owner._id,
          userTwo: bookTwo.owner._id,
        })
      }
    >
      <View style={styles.chatCard}>
        <View style={styles.imageGroup}>
          <Image
            style={styles.image}
            source={
              bookOne.selectedFiles[0]
                ? { uri: bookOne.selectedFiles[0] }
                : Icon
            }
          />
          <Image
            style={[styles.image, styles.interestedBookImage]}
            source={
              bookTwo.selectedFiles[0]
                ? { uri: bookTwo.selectedFiles[0] }
                : Icon
            }
          />
        </View>
        <View style={styles.textGroup}>
          <PrimaryMedium
            text={bookTwo.owner.username}
            customStyles={[styles.bookOwner, styles.margBo5]}
          />
          <PrimaryBold
            text={bookTwo.title}
            customStyles={[styles.bookTitle, styles.margBo5]}
            numberOfLines={1}
          />
          <PrimaryBold
            text={bookOne.title}
            customStyles={styles.bookTitle}
            numberOfLines={1}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ChatsList = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user.user);

  //   useEffect(() => {
  //     dispatch(getMatches(user._id));
  //   }, [dispatch, user]);
  return (
    <ScreenGradient customStyles={styles.container}>
      <FlatList
        data={SAMPLE_MATCHES_OBJECT}
        renderItem={({ item }) =>
          item.chat.length > 0 && (
            <ChatCard match={item} navigation={navigation} />
          )
        }
        keyExtractor={(item) => item._id}
      />
    </ScreenGradient>
  );
};

const styles = StyleSheet.create({
  margBo5: {
    marginBottom: 5,
  },
  container: {
    padding: 15,
  },
  chatCard: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    backgroundColor: colors.white,
    borderRadius: 25,
  },
  imageGroup: {
    marginRight: 10,
    width: 75,
    alignItems: 'flex-end',
  },
  image: {
    width: 50,
    height: 50,
    borderColor: colors.secondary.dark,
    borderWidth: 1,
    borderRadius: 50,
  },
  interestedBookImage: {
    position: 'absolute',
    top: 25,
    right: 25,
    borderColor: colors.primary.dark,
  },
  textGroup: {
    width: '80%',
    paddingRight: 20,
  },
  bookOwner: {
    fontSize: 15,
    textTransform: 'uppercase',
  },
  bookTitle: {
    fontSize: 16,
  },
});

export default ChatsList;
