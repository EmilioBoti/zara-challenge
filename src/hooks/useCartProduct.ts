'use client'

import { useEffect, useState } from 'react'
import { ProductStore } from '../models/appModels/ProductStore'

export default function useCartProduct() {
  const [isStored, setIsStored] = useState(false)
  const key = 'cartProducts'


  const storeProduct = (data: ProductStore) => {
    const products = localStorage.getItem(key)
    if(products) {
      try {
        const productStored = JSON.parse(products) as ProductStore[]
        productStored.push(data)
        localStorage.setItem(key, JSON.stringify(productStored))
        setIsStored(true)
      } catch(error) {
        setIsStored(false)
      }
    } else {
      localStorage.setItem(key, JSON.stringify([data]))
      setIsStored(false)
    }
  }

  const getCartProducts = () => {
    localStorage.getItem(key)
  }

  return {
    isStored,
    storeProduct,
    getCartProducts
  }

}