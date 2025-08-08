'use client'

import { motion } from 'framer-motion'

import Header from '@/components/header/Header'
import SearchBar from '@/components/search/SearchBar'
import ListProduct from '@/components/mobileCard/ListProduct'
import Loader from '@/components/loader/Loader'
import styles from './Home.module.css'
import useProduct from '@/hooks/useProduct'
import { useEffect } from 'react'
import { Product } from '@/models/appModels/Product'
import useNavigation, { NavRoute } from '@/hooks/navigation/useNavigation'
import useCartProduct from '@/hooks/useCartProduct'


export default function Home() {
  const { navigateTo } = useNavigation()
  const { productStore } = useCartProduct()
  const { 
    productsState,
    isLoading,
    getProducts,
   } = useProduct()

  useEffect(() => {
    getProducts()
  },[])

  return (
    <motion.main
      className={styles.mainContainer}
    >
      <Header itemCount={productStore.length} isBackVisible={false}/>
      <SearchBar
        result={productsState.itemCount}
        onValueChanged={(value: string) => { getProducts(value, false) }}
      />
      <motion.div className={styles.container}>
        { isLoading ? (  
          <Loader/> 
        ) : (
          <ListProduct 
            items={productsState.products}
            onClickEvent={ (product: Product) => { navigateTo({
              route: NavRoute.PRODUCT_DETAIL,
              param: {
                id: product.id
              }
            })}}
          />
        )}
      </motion.div>
    </motion.main>
  );
}
