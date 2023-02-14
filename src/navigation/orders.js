import { Orders } from "../screens";
import { THEME } from "../constants/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()


const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
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
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  )
}

export default OrdersNavigator