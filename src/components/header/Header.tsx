'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import styles from './Header.module.css'
import useNavigation from '../../hooks/navigation/useNavigation'
import { NavBack, NavCart } from '../../hooks/navigation/useNavigation'

type HeaderProps = {
  itemCount: number
  isCartVisible?: boolean
  isBackVisible?: boolean
}

export default function Header({
  itemCount = 0, 
  isBackVisible = false,
  isCartVisible = true
}: HeaderProps) {
  const { navigateTo } = useNavigation()
  return (
    <motion.header 
      className={styles.headerContainer}
    >
      <div className={styles.header}>
        <img
          style={{
            width: "auto",
            height: "auto"
          }}
          src='/logo.svg'
          alt='Logo'
        />
        { isCartVisible && (
          <div className={styles.cartContainer} onClick={(e) => navigateTo(new NavCart())}>
            <img
              style={{
                width: "auto",
                height: "auto"
              }}
              src={ (itemCount > 0) ? '/ic_bag_cart.svg' : '/ic_bag_cart_empty.svg'}
              alt='cart bag'
            />
            <div className={styles.cartCount}>{itemCount}</div>
          </div>
        )}
      </div>
      { isBackVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.backContainer} onClick={(e) => navigateTo(new NavBack())} >
            <img
              style={{
                width: "auto",
                height: "auto"
              }}
              src='/ic_arrow_back.svg'
              alt='cart bag'
            />
            <div>Back</div>
          </div>
        </motion.div>  
      )}
    </motion.header>
  )
}