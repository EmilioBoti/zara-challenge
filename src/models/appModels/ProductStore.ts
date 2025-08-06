import { ColorOption, StorageOption  } from '../appModels/ProductDetail'

export interface ProductStore {
    id: string,
    brand: string,
    name: string,
    basePrice: number,
    storageOption: StorageOption,
    colorOption: ColorOption
    imageUrl: string
}