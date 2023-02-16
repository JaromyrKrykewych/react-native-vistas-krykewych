import { FlatList, Text, View } from "react-native";
import React, { useEffect } from "react";
import { filterProducts, selectProduct } from '../../store/actions/index'
import { useDispatch, useSelector } from "react-redux";

import { ProductItem } from "../../components";
import { styles } from "./styles";

const Products = ({ navigation }) => {
  const dispatch = useDispatch()
  const category = useSelector((state) => state.category.selected)
  const filteredProducts = useSelector((state) => state.products.filteredProducts)

  const onSelected = (item) => {
    dispatch(selectProduct(item.id))
    navigation.navigate("ProductDetail", {
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

  useEffect(() => {
    dispatch(filterProducts(category.id))
  }, [])
  return (
    <View style={styles.container}>
      {filteredProducts.length === 0 ? (
        <Message />
      ) : (
        <FlatList
          data={filteredProducts}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.list}
        />
      )}
    </View>
  );
};

export default Products;
