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
      initial={{ opacity: 0, x: -2 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    > 
      <div style={{marginBottom: "2em"}}>
        <h2 className={styles.specTitle}>SPECIFICATION</h2>
      </div>
      <ul>
        <motion.li style={{width: "100%", height: ".03em", background: "#CCCCCC" }}/>
        { specification.map((spec, index) => (
          <motion.li key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className={styles.specItem}>
              <div className={styles.specMame}>{spec.name}</div>
              <p className={styles.specDescription}>{spec.value}</p>
            </div>
            <div style={{width: "100%", height: ".03em", background: "#CCCCCC" }}></div>
          </motion.li>
        ))
        }
      </ul>
    </motion.div>
  )
}