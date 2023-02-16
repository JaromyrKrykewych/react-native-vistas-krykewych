import { FlatList, View } from "react-native";

import { OrderItem } from "../../components";
import React from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.orders.orders)
  const onDelete = (id) => {};

  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={onDelete} />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Orders;
