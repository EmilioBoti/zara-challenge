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
  ) {}

  getSpeces(): SpecItem[] {
    const specsNames: SpecItem[] = []
    specsNames.push(
      { name: "brand", value: this.brand },
      { name: "name", value: this.name },
      { name: "description", value: this.description },
      { name: "screen", value: this.specs.screen },
      { name: "resolution", value: this.specs.resolution },
      { name: "processor", value: this.specs.processor },
      { name: "mainCamera", value: this.specs.mainCamera },
      { name: "selfieCamera", value: this.specs.selfieCamera },
      { name: "battery", value: this.specs.battery },
      { name: "os", value: this.specs.os },
      { name: "screen Refresh Rate", value: this.specs.screenRefreshRate },
    )
    return specsNames
  }


}

export class SpecItem {
  constructor(
    public name: string,
    public value: string
  ){}
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

