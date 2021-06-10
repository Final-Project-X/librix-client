import React, { useEffect } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { logOutUser } from '../../redux/actions/userActions';
import { useDispatch } from 'react-redux';
import PrimaryBold from '../../components/Texts/PrimaryBold';
import { colors } from '../../global/styles';

const LogOut = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logOutUser());
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <PrimaryBold text="Logging out ..." customStyles={styles.text} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.primary.dark,
  },
});

export default LogOut;
