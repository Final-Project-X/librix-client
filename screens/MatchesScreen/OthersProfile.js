import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, SafeAreaView, FlatList } from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import StackHeader from '../../components/Headers/StackHeader';
import PrimaryText from '../../components/Texts/PrimaryText';
import PrimaryLight from '../../components/Texts/PrimaryLight';
import PrimaryMedium from '../../components/Texts/PrimaryMedium';
import AlertModal from '../../components/AlertModal/AlertModal';
import Icon from '../../assets/favicon.png';
import { helpGetMatchPartner } from '../../utils/apiCalls';
import { useSelector, useDispatch } from 'react-redux';
import { notifyBackendOfDeletedMatch } from './asyncFunctions';
import { deleteMatch } from '../../redux/actions/matchesActions';
import MatchInMatchPartner from '../../components/Matches/MatchInMatchPartner';
import { styles } from './styles';

const OthersProfile = ({ navigation, route, otherUser, userId }) => {
  // const username = 'audreeeyyy';
  const [showModal, setShowModal] = useState(false);
  const [matchIDToDelete, setMatchIDToDelete] = useState();

  const [matchPartner, setMatchPartner] = useState({});

  const otherUserId = route.params.otherUser;

  useEffect(() => {
    const getMatchPartnerInfo = async (matchPartnerID) => {
      try {
        const response = await helpGetMatchPartner(matchPartnerID);
        console.log('response from getMatchPartnerInfo', response);
        setMatchPartner(response);
      } catch (err) {
        console.log(err);
      }
    };

    getMatchPartnerInfo(otherUserId);
  }, [otherUserId]);

  console.log('match partner', matchPartner);
  const user = useSelector((state) => state.user.user);
  // console.log(user);

  const matches = useSelector((state) => state.matches.matches);
  const partnerMatches = matches.filter(
    (match) =>
      match.bookOne.owner === otherUserId ||
      match.bookTwo.owner === otherUserId,
  );

  const dispatch = useDispatch();

  const onDeleteModalPress = () => {
    // delete the match from the user state
    dispatch(deleteMatch(matchIDToDelete, matches));
    // delete the match from the DB
    notifyBackendOfDeletedMatch({ matchID: matchIDToDelete, userID: user._id });

    // hide the modal
    setShowModal(false);
    //? show toast notification OR alert
    console.log(
      `You deleted the match ${matchIDToDelete} on someone else's profile!`,
    );
    // clean up the states
    setMatchIDToDelete(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AlertModal
        showModal={showModal}
        setShowModal={setShowModal}
        whiteButtonText="Stop"
        buttonText="It's over"
        handlePress={onDeleteModalPress}
        doCleanup={() => setMatchIDToDelete(null)}
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
        <StackHeader
          navigation={navigation}
          text={`${matchPartner.username}'s profile`}
        />
        <View style={styles.userCard}>
          <View style={[styles.flexRow, styles.alignCenter]}>
            <View>
              <Image source={Icon} style={styles.avatar} />
              <PrimaryLight text={`${matchPartner.points} points`} />
            </View>
            <View>
              <PrimaryText
                text={matchPartner.username}
                customStyles={[styles.userDataText, styles.username]}
              />
              <PrimaryText
                text={matchPartner.city}
                customStyles={styles.userDataText}
              />
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
          text={`Matches with ${matchPartner.username}`}
          customStyles={styles.listHeader}
          numberOfLines={2}
        />
        <FlatList
          data={partnerMatches}
          renderItem={({ item }) => (
            <MatchInMatchPartner
              matchInfo={item}
              userID={user._id}
              setShowModal={setShowModal}
              navigation={navigation}
              matchIDSetter={setMatchIDToDelete}
            />
          )}
          keyExtractor={(item) => item._id}
          ListFooterComponent={
            partnerMatches?.length && <View style={styles.listFooter} />
          }
        />
      </ScreenGradient>
    </SafeAreaView>
  );
};

export default OthersProfile;
