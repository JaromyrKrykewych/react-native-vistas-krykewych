import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flex: 1,
    backgroundColor: THEME.colors.background,
    /* justifyContent: 'center',
    alignItems: 'center', */
  },
  title: {
    fontFamily: 'PlayfairDisplayBold',
    fontSize: 24,
    color: THEME.colors.title,
  },
  button: {
    marginTop: 25,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: THEME.colors.dark,
  },
  buttonText: {
    fontFamily: 'PlayfairDisplayRegular',
    fontSize: 14,
  }
})