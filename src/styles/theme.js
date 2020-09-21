import Constants from 'expo-constants';

export const uiTheme = {
  palette: {
    primaryColor: '#1f2923',
    accentColor: 'orange',
  },
  toolbar: {
    container: {
      paddingTop: Constants.statusBarHeight,
      height: 50 + Constants.statusBarHeight,
    },
  },
  iconSet: 'Ionicons',
};
