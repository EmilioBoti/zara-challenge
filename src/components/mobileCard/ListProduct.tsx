import { motion } from 'framer-motion'
import MobileCard from '../mobileCard/MobileCard'
import styles from './ListProduct.module.css'


type ListProductProps = {
  items: Product[]
}

export default function ListProduct({ items }: ListProductProps) {
  return (
    <ul className={styles.productContainer}>
      {items.map((product, index) => (
        <li key={index}>
          <MobileCard product={product}/>
        </li>
      ))}
    </ul>
  )
}