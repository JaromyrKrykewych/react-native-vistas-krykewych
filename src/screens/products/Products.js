import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { PRODUCTS } from "../../constants/data/products";
import { ProductItem } from "../../components";
import React from "react";
import { styles } from "./styles";

const Products = ({ navigation, route }) => {
  const { categoryId, name } = route.params;

  const filtering = PRODUCTS.filter(
    (product) => product.categoryId === categoryId
  );

  const onSelected = (item) => {
    return navigation.navigate("ProductDetail", {
      productId: item.id,
      title: item.title,
    });
  };
  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  );
  const keyExtractor = (item) => item.id.toString();
  const Message = () => (
    <Text style={styles.message}>
      There's no products available for this category
    </Text>
  );
  return (
    <View style={styles.container}>
      {filtering.length === 0 ? (
        <Message />
      ) : (
        <FlatList
          data={filtering}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.list}
        />
      )}
    </View>
  );
};

export default Products;
