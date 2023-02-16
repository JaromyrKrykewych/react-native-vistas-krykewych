import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { CartItem } from "../../components";
import React from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart)
  const total = 55;
  const onDeleted = () => {};
  const renderItem = ({ item }) => (
    <CartItem item={item} onDeleted={onDeleted} />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.listContainer}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={() => null}>
          <Text style={styles.buttonConfirmText}>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
