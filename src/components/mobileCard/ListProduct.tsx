import MobileCard from '../mobileCard/MobileCard'
import styles from './ListProduct.module.css'

import { Product } from '../../models/appModels/Product'


type ListProductProps = {
  items: Product[]
  onClickEvent: (product: Product) => void
}

export default function ListProduct({ items, onClickEvent }: ListProductProps) {
  return (
    <ul className={styles.productContainer}>
      {items.map((product, index) => (
        <li key={index}>
          <MobileCard 
            product={product}
            onClickEvent={ (product: Product) => onClickEvent(product) }
          />
        </li>
      ))}
    </ul>
  )
}