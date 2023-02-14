import { FlatList, Text, View } from "react-native";

import { ORDERS } from "../../constants/data";
import { OrderItem } from "../../components";
import React from "react";
import { styles } from "./styles";

const Orders = () => {
  const onDelete = (id) => {};

  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={onDelete} />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList
        data={ORDERS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Orders;
