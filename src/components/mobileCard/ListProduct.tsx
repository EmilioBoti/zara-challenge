import MobileCard from '../mobileCard/MobileCard'
import styles from './ListProduct.module.css'

import { Product } from '../../models/appModels/Product'


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