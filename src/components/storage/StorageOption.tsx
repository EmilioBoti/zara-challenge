
import { StorageOption } from '../../models/appModels/ProductDetail'

import styles from './StorageOptions.module.css'

type StorageOptionsProps = {
  storageOptions: StorageOption[]
}

export default function StorageOptions({ storageOptions }: StorageOptionsProps) {
  return (
    <div className={styles.storageContainer}>
      <h2 className={styles.storageTittle}>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</h2>
      <ul className={styles.storageOptions}>
        {storageOptions.map(( (storage, index) => (
          <li key={index} className={styles.storage}>
            <p>{storage.capacity}</p>
          </li>
        )))}
      </ul>
    </div>
  )
}