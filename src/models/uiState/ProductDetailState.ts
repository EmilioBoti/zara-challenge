import { 
  ColorOption, 
  ProductDetail, 
  StorageOption 
} from "../appModels/ProductDetail";

export interface ProductDetailState {
  product: ProductDetail
  currentPrice: number,
  currentColor?: ColorOption,
  currentStorage?: StorageOption
}