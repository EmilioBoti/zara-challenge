'use client'
import { motion  } from 'framer-motion'
import Header from '../../components/header/Header'
import StorageOptions from '../../components/storage/StorageOption'
import ColorOptions from '../../components/color/ColorOptions'
import ProdcutCharacteristc from '../../components/productCharacteristic/ProdcutCharacteristc'
import styles from './ProductDetail.module.css'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import userProductDetail from '../../hooks/userProductDetail'
import { ColorOption, StorageOption } from '@/models/appModels/ProductDetail'


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
        <div>Box 2</div>
        <div>Box 3</div>
      </motion.div>
    </motion.main>
  )
}