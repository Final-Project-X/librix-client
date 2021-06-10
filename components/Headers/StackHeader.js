import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import PrimaryMedium from '../Texts/PrimaryMedium';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../global/styles';

const StackHeader = ({ navigation, text, customStyles }) => {
  return (
    <SafeAreaView style={[styles.header, customStyles]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={26} color={colors.primary.dark} />
      </TouchableOpacity>
      <PrimaryMedium text={text} customStyles={styles.text} numberOfLines={1} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: colors.neutralBackground,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default StackHeader;
