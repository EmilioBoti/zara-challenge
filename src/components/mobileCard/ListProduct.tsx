import MobileCard from '../mobileCard/MobileCard'
import styles from './ListProduct.module.css'

import { Product } from '../../models/appModels/Product'
import { motion } from 'framer-motion'


type ListProductProps = {
  items: Product[]
  onClickEvent: (product: Product) => void
}

export default function ListProduct({ items, onClickEvent }: ListProductProps) {
  return (
    <ul className={styles.productContainer}>
      {items.map((product, index) => (
        <motion.li key={index}
          initial={{ opacity: 0, x: -2 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <MobileCard 
            product={product}
            onClickEvent={ (product: Product) => onClickEvent(product) }
          />
        </motion.li>
      ))}
    </ul>
  )
}