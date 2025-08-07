'use client'


import { ProductStore } from '@/models/appModels/ProductStore'
import { motion } from 'framer-motion'

import styles from './CartProductList.module.css'
import useNavigation, { NavProductDetail } from '@/hooks/navigation/useNavigation'


type CartProductListProps = {
  productStore: ProductStore[]
  onRemoveProduct: (productStore: ProductStore) => void
}

export default function CartProductList({ 
  productStore, 
  onRemoveProduct 
}: CartProductListProps) {
  const { navigateTo } = useNavigation() 
  return(
    <motion.div className={styles.products}>
      <div className={styles.titleContainer}>
        <h2>CART ({productStore.length})</h2>
      </div>
      <ul className={styles.cartProducts}>
        { productStore.map((productStored, index) => (
          <motion.li 
            key={index}
            className={styles.productItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            >
            <img
              className={styles.productImage}
              src={productStored.imageUrl}
              alt={productStored.name}
            />
            <div className={styles.itemInfo}>
              <div>
                <h3>
                  {productStored.name} <br />
                  {productStored.storageOption.capacity} | {productStored.colorOption.name}
                </h3>
                <p className={styles.price}>{productStored.storageOption.price} EUR</p>
              </div>
              <button 
                style={{
                  color: "var(--delete-color)",
                  cursor: "pointer"
                }}
                onClick={ (e) => onRemoveProduct(productStored) }
              >Delete</button>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}