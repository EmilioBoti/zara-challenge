import Image from 'next/image'
import StorageOptions from '../../components/storage/StorageOption'
import ColorOptions from '../../components/color/ColorOptions'
import { motion } from 'framer-motion'
import { ColorOption, StorageOption } from '@/models/appModels/ProductDetail'
import { ProductDetailState } from '@/models/uiState/ProductDetailState'
import styles from './ProdcutCharacteristc.module.css'


type ProdcutCharacteristcProps = {
  productDetailState: ProductDetailState,
  isDisabledButton: boolean,
  changeStorage: (storageOption: StorageOption) => void
  changeColor: (colorOption: ColorOption) => void
  addToCartButtonEvent: () => void
}

export default function ProdcutCharacteristc({
  productDetailState,
  isDisabledButton = true,
  changeStorage,
  changeColor,
  addToCartButtonEvent
}: ProdcutCharacteristcProps
) {
  return (
    <motion.div 
      className={styles.productSelection}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      { productDetailState.currentColor && (
        <Image
        src={productDetailState.currentColor.imageUrl}
        width={400}
        height={400}
        alt={productDetailState.product.name}
        unoptimized
        />
      )}
      <div className={styles.infoContent}>
        <div>
          <h2 className={styles.productName}>{productDetailState.product.brand} - {productDetailState.product.name}</h2>
          <p>From {productDetailState.currentPrice} EUR</p>
        </div>
        <StorageOptions
          storageSelected={productDetailState.currentStorage}
          storageOptions={productDetailState.product.storageOptions}
          onStorageChanged={changeStorage}
        />
        <ColorOptions
          colorSelected={productDetailState.currentColor}
          colorOptions={productDetailState.product.colorOptions}
          onColorSelected={changeColor}
        />
        <button
          disabled={isDisabledButton}
          className={`${styles.addToCartButton} ${(isDisabledButton) ? styles.idle : styles.active}`}
          onClick={(e)=> addToCartButtonEvent() }
          >Add to Cart</button>
      </div>
    </motion.div>
  )  
}