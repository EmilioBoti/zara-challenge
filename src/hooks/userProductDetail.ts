import { ColorOption, ProductDetail, StorageOption } from "@/models/appModels/ProductDetail";
import { ProductDetailState } from '../models/uiState/ProductDetailState'
import { useState, useEffect } from "react";

import { ProductService } from '../services/ProductService'
import { parseApiProductDetail } from '../utils/mappers/productMapper'

export default function userProductDetail() {
  const productService = new ProductService()
  const [productDetailState, setProductDetailState] = useState<ProductDetailState>({
    product: new ProductDetail(),
    currentPrice: 0,
    currentColor: undefined,
    currentStorage: undefined
  })
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  useEffect(() => {
    let disable = !(productDetailState.currentColor !== undefined && productDetailState.currentStorage !== undefined)
    setIsDisabledButton(disable)
  },[
    productDetailState.currentColor,
    productDetailState.currentStorage
  ]) 

  const changeColor = (colorOption: ColorOption) => {
    setProductDetailState(
      {
        ...productDetailState,
        currentColor: colorOption
      }
    )
  }

  const changeStorage = (storageOption: StorageOption) => {
    setProductDetailState(
      {
        ...productDetailState,
        currentPrice: storageOption.price,
        currentStorage: storageOption
      }
    )
  }

  const addToCartButtonEvent = () => {
    console.log(productDetailState.currentColor)
    console.log(productDetailState.currentStorage)
  }

  const calculatePrice = () => {

  }

  const getProductDetail = async (id: string) => {
    try {
      const result = await productService.getProductDetail({id: id})
      const parsedResult = parseApiProductDetail(result)
      setProductDetailState(
        {
          product: parsedResult,
          currentPrice: parsedResult.basePrice,
          currentColor: (parsedResult.colorOptions.length > 0) ? parsedResult.colorOptions[0] : undefined,
          currentStorage: (parsedResult.storageOptions.length > 0) ? parsedResult.storageOptions[0] : undefined
        }
      )
    } catch(error) {
      console.log(error)
    }
  }

  return {
    productDetailState,
    isDisabledButton,
    getProductDetail,
    changeColor,
    changeStorage,
    addToCartButtonEvent
  }

}