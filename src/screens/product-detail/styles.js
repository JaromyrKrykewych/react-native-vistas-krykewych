import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'PlayfairDisplayBold',
    fontSize: 24,
    color: THEME.colors.title,
  },
  price: {
    fontFamily: 'PlayfairDisplayRegular',
    fontSize: 20,
    marginTop: 20,
  }
})