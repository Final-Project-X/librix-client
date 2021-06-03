import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigation';

import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

const MainStack = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(
  //     loginUser({
  //       email: 'Citlalli_Cormier@hotmail.com',
  //       password: 'Test123!',
  //     }),
  //   );
  // }, []);

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default MainStack;
