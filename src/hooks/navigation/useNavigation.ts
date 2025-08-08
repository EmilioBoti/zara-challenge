'use client'

import { useRouter } from 'next/navigation'

export enum NavRoute {
  HOME = '/',
  CART  = '/cart',
  PRODUCT_DETAIL  = '/product',
  BACK  = ''
}

export interface NavData {
  id: string | undefined | null
}

export interface Navigation {
  route: NavRoute,
  param: NavData | null | undefined
}

export default function useNavigation() {
  const router = useRouter()

  const navigateTo = (navigate: Navigation) => {
    switch(navigate.route) {
      case NavRoute.HOME:
        router.push(NavRoute.HOME)
        break
      case NavRoute.PRODUCT_DETAIL:
        router.push(`${NavRoute.PRODUCT_DETAIL}?id=${navigate.param?.id}`)
        break
      case NavRoute.CART:
        router.push(NavRoute.CART)
        break
      case NavRoute.BACK:
        router.back()
        break
    }
  }
  
  return {
    navigateTo
  }

}