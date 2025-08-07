'use client'

import { ProductStore } from '@/models/appModels/ProductStore'

import styles from './CartProduct.module.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '../../components/header/Header'
import CartProductList from '../../components/cartProduct/CartProductList'

import useCartProduct from '@/hooks/useCartProduct'


export default function CartProduct() {
  const { productStore, removeProduct } = useCartProduct()
  
  return(
    <motion.main className={styles.rootContent}>
      <Header itemCount={0} isBackVisible={false}/> 
      <motion.div className={styles.productContainer}>
        <CartProductList
          productStore={productStore}
          onRemoveProduct={(productStore: ProductStore) => { removeProduct(productStore) } }
        />
      </motion.div>
      <div className={styles.footer}>
        FOOTER
      </div>
    </motion.main>
  )
}