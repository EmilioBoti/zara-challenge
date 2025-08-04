'use client'

import { motion } from 'framer-motion'

import Header from '../components/header/Header'
import SearchBar from '../components/search/SearchBar'
import ListProduct from '../components/mobileCard/ListProduct'
import styles from './Home.module.css'
import useProduct from '../hooks/useProduct'
import { useEffect } from 'react'
import { Product } from '@/models/appModels/Product'


export default function Home() {
  const { productsState, getProduct, getAllProducts } = useProduct()

  useEffect(() => {
    getAllProducts()
  },[])

  return (
    <motion.main
      className={styles.mainContainer}
    >
      <Header itemCount={0} isBackVisible={false}/>
      <SearchBar
        result={productsState.itemCount}
        onValueChanged={(value: string) => { getProduct(value) }}
      />
      <motion.div className={styles.container}>
        <ListProduct 
          items={productsState.products}
          onClickEvent={ (product: Product) => console.log(product.name)}
          />
      </motion.div>
    </motion.main>
  );
}
