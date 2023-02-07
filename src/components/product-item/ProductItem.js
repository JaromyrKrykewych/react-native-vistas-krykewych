import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.containerProduct}>
      <TouchableOpacity onPress={() => onSelected(item)}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem
