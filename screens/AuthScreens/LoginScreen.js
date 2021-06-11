import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import Input from '../../components/Inputs/Input';
import SubmitButton from '../../components/Buttons/SubmitButton';
import PrimaryText from '../../components/Texts/PrimaryText';
import styles from './styles';
import { loginUser } from '../../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

const LoginScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (values) => dispatch(loginUser(values));

  const error = useSelector((state) => state.error.error);

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
                  message: 'Email address does not exist',
                },
              }}
              defaultValue=""
            />
            <PrimaryText
              text={
                errors.email
                  ? errors.email.message
                  : error.message && 'Invalid email or password!'
              }
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
                  message: 'Invalid password',
                },
              }}
              defaultValue=""
            />
            <PrimaryText
              text={errors.password && errors.password.message}
              customStyles={styles.inputError}
            />
            <SubmitButton
              title="Log in"
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              customStyles={styles.buttonMargin}
            />
            <View style={styles.textWrapper}>
              <PrimaryText
                text="Don't have an account yet?"
                customStyles={styles.text}
              />
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <PrimaryText
                  text="sign up"
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

export default LoginScreen;
