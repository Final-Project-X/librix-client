import React from 'react';
import { SafeAreaView } from 'react-native';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import { HeaderIconButton } from '../../components/Buttons/IconButtons';
import Match from '../../components/Matches/Match';
import { colors } from '../../global/styles';
import { MenuProvider } from 'react-native-popup-menu';

const Matches = ({ navigation }) => {
  return (
    <MenuProvider>
      <ScreenGradient>
        <SafeAreaView>
          <HeaderIconButton
            iconName="user"
            iconColor={colors.white}
            buttonColor={colors.primary.dark}
            handlePress={() => navigation.toggleDrawer()}
          />
        </SafeAreaView>
        <Match matchNum={1} />
        <Match matchNum={2} />
      </ScreenGradient>
    </MenuProvider>
  );
};

export default Matches;
