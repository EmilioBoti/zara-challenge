'use client'

import { motion } from 'framer-motion'

import Header from '../components/header/Header'
import ListProduct from '../components/mobileCard/ListProduct'
import styles from './Home.module.css'
import useProduct from '../hooks/useProduct'
import { useEffect } from 'react'


export default function Home() {
  const { products, getProducts } = useProduct()
  
  useEffect(() => {
    getProducts()
    console.log("ok")
  },[])

  return (
    <motion.main
      className={styles.mainContainer}
    >
      <Header itemCount={0} isBackVisible={false}/>
      <motion.div className={styles.container}>
        <ListProduct items={products}/>
      </motion.div>
    </motion.main>
  );
}
