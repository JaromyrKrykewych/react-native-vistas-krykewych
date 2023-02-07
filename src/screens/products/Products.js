import { Text, TouchableOpacity, View } from "react-native"

import React from "react"
import {styles} from './styles'

const Products = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductDetail')}>
        <Text style={styles.buttonText}>Go to Product Detail</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Products