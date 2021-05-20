import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Alert } from 'react-native';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import Input from '../../components/Inputs/Input';
import SubmitButton from '../../components/Buttons/SubmitButton';
import PrimaryText from '../../components/Texts/PrimaryText';
import styles from './styles';
import { colors } from '../../global/styles';

const SignUpScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors: inputErrors },
  } = useForm();

  const [errors, setErrors] = useState({});

  const onSubmit = (values) => console.log(values);

  const showCityInfo = () => {
    Alert.alert(
      'Why should I submit city?',
      'Defining your location will set a default search area for books in your pool. If you do not wish to set a search area right now, you can leave this field empty.',
      { text: 'OK' },
    );
  };

  const password = useWatch({ control, name: 'password' });

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  return (
    <SafeAreaView style={styles.container}>
      <ScreenGradient>
        <View style={styles.form}>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                setErrors={setErrors}
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
                setErrors={setErrors}
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
                  setErrors={setErrors}
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
                setErrors={setErrors}
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
                setErrors={setErrors}
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
            errors={inputErrors}
            setErrors={setErrors}
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
        </View>
      </ScreenGradient>
    </SafeAreaView>
  );
};

export default SignUpScreen;
