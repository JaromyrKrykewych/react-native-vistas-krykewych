import { Text, View } from "react-native"

import { PRODUCTS } from "../../constants/data/products"
import React from "react"
import { styles } from "./styles"

const ProductDetail = ({ route }) => {
  const { productId, title } = route.params

  const product = PRODUCTS.find((product) => product.id === productId)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  )
}

export default ProductDetail