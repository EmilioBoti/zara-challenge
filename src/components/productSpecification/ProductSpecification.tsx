import { motion } from 'framer-motion'

import styles from './ProductSpecification.module.css'
import { SpecItem } from '@/models/appModels/ProductDetail'


type ProductSpecificationProps = {
  specification: SpecItem[]
}

export default function ProductSpecification({
  specification
}: ProductSpecificationProps
) {
  return (
    <motion.div
      className={styles.specContainer}
    > 
      <div style={{marginBottom: "2em"}}>
        <h2 className={styles.specTitle}>SPECIFICATION</h2>
        <div style={{width: "100%", height: ".03em", background: "#CCCCCC" }}></div>
      </div>
      <ul>
        { specification.map((spec, index) => (
          <li key={index}>
            <div className={styles.specItem}>
              <p>{spec.name}</p>
              <p>{spec.value}</p>
            </div>
            <div style={{width: "100%", height: ".03em", background: "#CCCCCC" }}></div>
          </li>
        ))
        }
      </ul>
    </motion.div>
  )
}