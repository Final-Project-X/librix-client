import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import Input from '../../components/Inputs/Input';
import SubmitButton from '../../components/Buttons/SubmitButton/SubmitButton';
import styles from './styles';

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
      <LinearGradient
        colors={['#FFFFFF', '#FAA96C']}
        start={[0.2, 0.7]}
        style={styles.gradient}
      >
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

          <Text style={styles.inputError}>
            {errors.email && errors.email.message}
          </Text>

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
          <Text style={styles.inputError}>
            {errors.username && errors.username.message}
          </Text>
          <View style={styles.inputWrapper}>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  setErrors={setErrors}
                  customStyles={[styles.input, styles.inputWithIcon]}
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
            <TouchableOpacity onPress={showCityInfo}>
              <Feather name="info" size={18} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.inputError}>
            {errors.city && errors.city.message}
          </Text>
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
          <Text style={styles.inputError}>
            {errors.password && errors.password.message}
          </Text>
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
          <Text style={styles.inputError}>
            {errors.confirmPassword && errors.confirmPassword.message}
          </Text>
          <SubmitButton
            title="Sign up"
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={inputErrors}
            setErrors={setErrors}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
              <Text style={[styles.text, styles.toLogin]}>log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignUpScreen;
