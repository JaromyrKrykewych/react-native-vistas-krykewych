import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { CategoryItem } from "../../components";
import React from "react";
import { styles } from "./styles";

const CATEGORIES = [
  {
    id: 1,
    name: "T-shirts",
  },
  {
    id: 2,
    name: "Shirts",
  },
  {
    id: 3,
    name: "Pants",
  },
  {
    id: 4,
    name: "Shorts",
  },
  {
    id: 5,
    name: "Jackets",
  },
];

const Categories = ({ navigation }) => {
  const onSelected = (item) => {
    return navigation.navigate('Products', {
      categoryId: item.id,
      name: item.name,
    })
  }
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
