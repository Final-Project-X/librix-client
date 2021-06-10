import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import PrimaryHeader from '../../components/Headers/PrimaryHeader';
import SubmitButton from '../../components/Buttons/SubmitButton';
import PrimaryText from '../../components/Texts/PrimaryText';
import PrimaryMedium from '../../components/Texts/PrimaryMedium';
import Input from '../../components/Inputs/Input';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { updateUser } from '../../redux/actions/userActions';
import { colors } from '../../global/styles';
import styles from './styles';

const EditProfile = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const userToken = useSelector((state) => state.token.token);

  const onSubmit = (values) => {
    const data = {
      username: values.username ? values.username : user.username,
      city: values.city ? values.city : user.city,
      aboutMe: values.aboutMe,
    };
    dispatch(updateUser({ userID: user._id, ...data }, userToken));
    navigation.navigate('Profile');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <PrimaryHeader
        text="Edit your profile"
        navigation={navigation}
        customStyles={customStyles.headerMarginTop}
      />
      <ScreenGradient style={styles.gradient}>
        <ScrollView style={styles.container}>
          <View style={customStyles.form}>
            <View style={styles.flexRow}>
              <Feather
                name="user"
                size={24}
                color={colors.black}
                style={customStyles.inputIcon}
              />
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    onChange={onChange}
                    value={value}
                    placeholder={user.username}
                    control={control}
                    customStyles={[customStyles.input, customStyles.font16]}
                  />
                )}
                name="username"
                rules={{
                  maxLength: {
                    value: 50,
                    message: 'Username too long, max. 50 characters',
                  },
                }}
                defaultValue=""
              />
            </View>
            <PrimaryText
              text={errors.username && errors.username.message}
              customStyles={customStyles.inputError}
            />
            <View style={styles.flexRow}>
              <Feather
                name="map-pin"
                size={24}
                color={colors.black}
                style={customStyles.inputIcon}
              />
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    onChange={onChange}
                    value={value}
                    placeholder={user.city}
                    control={control}
                    customStyles={[customStyles.input, customStyles.font16]}
                  />
                )}
                name="city"
                rules={{
                  maxLength: {
                    value: 50,
                    message: 'City does not exist',
                  },
                }}
                defaultValue=""
              />
            </View>
            <PrimaryText
              text={errors.city && errors.city.message}
              customStyles={customStyles.inputError}
            />
            <PrimaryMedium
              text="Tell a little about yourself"
              customStyles={[customStyles.textAreaLabel, customStyles.font16]}
            />
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  onChange={onChange}
                  value={value}
                  control={control}
                  multiline={true}
                  customStyles={[customStyles.textArea, customStyles.font16]}
                />
              )}
              name="aboutMe"
              rules={{
                maxLength: {
                  value: 300,
                  message: 'Max. 300 characters',
                },
              }}
              defaultValue={user.aboutMe}
            />
            <PrimaryText
              text={errors.about && errors.about.message}
              customStyles={customStyles.inputError}
            />
          </View>
          <SubmitButton
            title="Save changes"
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            customStyles={customStyles.button}
          />
        </ScrollView>
      </ScreenGradient>
    </KeyboardAvoidingView>
  );
};

const customStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  font16: {
    fontSize: 16,
  },
  headerMarginTop: {
    marginTop: 30,
  },
  form: {
    backgroundColor: colors.white,
    margin: 20,
    padding: 20,
    paddingTop: 90,
    borderRadius: 25,
  },
  inputIcon: {
    marginLeft: 10,
  },
  input: {
    borderBottomWidth: 2,
    flexShrink: 1,
    marginHorizontal: 10,
    marginBottom: 15,
    paddingBottom: 5,
    borderRadius: 0,
  },
  textAreaLabel: {
    marginVertical: 10,
    marginLeft: 20,
  },
  textArea: {
    width: 290,
    height: 170,
    padding: 15,
    paddingTop: 15,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 7,
  },
  inputError: {
    color: colors.error,
  },
  button: {
    width: 270,
    alignSelf: 'center',
    marginTop: 15,
  },
});

export default EditProfile;
