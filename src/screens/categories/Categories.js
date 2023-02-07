import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Products')} >
        <Text style={styles.buttonText}>Go to Products</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Categories;
