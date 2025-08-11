import { ColorOption, ProductDetail, StorageOption } from '@/models/appModels/ProductDetail'
import { ProductDetailState } from '@/models/uiState/ProductDetailState'
import { render, screen, fireEvent } from '@testing-library/react'
import ProdcutCharacteristc from '../ProdcutCharacteristc'


  const mockProductState: ProductDetailState = {
    product: {
      id: 'APL-I15PM',
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      basePrice: 1319,
      storageOptions: [ 
        {
          capacity: '256 GB',
          price: 1319
        }
      ],
      colorOptions: [
        {
          name: 'Titanio Negro',
          hexCode: '#2C2C2C',
          imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.webp'
        }
      ]
    } as ProductDetail,
    currentPrice: 0,
    currentColor: {
      name: 'Titanio Negro',
      hexCode: '#2C2C2C',
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.webp'
    } as ColorOption,
    currentStorage: {
      capacity: '256 GB',
      price: 1319
    } as StorageOption
  }

  const mockChangeColor = jest.fn()
  const mockChangeStorage = jest.fn()
  const mockAddToCartButtonEvent = jest.fn()



describe('ProdcutCharacteristc', () => {

  describe('Render', () => {

    it('should be the button disable if not color or storage are selected', () => {
      render(<ProdcutCharacteristc 
        productDetailState={mockProductState} 
        isDisabledButton={true}
        changeStorage={mockChangeStorage}
        changeColor={mockChangeColor}
        addToCartButtonEvent={mockAddToCartButtonEvent}
      />)
      
      const button = screen.queryByRole('button')
      expect(button).toBeDisabled()
      
    })    

    it('should be the button enable if color or storage are selected', () => {
      render(<ProdcutCharacteristc 
        productDetailState={mockProductState} 
        isDisabledButton={false}
        changeStorage={mockChangeStorage}
        changeColor={mockChangeColor}
        addToCartButtonEvent={mockAddToCartButtonEvent}
      />)
      
      const button = screen.queryByRole('button')
      expect(button).toBeEnabled()
    })    
    
  })


  describe('Behavoiur', () => {
    
    it('should call addToCartButtonEvent when button is clicked', async () => {
      render(<ProdcutCharacteristc 
        productDetailState={mockProductState} 
        isDisabledButton={false}
        changeStorage={mockChangeStorage}
        changeColor={mockChangeColor}
        addToCartButtonEvent={mockAddToCartButtonEvent}
      />)
  
      const button = screen.queryByRole('button')
      await fireEvent.click(button as Element)
  
      expect(mockAddToCartButtonEvent).toHaveBeenCalled()
    })

  })

})