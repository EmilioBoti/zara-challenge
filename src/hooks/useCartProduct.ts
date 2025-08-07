'use client'

import { useEffect, useState } from 'react'
import { ProductStore } from '../models/appModels/ProductStore'

export default function useCartProduct() {
  const [productStore, setProductStore ]= useState<ProductStore[]>([])
  const [totalPrice, setTotalPrice ]= useState<number>(0)
  const [isStored, setIsStored] = useState(false)
  const key = 'cartProducts'
  

  useEffect(() => {
    const dataSet = getCartProducts()
    setProductStore(dataSet)
  }, [])


  useEffect(() => {
    const total = productStore.map((pruduct) => pruduct.storageOption.price)
    .reduce((acc, current) => acc + current, 0)
    setTotalPrice(total)
  }, [productStore])

  const storeProduct = (data: ProductStore) => {
    const products = localStorage.getItem(key)
    if(products) {
      try {
        const productStored = JSON.parse(products) as ProductStore[]
        productStored.push(data)
        localStorage.setItem(key, JSON.stringify(productStored))
        setProductStore(productStored)
        setIsStored(true)
      } catch(error) {
        setIsStored(false)
      }
    } else {
      const products: ProductStore[] = [data]
      localStorage.setItem(key, JSON.stringify([data]))
      setProductStore(products)
      setIsStored(true)
    }
  }

  const removeProduct = (data: ProductStore) => {
    if(productStore.includes(data)) {
      const newDataSet = productStore.filter((product) => product !== data )
      localStorage.setItem(key, JSON.stringify(newDataSet))
      setProductStore([...newDataSet])
    }
  }

  const getCartProducts = (): ProductStore[] => {
    const json = localStorage.getItem(key)
    if(json) {
      try {
        return JSON.parse(json)
      } catch(error) {
        return []
      }
    } else {
      return []
    }
  }

  return {
    productStore,
    isStored,
    totalPrice,
    storeProduct,
    getCartProducts,
    removeProduct
  }

}