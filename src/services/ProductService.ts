
import { ApiService } from './ApiService'
import { ApiProduct } from '../models/apiModels/ApiProduct'

type ProductProps = {
  id?: string
  limit?: number
  offset?: number
}

export class ProductService {
  private apiService: ApiService

  constructor() {
    this.apiService = new ApiService()
  }

  async getAllProducts(params: ProductProps): Promise<ApiProduct[]> {
    const paramsQuery = this.params(params)
    return this.apiService.get<ApiProduct[]>(`/products${paramsQuery}`)
  }

  async getProduct(params: ProductProps): Promise<ApiProduct[]> {
    return this.getAllProducts(params)
  } 

  private params({ id, limit, offset }: ProductProps): string {
    const params = new URLSearchParams()
    if (id) params.append("search", id)
    if (limit !== null && limit !== undefined) params.append("limit", limit.toString())
    if (offset !== null && offset !== undefined) params.append("offset", offset.toString())
    const queryString = params.toString()
    return `${queryString ? `?${queryString}` : ""}`;
  }

}