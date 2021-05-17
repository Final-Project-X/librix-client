import { StyleSheet } from 'react-native';

const styles = (screenWidth) =>
  StyleSheet.create({
    navBackgroundGradient: {
      height: 66,
      marginBottom: 5,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      left: 10,
      width: screenWidth - 20,
    },
    navContainer: {
      height: 60,
      backgroundColor: '#ffffff',
      width: screenWidth - 26,
      borderRadius: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    tab: {
      flex: 1,
      height: '100%',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 100,
    },
    focusedTab: {
      backgroundColor: '#5F41EE',
      zIndex: 200,
      height: 66,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 13,
      elevation: 5,
    },
    focusedTabLabel: {
      color: '#ffffff',
    },
    unfocusedTab: {
      backgroundColor: 'white',
    },
    unfocusedTabLabel: {
      color: '#111111',
    },
  });

export default styles;
