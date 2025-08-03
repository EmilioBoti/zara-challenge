
import { ApiService } from './ApiService'

type ProductProps = {
  limit?: number
}

export class ProductService {
  private apiService: ApiService

  constructor() {
    this.apiService = new ApiService()
  }

  async getProduct({ limit }: ProductProps): Promise<Product[]> {
    let limitQuery: string = (limit) ? `?limit=${limit}` : ''
    return this.apiService.get<Product[]>(`/products${limitQuery}`)
  }


}