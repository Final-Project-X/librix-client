import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const Modals = ({ isVisible, setIsVisible, textValue, buttonValue }) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(!isVisible);
        }}
      >
        <View style={styles.mainModal}>
          <View style={styles.main}>
            <Ionicons name="alert-circle-outline" size={24} color="#be53ea" />
            <Text style={styles.text}>{textValue}</Text>
            <Text>Are you sure?</Text>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={[styles.button, styles.buttonN]}
                onPress={() => setIsVisible(!isVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setIsVisible(!isVisible)}
              >
                <Text style={styles.textStyle}>{buttonValue}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Modals;

//! To use this component: add state Modals and props, and setIsVisible to true onPress

//For Reserve your book
// const [isVisible, setIsVisible] = useState(false);
// textValue={`You are about to mark this book as reserved. The book will disappear from the pool and will no longer be available to other users`}
// buttonValue={`Reserve`}

//For Confirm the receipt
// textValue={`You are about to mark the deal as completed. The match will disappear and your book will also be removed from the database`}
// buttonValue={`Complete deal`}

//   <Modals
//         isVisible={isVisible}
//         setIsVisible={setIsVisible}
//         textValue={`You are about to delete the match. The match will disappear, the
//         communication regarding it will be closed and the messages will be
//         deleted.`}
//         buttonValue={'Delete'}
//       />
{
  /* <Button onPress={() => setIsVisible(true)} title="Delete the Match" /> */
}
