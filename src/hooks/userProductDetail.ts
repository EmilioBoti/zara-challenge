import { ProductDetail } from "@/models/appModels/ProductDetail";
import { useState } from "react";

import { ProductService } from '../services/ProductService'
import { parseApiProductDetail } from '../utils/mappers/productMapper'

export default function userProductDetail() {
  const productService = new ProductService()
  const [productDetail, setProductDetail] = useState<ProductDetail>()

  const getProductDetail = async (id: string) => {
    try {
      const result = await productService.getProductDetail({id: id})
      setProductDetail(parseApiProductDetail(result))
    } catch(error) {
      console.log("error")
    }
  }

  return {
    productDetail,
    getProductDetail
  }

}