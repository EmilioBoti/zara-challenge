'use client'
import { motion  } from 'framer-motion'
import Header from '../../components/header/Header'
import ProdcutCharacteristc from '../../components/productCharacteristic/ProdcutCharacteristc'
import ProductSpecification from '../../components/productSpecification/ProductSpecification'
import styles from './ProductDetail.module.css'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import userProductDetail from '../../hooks/userProductDetail'


export default function ProductDetail() {
  const searchParams = useSearchParams()

  const { 
    productDetailState,
    isDisabledButton,
    getProductDetail,
    addToCartButtonEvent,
    changeColor,
    changeStorage
   } = userProductDetail()

  const productId = searchParams.get('id')

  useEffect(() => {
    if(productId) getProductDetail(productId)
  },[])

  return (
    <motion.main className={styles.content}>
      <Header itemCount={0} isBackVisible={true}/> 
      <motion.div className={styles.mainContent}>
        <ProdcutCharacteristc
          productDetailState={productDetailState}
          isDisabledButton={isDisabledButton}
          changeStorage={changeStorage}
          changeColor={changeColor}
          addToCartButtonEvent={addToCartButtonEvent}
        />
        <ProductSpecification
          specification={productDetailState.product.getSpeces()}
        />
        <div>Box 3</div>
      </motion.div>
    </motion.main>
  )
}