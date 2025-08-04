
import { ApiService } from './ApiService'
import { ApiProduct } from '../models/apiModels/ApiProduct'
import { ApiProductDetail } from '../models/apiModels/ApiProductDetail'

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

  async getProductDetail({ id }: ProductProps): Promise<ApiProductDetail> {
    return this.apiService.get<ApiProductDetail>(`/products/${id}`)
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