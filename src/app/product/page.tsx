'use client'

import { Suspense } from 'react'
import ProductDetailContent from './ProductDetailContent'


export default function ProductDetail() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProductDetailContent/>
    </Suspense>
  )
}