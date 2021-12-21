import { ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { appPalette, appStyles, fontSize } from 'themes';
import { getWidthByPercent } from 'utils/stylingUtils';

const styles = StyleSheet.create({
  main: {
    backgroundColor: appPalette.background,
  } as ViewStyle,
  inputWrite: {
    // display: block;
    backgroundColor: '#1f2127',
    color: '#bcbfc5',
    borderWidth: 1,
    borderColor: "#40424c",
    width: "100%",
    padding: 10,
    fontSize: 16,
  } as ViewStyle,
  inputRead: {
    backgroundColor: '#1f2127',
    color: '#bcbfc5',
    width: "100%",
    paddingLeft: 10,
    fontSize: 16,
  } as ViewStyle,
  boxWide: {
    borderBottomWidth: 2,
    borderBottomColor: '#40424c',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
  } as ViewStyle,
  formBox: {
    overflow: 'hidden',
    backgroundColor: '#1f2127',
    width: '100%',
    height: '100%',
    marginHorizontal: 'auto',
    marginVertical: 10,
  } as ViewStyle,
  container: {
    position: 'relative',
    zIndex: 1,
    top: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 32,
  } as ViewStyle,
  imageBg: {
    position: 'absolute',
    zIndex: 2,
    top: 16,
    left: 0,
    height: 366,
    width: 390,
  } as ViewStyle,
  shadowBoxContainer: {
    marginBottom: 32,
  } as ViewStyle,
  shadowBoxView: {
    height: 350,
    width: '100%',
    borderRadius: 18,
  } as ViewStyle,
  shadowBox: {
    height: 350,
    width: '100%',
    marginBottom: 32,
    borderRadius: 18,
    ...appStyles.shadow,
  } as ViewStyle,
  buttonContainer: {
    marginBottom: 25,
  } as ViewStyle,
  buttonView: {
    height: 112,
    width: getWidthByPercent(46) - 32,
    borderRadius: 18,
  } as ViewStyle,
  buttonContent: {
    paddingTop: 20,
  } as ViewStyle,
  boxBtn: {
    position: 'absolute',
    bottom: 100,
    padding: 20,
    width: '100%',
  } as ViewStyle,
  buttonb: {
    padding: 10,
    width: '100%',
    // alignSelf: 'center',
    // textAlign: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#1f2127',
    borderRadius: 3,
    borderWidth: 3,
    borderColor: '#c49426',
    fontSize: 24,
    // text-transform: uppercase;
    color: '#c49426',
  } as ViewStyle,
  logout: {
    marginHorizontal: 'auto',
    marginTop: 20,
    justifyContent: 'center',
    fontSize: 12,
    // text-decoration: underline;
    alignItems: 'center',
    
  } as ViewStyle,
  // notification: {
  //   position: 'absolute',
  //   bottom: -8,
  //   height: 16,
  //   width: 16,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: appPalette.success,
  //   borderRadius: 18,
  // } as ViewStyle,
  // label: {
  //   padding: 10,
  //   minHeight: 16,
  //   fontSize: 16,
  //   margin: 5,
  //   color: '#7f838a',
  // } as ViewStyle,
  // buttonText: {
  //   textAlign: 'center',
  //   textTransform: 'uppercase',
  //   fontSize: fontSize(24),
  //   color: '#c49426',
  // } as ViewStyle,
  // logoutText: {
  //   textAlign: 'center',
  //   textDecorationLine: 'underline',
  //   fontSize: fontSize(12),
  //   color: '#7f838a',
  // } as ViewStyle,
  // moreButton: {
  //   width: '100%',
  //   paddingBottom: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // } as ViewStyle,
  // sign: {
  //   fontSize: 9,
  //   color: appPalette.white,
  // } as TextStyle,
  // menuContainer: {
  //   position: 'relative',
  //   zIndex: 1,
  //   top: 0,
  //   padding: 32,
  //   alignItems: 'center',
  // },
  // menuItem: {
  //   width: '85%',
  //   borderBottomWidth: 1,
  //   borderBottomColor: appPalette.grey,
  // },
  // lastMenuItem: {
  //   borderBottomWidth: 0,
  // },
  // buttonMenuText: {
  //   marginTop: 20,
  //   marginBottom: 20,
  //   textAlign: 'center',
  //   fontSize: fontSize(16),
  //   color: appPalette.darkGrey,
  // },
  // lessButton: {
  //   width: '100%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

export default styles;
