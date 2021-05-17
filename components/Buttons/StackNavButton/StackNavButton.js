import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

const SubmitButton = ({ navigation, title, toComponent }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(toComponent)}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SubmitButton;
