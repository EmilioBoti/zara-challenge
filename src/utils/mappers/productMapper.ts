import { 
  ApiProductDetail,
  ApiSpecs,
  ApiColorOptions, 
  ApiStorageOptions
} from '../../models/apiModels/ApiProductDetail'
import { ApiProduct } from '../../models/apiModels/ApiProduct'
import { Product } from '../../models/appModels/Product'
import { 
  ProductDetail,
  Specs, 
  ColorOptions, 
  StorageOptions 
} from '@/models/appModels/ProductDetail'

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

export const parseApiProductDetail = (apiProductDetail: ApiProductDetail): ProductDetail => {
   return new ProductDetail(
    apiProductDetail.id,
    apiProductDetail.brand,
    apiProductDetail.name,
    apiProductDetail.description,
    apiProductDetail.basePrice,
    apiProductDetail.rating,
    parseApiSpecs(apiProductDetail.specs),
    parseApiColorOptions(apiProductDetail.colorOptions),
    parseApiStorageOptions(apiProductDetail.storageOptions),
    parserApiProduct(apiProductDetail.similarProducts)
   )
}

const parseApiSpecs = (apiSpecs: ApiSpecs): Specs => {
  return new Specs(
    apiSpecs.screen,
    apiSpecs.resolution,
    apiSpecs.processor,
    apiSpecs.mainCamera, 
    apiSpecs.selfieCamera,
    apiSpecs.battery,
    apiSpecs.os,
    apiSpecs.screen
  )
}

const parseApiColorOptions = (apiColorOptions: ApiColorOptions[]): ColorOptions[] => {
  return apiColorOptions.map( apiColorOption => {
      return new ColorOptions(
        apiColorOption.name,
        apiColorOption.hexCode,
        apiColorOption.imageUrl
      )
    }
  )
}

const parseApiStorageOptions = (apiStorageOptions: ApiStorageOptions[]): StorageOptions[] => {
  return apiStorageOptions.map( storegeOption => {
    return new StorageOptions(
      storegeOption.capacity,
      storegeOption.price
    )
  })
}
