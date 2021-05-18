import React, { useEffect } from 'react';
import { TouchableOpacity, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ButtonGradient from '../Gradients/ButtonGradient';
import PrimaryBold from '../Texts/PrimaryBold';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../global/styles';
import styles from './uploadImage.styles';

const UploadImageBtn = ({ setImage, navigation }) => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        // console.log(status); // "denied" or "granted"
        if (status !== 'granted') {
          navigation.goBack();
        }
      }
    })();
  }, [navigation]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3], // this option is for Android only. iOS is square by default
      quality: 0.25,
      base64: true,
    });

    // console.log(result); // { base64: string, cancelled: boolean, height: number, width: number type: string, uri: string }

    if (!result.cancelled) {
      setImage(result);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <ButtonGradient customStyles={styles.gradient}>
        <View style={styles.wrapper}>
          <PrimaryBold text="Upload image" customStyles={styles.text} />
          <Feather name="upload" size={20} color={colors.white} />
        </View>
      </ButtonGradient>
    </TouchableOpacity>
  );
};

export default UploadImageBtn;
