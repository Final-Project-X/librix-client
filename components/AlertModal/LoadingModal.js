import React, { useEffect } from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import { useSelector } from 'react-redux';
import { colors } from '../../global/styles';
import styles from './styles';

const LoadingModal = ({ showModal, setShowModal }) => {
  console.log('loading ==>', showModal);
  const error = useSelector((state) => state.error.error);

  useEffect(() => {
    if (error.message) {
      setShowModal(false);
    }
  }, [error, setShowModal]);

  return (
    <Modal visible={showModal} transparent={true}>
      <View style={[styles.container, customStyles.backgroundPurple]}>
        <Feather
          name="loader"
          size={30}
          color={colors.white}
          style={styles.icon}
        />
        <PrimaryBold
          text="Loading..."
          customStyles={customStyles.loadingText}
        />
      </View>
    </Modal>
  );
};

const customStyles = StyleSheet.create({
  backgroundPurple: {
    backgroundColor: colors.primary.dark,
    opacity: 0.7,
  },
  loadingText: {
    fontSize: 24,
    color: colors.white,
    letterSpacing: 0.5,
  },
});

export default LoadingModal;
