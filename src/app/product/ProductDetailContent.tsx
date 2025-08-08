'use client'

import { motion  } from 'framer-motion'
import { Product } from '../../models/appModels/Product'
import Header from '../../components/header/Header'
import ProdcutCharacteristc from '../../components/productCharacteristic/ProdcutCharacteristc'
import ProductSpecification from '../../components/productSpecification/ProductSpecification'
import MobileCard from '../../components/mobileCard/MobileCard'
import Loader from '@/components/loader/Loader'
import styles from './ProductDetail.module.css'
import { useSearchParams } from 'next/navigation'
import { useRef, useEffect } from 'react'
import useProductDetail from '../../hooks/useProductDetail'
import useNavigation, { NavRoute } from '../../hooks/navigation/useNavigation'
import useCartProduct from '@/hooks/useCartProduct'


export default function ProductDetail() {
  const content = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()
  const { navigateTo } = useNavigation()
  const { productStore} = useCartProduct()
  const productId = searchParams.get('id')

  const { 
    productDetailState,
    isLoading,
    isDisabledButton,
    getProductDetail,
    addToCartButtonEvent,
    changeColor,
    changeStorage
   } = useProductDetail()

  useEffect(() => {
    if(productId) { 
      getProductDetail(productId)
      scrollToTop()
    }
  },[productId])

  const scrollToTop = () => {
    content.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <motion.main className={styles.content}>
      <Header itemCount={productStore.length} isBackVisible={true}/>
      { isLoading ? (
        <Loader/>
      ) : (
        <motion.div ref={content} className={styles.mainContent}>
          <ProdcutCharacteristc
            productDetailState={productDetailState}
            isDisabledButton={isDisabledButton}
            changeStorage={changeStorage}
            changeColor={changeColor}
            addToCartButtonEvent={addToCartButtonEvent}
          />
          <ProductSpecification
            specification={productDetailState.product.getSpeces()}
          />
          <div className={styles.similarContent}>
            <div className={styles.similiarTitleContainer}>
              <h2 className={styles.similarTitle}>SIMILAR ITEMS</h2>
            </div>
            <ul className={styles.similarProducts}>
              { productDetailState.product.similarProducts.map((product, index) => (
                <motion.li key={index}
                  initial={{ opacity: 0, x: -2 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <MobileCard
                    width='320px'
                    product={product}
                    onClickEvent={(product: Product) => { 
                      navigateTo({
                        route: NavRoute.PRODUCT_DETAIL,
                        param: {
                          id: product.id
                        }
                      })
                    } }
                  />
                </motion.li>
              ))}
            </ul>
            <div></div>
          </div>
        </motion.div>
      )}
    </motion.main>
  )
}