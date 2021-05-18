import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : userToken ? (
        <MainStack />
      ) : (
        <AuthStack />
      )}
    </>
  );
}
