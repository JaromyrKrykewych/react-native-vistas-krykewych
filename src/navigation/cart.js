import { Cart } from "../screens";
import { THEME } from "../constants/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerTintColor: THEME.colors.primary,
        navigationBarColor: THEME.colors.light,
        headerStyle: {
          backgroundColor: THEME.colors.light,
        },
        headerTitleStyle: {
          fontFamily: "PlayfairDisplayBold",
          fontSize: 20,
          color: THEME.colors.title,
        },
      }}
    >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
