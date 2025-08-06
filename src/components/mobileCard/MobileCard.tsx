
import styles from './MobileCard.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Product } from '../../models/appModels/Product'

type MobileCardProps = {
  width?: string,
  product: Product,
  onClickEvent: (product: Product) => void
}

export default function MobileCard({
  width = '100%',
  product,
  onClickEvent
 }: MobileCardProps
) {

  return (
    <motion.div
      className={styles.cardContainer}
      style={{ width: width, height: "100%"}}
      onClick={(e) => { onClickEvent(product) }}
    >
      <div className={styles.productImageContainer}>
        <Image
          className={styles.productImage}
          style={{
            width: 'auto',
            height: 'auto',
            aspectRatio: '1/1',
            objectFit: 'contain'
          }}
          src={product.imageUrl}
          width={300}
          height={300}
          alt={product.name}
          unoptimized
        />
      </div>
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