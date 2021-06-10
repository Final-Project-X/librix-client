import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Text, View } from 'react-native';
import store from './redux/store';
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';
import { useSelector } from 'react-redux';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const userToken = useSelector((state) => state.token.token);
  // const [userToken, setUserToken] = useState('123');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      {isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : userToken ? (
        <MainStack />
      ) : (
        <AuthStack />
      )}
    </Provider>
  );
}
