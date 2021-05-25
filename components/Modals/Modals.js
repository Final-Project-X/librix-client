import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { colors } from '../../global/styles';
import PrimaryText from '../../components/Texts/PrimaryText';

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
            <Feather
              name="alert-circle"
              size={24}
              color={colors.secondary.dark}
            />
            <PrimaryText text={textValue} customStyles={styles.text} />
            <PrimaryText text="Are you sure?" />
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
                <PrimaryText text={buttonValue} style={styles.textStyle} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Modals;
