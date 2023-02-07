import { Categories, ProductDetail, Products } from "../screens/index";

import { THEME } from "../constants/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories" screenOptions={{
      headerTintColor: THEME.colors.primary,
      navigationBarColor: THEME.colors.light,
      headerStyle: {
        backgroundColor: THEME.colors.light,
      },
      headerTitleStyle: {
        fontFamily: 'PlayfairDisplayBold',
        fontSize: 20,
        color: THEME.colors.title,
      }
    }}>
      <Stack.Screen name="Categories" component={Categories} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Products" component={Products} options={{
        title: 'Products',
      }} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} options={{
        title: 'Product Detail'
      }} />
    </Stack.Navigator>
  )
}

export default ShopNavigator