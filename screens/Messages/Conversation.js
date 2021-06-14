import React from 'react';
import { FlatList, StyleSheet, Image, View, SafeAreaView } from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import PrimaryMedium from '../../components/Texts/PrimaryMedium';
import StackHeader from '../../components/Headers/StackHeader';
import Icon from '../../assets/adaptive-icon.png';
import { colors } from '../../global/styles';

const MessageLeft = ({ image, message, customStyles }) => {
  return (
    <View style={styles.messageWrapper}>
      <Image source={image ? { uri: image } : Icon} style={styles.avatar} />
      <View style={[styles.bubble, styles.bubbleLeft]}>
        <PrimaryMedium customStyles={styles.text} text={message} />
      </View>
    </View>
  );
};

const MessageRight = ({ image, message, customStyles }) => {
  return (
    <View style={[styles.messageWrapper, styles.messageWrapperRight]}>
      <View style={[styles.bubble, styles.bubbleRight]}>
        <PrimaryMedium customStyles={styles.text} text={message} />
      </View>
      <Image source={image ? { uri: image } : Icon} style={styles.avatar} />
    </View>
  );
};

const Conversation = ({ navigation, route }) => {
  const { chat, userOne, userTwo } = route.params;
  console.log('route ==>', route);

  return (
    <SafeAreaView style={styles.container}>
      <ScreenGradient customStyles={styles.screenGradient}>
        <StackHeader text="Your conversation" navigation={navigation} />
        <FlatList
          data={chat}
          renderItem={({ item }) => {
            if (item.sender._id === userOne) {
              return (
                <MessageLeft
                  image={item.sender.avatar}
                  message={item.message}
                />
              );
            } else if (item.sender._id === userTwo) {
              return (
                <MessageRight
                  image={item.sender.avatar}
                  message={item.message}
                />
              );
            }
          }}
          keyExtractor={(item) => item.timeSent.toString()}
          inverted={true}
        />
      </ScreenGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenGradient: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  messageWrapper: {
    flexDirection: 'row',
    maxWidth: '75%',
  },
  messageWrapperRight: {
    alignSelf: 'flex-end',
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: 'black',
  },
  bubble: {
    minWidth: 110,
    maxWidth: '90%',
    padding: 15,
    marginBottom: 15,
    borderRadius: 25,
  },
  bubbleLeft: {
    marginLeft: 10,
    backgroundColor: colors.primary.light,
  },
  bubbleRight: {
    marginRight: 10,
    backgroundColor: colors.secondary.dark,
  },
  text: {
    fontSize: 16,
  },
});

export default Conversation;
