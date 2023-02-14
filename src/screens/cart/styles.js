import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
  },
  listContainer: {
    flex: 1,
    paddingTop: 10,
  },
  footer: {
    backgroundColor: THEME.colors.light,
    borderTopColor: THEME.colors.dark,
    borderTopWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonConfirm: {
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonConfirmText: {
    color: THEME.colors.title,
    fontFamily: 'PlayfairDisplayBold',
    fontSize: 14,
  },
  totalContainer: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {
    color: THEME.colors.title,
    fontFamily: 'PlayfairDisplayRegular',
    fontSize: 14,
  },
  totalPrice: {
    color: THEME.colors.title,
    fontFamily: 'PlayfairDisplayBold',
    fontSize: 14,
  },
});
