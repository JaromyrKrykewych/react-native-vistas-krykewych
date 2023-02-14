import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: THEME.colors.gray,
    backgroundColor: THEME.colors.light,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerContainer: {},
  date: {
    fontSize: 16,
    fontFamily: 'PlayfairDisplayRegular',
    color: THEME.colors.title,
    marginBottom: 5,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  total: {
    fontSize: 16,
    fontFamily: 'PlayfairDisplayBold',
    color: THEME.colors.title,
    marginBottom: 5,
  },
});
