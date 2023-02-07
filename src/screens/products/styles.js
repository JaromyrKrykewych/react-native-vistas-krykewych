import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: THEME.colors.background,
  },
  message: {
    marginTop: 35,
    marginHorizontal: '10%',
    fontFamily: 'PlayfairDisplayRegular',
    fontSize: 18,
    textAlign: 'center',
  }
})