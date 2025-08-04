import { useState } from "react"

import { ProductService } from '../services/ProductService'
import { Product } from '../models/appModels/Product'
import { ProductState } from '../models/uiState/ProductState'
import { parserApiProduct } from '../utils/mappers/productMapper'

export default function useProduct() {
  const productService: ProductService = new ProductService()
  const [productsState, setProductsState] = useState<ProductState>({
    products: [],
    itemCount: 0
  })
  const [hasError, setHasError] = useState<boolean>(false)

  const getAllProducts = async () => {
    try {
      let result = await productService.getAllProducts({limit: 20})
      setProductsState({
        products: parserApiProduct(result),
        itemCount: 0
      })
    } catch(error) {
      setHasError(true)
    }
  }

  const getProduct = async (id: string) => {
    try {
      let result = await productService.getAllProducts({id: id, limit: 20})
      let mappedResult = parserApiProduct(result)
      setProductsState({
        products: mappedResult,
        itemCount: (id !== '') ? mappedResult.length : 0
      })
    } catch(error) {
      setHasError(true)
    }
  }

  return {
    productsState,
    hasError,
    getProduct,
    getAllProducts
  }

}