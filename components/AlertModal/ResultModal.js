import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import AlertButton from '../Buttons/AlertButton';
import { colors } from '../../global/styles';
import styles from './styles';

const ResultModal = ({
  showModal,
  dismissModal,
  children,
  buttonText,
  doCleanup, // in case we need to clean any states on Cancel
}) => {
  const hideModal = () => {
    dismissModal();
    doCleanup && doCleanup();
  };
  return (
    <Modal visible={showModal} transparent={true}>
      <View style={styles.container}>
        <Feather
          name="info"
          size={24}
          color={colors.primary.dark}
          style={styles.icon}
        />
        {children}

        <AlertButton
          text={buttonText}
          handlePress={hideModal}
          variant="purple"
          customStyles={customStyles.button}
        />
      </View>
    </Modal>
  );
};

const customStyles = StyleSheet.create({
  button: {
    marginTop: 60,
  },
});

export default ResultModal;
