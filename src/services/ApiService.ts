export class ApiService {

  async request<T>(
    endPonit: string,
    options: RequestInit = {}
  ): Promise<T> {
    let url: string = `${process.env.NEXT_PUBLIC_BASE_URL}${endPonit}`

    let configs: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
        ...options.headers
      },
      ...options
    }

    try {
      let response = await fetch(url, configs)

      if(!response.ok) {
        throw Error(`HTTP error! status: ${response.status}`)
      }
      let data = await response.json()
      return data
    } catch(error) {
      throw error
    }

  }

  // GET request
  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  // POST request
  async post<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // PUT request
  async put<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // DELETE request
  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }

}