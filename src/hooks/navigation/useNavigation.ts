'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export interface Navigation {}

export class NavProductDetail implements Navigation {
  constructor(public id: string) {}
}

export class NavBack {
  constructor(){}
}

export class NavCart {
  constructor() {}
}

export default function useNavigation() {
  const router = useRouter()
  const [navigate, setNavigate] = useState<Navigation>({})

  const navigateTo = (nav: Navigation) => {
    setNavigate(nav)
  }

  useEffect(() => {
    if(navigate) {
      if(navigate instanceof NavProductDetail) {
        const nav: NavProductDetail = navigate as NavProductDetail
        router.push(`/product?id=${nav.id}`)
      }
      if(navigate instanceof NavBack) {
        router.back()
      }
      if(navigate instanceof NavCart) {
        router.replace('/cart')
      }
    }
  },[navigate])

  return {
    navigateTo
  }


}