import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import AuthStack from '../navigation/AuthStack';
import MainStack from '../navigation/MainStack';
import { useSelector } from 'react-redux';

export default function MainRoutes() {
  const [isLoading, setIsLoading] = useState(false);
  const userToken = useSelector((state) => state.token.token);
  console.log('userToken in MainRoutes ==>', userToken);

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
