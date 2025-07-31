'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import styles from './Header.module.css'

type HeaderProps = {
  itemCount: number
  isBackVisible?: boolean
}

export default function Header({ itemCount = 0, isBackVisible = false}: HeaderProps) {
  return (
    <motion.header 
      className={styles.headerContainer}
    >
      <div className={styles.header}>
        <Image
          src='/logo.svg'
          width={100}
          height={40}
          alt='Logo'
        />
        <div className={styles.cartContainer}>
          <Image
            src='/ic_bag_cart.svg'
            width={30}
            height={20}
            alt='cart bag'
          />
          <div className={styles.cartCount}>{itemCount}</div>
        </div>
      </div>
      { isBackVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.backContainer}>
            <Image
              src='/ic_arrow_back.svg'
              width={30}
              height={20}
              alt='cart bag'
            />
            <div>Back</div>
          </div>
        </motion.div>  
      )}
    </motion.header>
  )
}