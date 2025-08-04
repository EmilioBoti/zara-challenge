import { ApiProduct } from '../../models/apiModels/ApiProduct'
import { Product } from '../../models/appModels/Product'

export const parserApiProduct = (apiProducts: ApiProduct[]): Product[] => {
  return apiProducts.map((apiProduct: ApiProduct) => {
      return new Product(
        apiProduct.id,
        apiProduct.brand,
        apiProduct.name,
        apiProduct.basePrice,
        apiProduct.imageUrl
      )
    }
  )
}