'use client'

import { ColorOption, ProductDetail, StorageOption } from "@/models/appModels/ProductDetail";
import { ProductStore } from "@/models/appModels/ProductStore";
import { ProductDetailState } from '../models/uiState/ProductDetailState'
import { useState, useEffect } from "react";

import { ProductService } from '../services/ProductService'
import { parseApiProductDetail } from '../utils/mappers/productMapper'
import useCartProduct from "./useCartProduct";
import useNavigation, { NavRoute } from "./navigation/useNavigation";


export default function useProductDetail() {
  const productService = new ProductService()
  const { navigateTo } = useNavigation()
  const { isStored, storeProduct } = useCartProduct()
  const [productDetailState, setProductDetailState] = useState<ProductDetailState>({
    product: new ProductDetail(),
    currentPrice: 0,
    currentColor: undefined,
    currentStorage: undefined
  })
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  useEffect(() => {
    const disable = !isValidProduct(productDetailState)
    setIsDisabledButton(disable)
  },[productDetailState])

  useEffect(() => {
    if(isStored) {
      navigateTo({
        route: NavRoute.CART,
        param: null
      })
    }
  }, [isStored])

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
    if((productDetailState.currentColor !== undefined && productDetailState.currentStorage !== undefined)) {
      const productStore: ProductStore = {
        id: productDetailState.product.id,
        brand: productDetailState.product.brand,
        name: productDetailState.product.name,
        basePrice: productDetailState.product.basePrice,
        storageOption: productDetailState.currentStorage,
        colorOption: productDetailState.currentColor,
        imageUrl: productDetailState.currentColor?.imageUrl
      }
      storeProduct(productStore)
    }

  }

  const isValidProduct = (product: ProductDetailState): boolean => {
    return (product.currentColor !== undefined && product.currentStorage !== undefined)
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
          currentStorage: undefined
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