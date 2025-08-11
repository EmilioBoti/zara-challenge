import { render, screen, fireEvent } from '@testing-library/react'

import MobileCard from '../MobileCard'
import { Product } from '@/models/appModels/Product'


const mobileCardProps: Product = {
  id: "GPX-8A",
  brand: "Google",
  name: "Pixel 8a",
  basePrice: 499,
  imageUrl: "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/GPX-8A-obsidiana.webp"
}

const mockOnClickEvent = jest.fn()

describe('ModileCard', () => {
  
  describe('Behavior', () => {
    it('should call OnClickEvent when card is clicked', async () => {
      render(<MobileCard
        width='100%'
        product={mobileCardProps}
        onClickEvent={mockOnClickEvent}
      />)

      const cardProduct = screen.queryByTestId('card-product')
      await fireEvent.click(cardProduct as Element)

      expect(mockOnClickEvent).toHaveBeenCalled()

    })

  })

})