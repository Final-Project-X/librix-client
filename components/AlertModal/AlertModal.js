import React from 'react';
import { View, Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import AlertButton from '../Buttons/AlertButton';
import { colors } from '../../global/styles';
import styles from './styles';

const AlertModal = ({
  showModal,
  setShowModal,
  children,
  buttonText,
  handlePress,
  doCleanup, // in case we need to clean any states on Cancel
}) => {
  const hideModal = () => {
    setShowModal(false);
    doCleanup && doCleanup();
  };
  return (
    <Modal visible={showModal} transparent={true}>
      <View style={styles.container}>
        <Feather
          name="alert-circle"
          size={24}
          color={colors.primary.dark}
          style={styles.icon}
        />
        {children}
        <View style={styles.buttonGroup}>
          <AlertButton text="Cancel" variant="white" handlePress={hideModal} />
          <AlertButton
            text={buttonText}
            handlePress={handlePress}
            variant="purple"
          />
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
