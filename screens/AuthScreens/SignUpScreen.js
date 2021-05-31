import React from 'react';
import {
  Platform,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import Input from '../../components/Inputs/Input';
import SubmitButton from '../../components/Buttons/SubmitButton';
import PrimaryText from '../../components/Texts/PrimaryText';
import styles from './styles';
import { colors } from '../../global/styles';
import { signUpUser } from '../../redux/actions/userActions';
import { useDispatch } from 'react-redux';

const SignUpScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (values) => dispatch(signUpUser(values));

  const showCityInfo = () => {
    Alert.alert(
      'Why should I submit city?',
      'Defining your location will set a default search area for books in your pool.',
      { text: 'OK' },
    );
  };

  const password = useWatch({ control, name: 'password' });

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const PWD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

  return (
    <SafeAreaView style={styles.container}>
      <ScreenGradient>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            style={styles.form}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  customStyles={styles.input}
                  onChange={onChange}
                  value={value}
                  keyboardType="email-address"
                  placeholder="Your email"
                  control={control}
                />
              )}
              name="email"
              rules={{
                required: {
                  value: true,
                  message: 'Email is required',
                },
                maxLength: {
                  value: 50,
                  message: 'Email address is too long, max. 50 characters',
                },
                pattern: {
                  value: EMAIL_REGEX,
                  message: 'Email address does not exist',
                },
              }}
              defaultValue=""
            />
            <PrimaryText
              text={errors.email && errors.email.message}
              customStyles={styles.inputError}
            />

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  customStyles={styles.input}
                  onChange={onChange}
                  value={value}
                  keyboardType="default"
                  placeholder="Username"
                />
              )}
              name="username"
              rules={{
                required: {
                  value: true,
                  message: 'Username is required',
                },
                maxLength: {
                  value: 50,
                  message: 'Username is too long, max. 50 characters',
                },
              }}
              defaultValue=""
            />
            <PrimaryText
              text={errors.username && errors.username.message}
              customStyles={styles.inputError}
            />
            <View style={styles.inputWrapper}>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    customStyles={styles.input}
                    onChange={onChange}
                    value={value}
                    keyboardType="default"
                    placeholder="City"
                  />
                )}
                name="city"
                rules={{
                  required: {
                    value: true,
                    message: 'City is required',
                  },
                  maxLength: {
                    value: 50,
                    message: 'City is too long, max. 50 characters',
                  },
                }}
                defaultValue=""
              />
              <TouchableOpacity style={styles.icon} onPress={showCityInfo}>
                <Feather name="info" size={18} color={colors.textFaded} />
              </TouchableOpacity>
            </View>
            <PrimaryText
              text={errors.city && errors.city.message}
              customStyles={styles.inputError}
            />
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  customStyles={styles.input}
                  onChange={onChange}
                  value={value}
                  keyboardType="default"
                  placeholder="Password"
                  secureTextEntry
                />
              )}
              name="password"
              rules={{
                required: {
                  value: true,
                  message: 'Password is required',
                },
                maxLength: {
                  value: 50,
                  message: 'Password is too long, max. 50 characters',
                },
                pattern: {
                  value: PWD_REGEX,
                  message:
                    'Password must be min. 8 characters long and include 1 uppercase, 1 lowercase, one number and one special character!',
                },
              }}
              defaultValue=""
            />
            <PrimaryText
              text={errors.password && errors.password.message}
              customStyles={styles.inputError}
            />
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  customStyles={styles.input}
                  onChange={onChange}
                  value={value}
                  keyboardType="default"
                  placeholder="Confirm password"
                  secureTextEntry
                />
              )}
              name="confirmPassword"
              rules={{
                validate: (value) =>
                  value === password || 'Passwords do not match!',
              }}
              defaultValue=""
            />
            <PrimaryText
              text={errors.confirmPassword && errors.confirmPassword.message}
              customStyles={styles.inputError}
            />
            <SubmitButton
              title="Sign up"
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              customStyles={styles.buttonMargin}
            />
            <View style={styles.textWrapper}>
              <PrimaryText
                text="Already have an account?"
                customStyles={styles.text}
              />
              <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                <PrimaryText
                  text="log in"
                  customStyles={[styles.text, styles.toLogin]}
                />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScreenGradient>
    </SafeAreaView>
  );
};

export default SignUpScreen;
