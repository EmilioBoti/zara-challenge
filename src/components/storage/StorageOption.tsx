
import { StorageOption } from '../../models/appModels/ProductDetail'

import styles from './StorageOptions.module.css'

type StorageOptionsProps = {
  storageSelected?: StorageOption 
  storageOptions: StorageOption[]
  onStorageChanged: (storageOption: StorageOption) => void
}

export default function StorageOptions({
  storageSelected,
  storageOptions, 
  onStorageChanged 
}: StorageOptionsProps
) {
  return (
    <div className={styles.storageContainer}>
      <h2 className={styles.storageTittle}>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</h2>
      <ul className={styles.storageOptions}>
        {storageOptions.map(( (storage, index) => (
          <li key={index}
            className={`${styles.storage} ${
              storageSelected?.capacity === storage.capacity ? styles.selected : ''
            }`}
            onClick={(e) => onStorageChanged(storage)}
          >
            <p>{storage.capacity}</p>
          </li>
        )))}
      </ul>
    </div>
  )
}