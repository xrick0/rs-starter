import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { WebView } from 'react-native-webview'

export default function Product() {
  const route = useRoute()

  return <WebView source={{ uri: route.params.product.url }}/>
}

