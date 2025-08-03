import { useState } from "react"

import { ProductService } from '../services/ProductService'


export default function useProduct() {
  const productService: ProductService = new ProductService()
  const [products, setProducts] = useState<Product[]>([])
  const [hasError, setHasError] = useState<boolean>(false)

  const getProducts = async () => {
    try {
      let result = await productService.getProduct({limit: 20})
      setProducts(result)
    } catch(error) {
      setHasError(true)
    }
  }

  return {
    products,
    hasError,
    getProducts
  }

}