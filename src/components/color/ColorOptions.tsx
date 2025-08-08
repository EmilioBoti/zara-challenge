'user client'

import { ColorOption } from '@/models/appModels/ProductDetail'
import styles from './ColorOption.module.css'


type ColorOptionsProps = {
  colorSelected?: ColorOption, 
  colorOptions: ColorOption[]
  onColorSelected: (colorOption: ColorOption) => void
}

export default function ColorOptions({
  colorSelected,
  colorOptions,
  onColorSelected
 }: ColorOptionsProps
) {
  return (
    <div className={styles.colorsContainer}>
      <h2 className={styles.colorsTittle}>COLOR. PICK YOUR FAVOURITE.</h2>
      <ul className={styles.colorOptions}>
        {colorOptions.map(( (colorOption, index) => (
          <li 
            key={index} 
            className={`${styles.colorOption} ${colorSelected?.hexCode === colorOption.hexCode ? styles.selected : ''}`} 
            onClick={() => { onColorSelected(colorOption) }}
          >
            <div className={styles.color} style={{backgroundColor: colorOption.hexCode}}></div>
          </li>
        )))}
      </ul>
      { colorSelected && (
        <p>{colorSelected.name}</p>
      )}
    </div>
  )
}