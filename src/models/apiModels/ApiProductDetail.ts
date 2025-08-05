import { ApiProduct } from "../apiModels/ApiProduct"

export interface ApiSpec {
  screen: string,
  resolution: string,
  processor: string,
  mainCamera: string,
  selfieCamera: string,
  battery: string,
  os: string,
  screenRefreshRate: string
}

export interface ApiColorOption {
  name: string,
  hexCode: string,
  imageUrl: string
}

export interface ApiStorageOption {
  capacity: string,
  price: number
}

export interface ApiProductDetail {
  id: string,
  brand: string,
  name: string,
  description: string,
  basePrice: number,
  rating: number,
  specs: ApiSpec,
  colorOptions: ApiColorOption[],
  storageOptions: ApiStorageOption[],
  similarProducts: ApiProduct[]
};