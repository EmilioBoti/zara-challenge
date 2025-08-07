'use client'

import { ProductStore } from '@/models/appModels/ProductStore'

import styles from './CartProduct.module.css'
import { motion } from 'framer-motion'
import Header from '../../components/header/Header'
import CartProductList from '../../components/cartProduct/CartProductList'

import useCartProduct from '@/hooks/useCartProduct'
import useNavigation from '@/hooks/navigation/useNavigation'
import { NavBack } from '@/hooks/navigation/useNavigation'


export default function CartProduct() {
  const { navigateTo } = useNavigation()
  const { productStore, totalPrice, removeProduct } = useCartProduct()

  return(
    <motion.main className={styles.rootContent}>
      <Header itemCount={0} isBackVisible={false}/> 
      <motion.div className={styles.productContainer}>
        <CartProductList
          productStore={productStore}
          onRemoveProduct={(productStore: ProductStore) => { removeProduct(productStore) } }
        />
      </motion.div>
      <div className={styles.footerContainer}>
        <div className={productStore.length > 0 ? styles.footer : ''}>
          { productStore.length > 0 && (
            <div className={styles.totalPrice}>
            <div>TOTAL</div>
            <div>{totalPrice} EUR</div>
          </div>
          )}
          <div className={styles.btnShoppingContainer}>
            <button 
              className={`${styles.btn} ${styles.btnContinueShopping}`}
              onClick={ (e) => navigateTo(new NavBack())}
              >CONTINUE SHOPPING
              </button>
          </div>
          { productStore.length > 0 && (
            <button className={`${styles.btn} ${styles.btnPay}`}>PAY</button>
          )}
        </div>
      </div>
    </motion.main>
  )
}