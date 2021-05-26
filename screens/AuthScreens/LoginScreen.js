import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import Input from '../../components/Inputs/Input';
import SubmitButton from '../../components/Buttons/SubmitButton';
import PrimaryText from '../../components/Texts/PrimaryText';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => console.log(values);

  return (
    <SafeAreaView style={styles.container}>
      <ScreenGradient>
        <View style={styles.form}>
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
                message: 'Username not found',
              },
            }}
            defaultValue=""
          />
          <PrimaryText
            text={errors.username && errors.username.message}
            customStyles={styles.inputError}
          />
          <SubmitButton
            title="Log in"
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            customStyles={styles.buttonMargin}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <PrimaryText
                text="sign up"
                customStyles={[styles.text, styles.toLogin]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScreenGradient>
    </SafeAreaView>
  );
};

export default LoginScreen;
