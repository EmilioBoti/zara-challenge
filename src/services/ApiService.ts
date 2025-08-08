export class ApiService {

  async request<T>(
    endPonit: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url: string = `${process.env.NEXT_PUBLIC_BASE_URL}${endPonit}`

    const configs: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
        ...options.headers
      },
      ...options
    }

    try {
      const response = await fetch(url, configs)

      if(!response.ok) {
        throw Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch(error) {
      throw error
    }

  }

  // GET request
  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  // POST request
  async post<T>(endpoint: string, data: T): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // PUT request
  async put<T>(endpoint: string, data: T): Promise<T> {
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