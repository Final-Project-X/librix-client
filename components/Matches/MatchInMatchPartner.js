import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import Icon from '../../assets/favicon.png';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../global/styles';
import { matchPartnerMatchStyles } from './styles';

const MatchInMatchPartner = ({
  matchInfo,
  userID,
  setShowModal,
  navigation,
  matchIDSetter,
}) => {
  const { bookOne, bookTwo } = matchInfo;
  const leftHandBook = bookOne.owner === userID ? bookOne : bookTwo;
  const rightHandBook = bookOne.owner === userID ? bookTwo : bookOne;

  const deleteButtonHandler = () => {
    setShowModal(true);
    matchIDSetter(matchInfo._id);
  };

  return (
    <View
      style={[matchPartnerMatchStyles.flexRow, matchPartnerMatchStyles.match]}
    >
      <View style={matchPartnerMatchStyles.bookCard}>
        <View style={matchPartnerMatchStyles.nameLabel}>
          <PrimaryBold
            customStyles={matchPartnerMatchStyles.nameLabelText}
            text="You"
          />
        </View>
        <View style={matchPartnerMatchStyles.imageShadow}>
          <Image
            style={[
              matchPartnerMatchStyles.bookImage,
              matchPartnerMatchStyles.imageShadow,
            ]}
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
        style={matchPartnerMatchStyles.rotateIcon}
      />
      <View style={matchPartnerMatchStyles.bookCard}>
        {/* <View style={matchPartnerMatchStyles.nameLabel}>
          <PrimaryBold
            customStyles={matchPartnerMatchStyles.nameLabelText}
            text={rightHandBook.owner.username}
            numberOfLines={1}
          />
        </View> */}
        <View style={matchPartnerMatchStyles.imageShadow}>
          <Image
            style={[
              matchPartnerMatchStyles.bookImage,
              matchPartnerMatchStyles.imageShadow,
            ]}
            source={
              rightHandBook.selectedFiles.length > 0
                ? { uri: rightHandBook.selectedFiles[0] }
                : Icon
            }
          />
        </View>
        <PrimaryBold text={rightHandBook.title} numberOfLines={2} />
      </View>
      <View style={matchPartnerMatchStyles.buttonGroup}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Matches')}
          style={[
            matchPartnerMatchStyles.button,
            matchPartnerMatchStyles.purpleBtn,
          ]}
        >
          <Feather name="message-circle" size={16} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={deleteButtonHandler}
          style={[
            matchPartnerMatchStyles.button,
            matchPartnerMatchStyles.orangeBtn,
          ]}
        >
          <Feather name="trash" size={16} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MatchInMatchPartner;
