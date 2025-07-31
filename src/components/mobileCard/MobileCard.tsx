
import styles from './MobileCard.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'


type MobileCardProps = {
  product: Product
}

export default function MobileCard({ product }: MobileCardProps) {
  return (
    <motion.div
      className={styles.cardContainer}
    >
      <Image
        src={product.imageUrl}
        width={300}
        height={300}
        alt='mobile image'
        unoptimized
      
      />
      <div className={styles.cardInfo}>
        <div>
          <div className={styles.cardTitle}>{product.brand}</div>
          <div className={styles.cardSubTitle}>{product.name}</div>
        </div>
        <div className={styles.cardSubTitle}>
          {product.basePrice} EUR
        </div>
      </div>
    </motion.div>
  )
}