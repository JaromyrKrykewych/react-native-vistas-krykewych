import { Text, TouchableOpacity, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { THEME } from "../../constants/theme";
import { styles } from "./styles";

const CartItem = ({ item, onDeleted }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{item.title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.quantity}>Qty.: {item.quantity}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDeleted(item.id)}>
          <Ionicons name="trash" color={THEME.colors.primary} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
