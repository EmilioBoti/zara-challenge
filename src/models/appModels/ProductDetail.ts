import { Product } from '../appModels/Product'


export class ProductDetail {

  constructor(
      public id: string = '',
      public brand: string = '',
      public name: string = '',
      public description: string = '',
      public basePrice: number = 0,
      public rating: number = 0,
      public specs: Spec = new Spec(),
      public colorOptions: ColorOption[] = [],
      public storageOptions: StorageOption[] = [],
      public similarProducts: Product[] = []
  ) {

  }

}

export class Spec {

  constructor(
    public screen: string = '',
    public resolution: string = '',
    public processor: string = '',
    public mainCamera: string = '',
    public selfieCamera: string = '',
    public battery: string = '',
    public os: string = '',
    public screenRefreshRate: string = ''
  ){}

}

export class ColorOption {

  constructor(
    public name: string = '',
    public hexCode: string = '',
    public imageUrl: string = ''
  ){}

}

export class StorageOption {
  constructor(
    public capacity: string = '',
    public price: number = 0
  ){}
}

