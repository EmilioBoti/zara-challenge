import { render, screen } from '@testing-library/react'

import { Product } from '@/models/appModels/Product'
import ListProduct from '../ListProduct'


const mockMobileCardItem: Product[] = [
  {
    id: "GPX-8A",
    brand: "Google",
    name: "Pixel 8a",
    basePrice: 499,
    imageUrl: "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/GPX-8A-obsidiana.webp"
  },
  {
    id: "APL-I15PM",
    brand: "apple",
    name: "iPhone 15 Pro Max",
    basePrice: 1319,
    imageUrl: "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.webp"
  }

] 

const mockOnClickEvent = jest.fn()

describe('ListProduct render', () => {


  it('should render a list with the same lenght of items', () => {
    render(<ListProduct items={mockMobileCardItem} onClickEvent={mockOnClickEvent}/>)

    const listProduct = screen.queryAllByRole('listitem')
    expect(listProduct).toHaveLength(mockMobileCardItem.length)

  })

})

