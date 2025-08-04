import { ApiProduct } from "../apiModels/ApiProduct"

export interface ApiSpecs {
  screen: string,
  resolution: string,
  processor: string,
  mainCamera: string,
  selfieCamera: string,
  battery: string,
  os: string,
  screenRefreshRate: string
}

export interface ApiColorOptions {
  name: string,
  hexCode: string,
  imageUrl: string
}

export interface ApiStorageOptions {
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
  specs: ApiSpecs,
  colorOptions: ApiColorOptions[],
  storageOptions: ApiStorageOptions[],
  similarProducts: ApiProduct[]
};