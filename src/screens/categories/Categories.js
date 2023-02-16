import { FlatList, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { CategoryItem } from "../../components";
import React from "react";
import { selectCategory } from "../../store/actions/index";
import { styles } from "./styles";

const Categories = ({ navigation }) => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.category.categories)
  const onSelected = (item) => {
    dispatch(selectCategory(item.id))
    navigation.navigate("Products", {
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
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Categories;
