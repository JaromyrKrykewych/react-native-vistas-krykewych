import { Text, TouchableOpacity, View } from "react-native"

import React from "react"
import { styles } from "./style"

const CategoryItem = ({item, onSelected}) => {
  return (
    <View style={styles.containerCategory}>
      <TouchableOpacity onPress={() => onSelected(item)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CategoryItem