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
      </div>
      <ul>
        <div style={{width: "100%", height: ".03em", background: "#CCCCCC" }}></div>
        { specification.map((spec, index) => (
          <li key={index}>
            <div className={styles.specItem}>
              <div className={styles.specMame}>{spec.name}</div>
              <p className={styles.specDescription}>{spec.value}</p>
            </div>
            <div style={{width: "100%", height: ".03em", background: "#CCCCCC" }}></div>
          </li>
        ))
        }
      </ul>
    </motion.div>
  )
}