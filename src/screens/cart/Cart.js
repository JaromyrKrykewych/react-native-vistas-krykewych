import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { CART } from "../../constants/data/index";
import { CartItem } from "../../components";
import React from "react";
import { styles } from "./styles";

const Cart = () => {
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
          data={CART}
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
