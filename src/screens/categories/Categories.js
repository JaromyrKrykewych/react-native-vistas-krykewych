import { FlatList, SafeAreaView } from "react-native";

import { CATEGORIES } from "../../constants/data";
import { CategoryItem } from "../../components";
import React from "react";
import { styles } from "./styles";

const Categories = ({ navigation }) => {
  const onSelected = (item) => {
    return navigation.navigate("Products", {
      categoryId: item.id,
      name: item.name,
    });
  };
  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Categories;
