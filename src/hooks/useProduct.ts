import { useState } from "react"

import { ProductService } from '../services/ProductService'
import { ProductState } from '../models/uiState/ProductState'
import { parserApiProduct } from '../utils/mappers/productMapper'
import { Product } from "@/models/appModels/Product"

export default function useProduct() {
  const productService: ProductService = new ProductService()
  const [productsState, setProductsState] = useState<ProductState>({
    products: [],
    itemCount: 0
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getProducts = async (id?: string, hasLoading: boolean = true) => {
    setIsLoading(hasLoading)
    try {
      const result = await productService.getAllProducts({id: id, limit: 20})
      const mappedResult = parserApiProduct(result)
      updateProduct(mappedResult, id)
    } catch(error) {
      updateProduct([])
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }
  }

  const updateProduct = (product: Product[], productId?: string) => {
    setProductsState({
      products: product,
      itemCount: (productId !== '' && productId) ? product.length : 0
    })
  }

  return {
    productsState,
    isLoading,
    getProducts
  }

}