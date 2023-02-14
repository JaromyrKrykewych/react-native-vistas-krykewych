import CartNavigator from "./cart";
import { Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import OrdersNavigator from "./orders";
import ShopNavigator from "./shop";
import { THEME } from "../constants/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  const { height} = Dimensions.get('screen')
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          flex: 0.08,
        },
        tabBarLabelStyle: {
          fontFamily: "PlayfairDisplayBold",
          fontSize: 14,
          marginBottom: 5,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarActiveTintColor: THEME.colors.primary,
        tabBarInactiveTintColor: THEME.colors.gray,
      }}
    >
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: "Shop",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={22}
              color={focused ? THEME.colors.primary : THEME.colors.gray}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          title: "Orders",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "albums" : "albums-outline"}
              size={22}
              color={focused ? THEME.colors.primary : THEME.colors.gray}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={22}
              color={focused ? THEME.colors.primary : THEME.colors.gray}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
