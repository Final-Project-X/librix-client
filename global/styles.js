export const colors = {
  // purple: main buttons and highlights
  primary: {
    dark: '#5F41EE',
    light: '#DBD3FF', // used in purple gradients
  },
  // peach: gradient backgrounds and secondary highlights
  secondary: {
    dark: '#FF7D1C',
    light: '#FAA96C', // used in gradient background
  },
  neutralBackground: '#F6F1F1', // used in gradient background or instead of background grey
  white: '#FFFFFF',
  black: '#000000',
  almostBlack: '#111111', // prefer this for text color instead of black?
  textFaded: '#767676',
  error: '#B00020',
};

export const shadow = {
  button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 13,
    elevation: 5,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 13,
    elevation: 5,
  },
  image: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 13,
    // elevation: 5,
  },
};
