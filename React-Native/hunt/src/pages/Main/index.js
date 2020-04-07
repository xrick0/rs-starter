import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import styles from './styles'

export default function Main() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [pagesTotal, setPagesTotal] = useState(0)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadProducts()
  }, [])

  const navigation = useNavigation()

  async function loadProducts(pageNumber = 1) {
    if (loading) return

    setLoading(true)
    const response = await api.get('/products', {
      params: {
        page: pageNumber
      }
    })

    const { docs, pages } = response.data

    setPage(pageNumber)
    setPagesTotal(pages)
    setProducts([...products, ...docs])

    setLoading(false)
  }

  function loadMore() {
    if (loading) return
    if (pagesTotal > 0 && page === pagesTotal) return

    const pageNumber = page + 1
    loadProducts(pageNumber)
  }

  function renderItem({ item }) {
    return (
      <View style={styles.productContainer}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>

        <TouchableOpacity 
          style={styles.productButton} 
          onPress={() => navigation.navigate('Product', {product: item})}
        >
          <Text style={styles.productButtonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={product => product._id}
        renderItem={renderItem}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

    </View>
  )

}