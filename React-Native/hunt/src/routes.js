import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Main from './pages/Main'
import Product from './pages/Product'

export default function Routes() {
  return(
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{
        headerShown: true, 
        title: 'JSHunt',
        headerStyle: {
          backgroundColor: '#da552f'
        },
        headerTintColor: '#fff',
        headerTitleAlign: "center",
      }}
      >
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen 
          name="Product" 
          component={Product} 
          options={({ route }) => ({ title: route.params.product.title })} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
