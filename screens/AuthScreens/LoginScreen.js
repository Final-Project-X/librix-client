import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import Input from '../../components/Inputs/Input';
import SubmitButton from '../../components/Buttons/SubmitButton';
import UploadImageBtn from '../../components/Buttons/UploadImageBtn';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors: inputErrors },
  } = useForm();

  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(null);

  const onSubmit = (values) => console.log(values);

  return (
    <SafeAreaView style={styles.container}>
      <ScreenGradient>
        <View style={styles.form}>
          <UploadImageBtn setImage={setImage} navigation={navigation} />
          {image && (
            <Image
              source={{ uri: image.uri }}
              style={{ width: 200, height: 200 }}
            />
          )}
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
                message: 'Username not found',
              },
            }}
            defaultValue=""
          />
          <Text style={styles.inputError}>
            {errors.username && errors.username.message}
          </Text>

          <SubmitButton
            title="Log in"
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={inputErrors}
            setErrors={setErrors}
            customStyles={styles.buttonMargin}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Don't have an account yet?</Text>
            <TouchableOpacity>
              <Text
                onPress={() => navigation.navigate('SignUp')}
                style={[styles.text, styles.toLogin]}
              >
                sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScreenGradient>
    </SafeAreaView>
  );
};

export default LoginScreen;
