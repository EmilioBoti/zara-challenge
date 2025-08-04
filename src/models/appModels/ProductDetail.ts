import { Product } from '../appModels/Product'


export class ProductDetail {

  constructor(
      public id: string,
      public brand: string,
      public name: string,
      public description: string,
      public basePrice: number,
      public rating: number,
      public specs: Specs,
      public colorOptions: ColorOptions[],
      public storageOptions: StorageOptions[],
      public similarProducts: Product[]
  ) {

  }

}

export class Specs {

  constructor(
    public screen: string,
    public resolution: string,
    public processor: string,
    public mainCamera: string,
    public selfieCamera: string,
    public battery: string,
    public os: string,
    public screenRefreshRate: string
  ){}

}

export class ColorOptions {

  constructor(
    public name: string,
    public hexCode: string,
    public imageUrl: string
  ){}

}

export class StorageOptions {
  constructor(
    public capacity: string,
    public price: number
  ){}
}

