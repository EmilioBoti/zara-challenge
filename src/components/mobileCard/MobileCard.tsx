
import styles from './MobileCard.module.css'
import { motion } from 'framer-motion'
import { Product } from '../../models/appModels/Product'

export type MobileCardProps = {
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
      data-testid='card-product'
      className={styles.cardContainer}
      style={{ width: width, height: "100%"}}
      onClick={() => { onClickEvent(product) }}
    >
      <div className={styles.productImageContainer}>
        <img
          className={styles.productImage}
          style={{
            width: 'auto',
            height: 'auto',
            aspectRatio: '1/1',
            objectFit: 'contain'
          }}
          src={product.imageUrl}
          alt={product.name}
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