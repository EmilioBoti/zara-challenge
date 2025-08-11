import { render, screen } from '@testing-library/react'
import Header from '../Header'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe('Header', () => {

  describe('Render', () => {
    it('should render the go back arrow', () => {
      render(<Header itemCount={0} isBackVisible={true}/>)
      
      const goBack = screen.getByTestId('goBack')
      expect(goBack).toBeInTheDocument()
    })

    it('should not render the go back arrow', () => {
      render(<Header itemCount={0} isBackVisible={false}/>)

      const goBack = screen.queryByTestId('goBack')
      expect(goBack).toBeNull()
    })

    it('check if item count if set correctly', () => {
      render(<Header itemCount={3}/>)

      const itemCount = screen.queryByText('3')
      expect(itemCount).toBeInTheDocument()
    })

    it('should render cart if visibility true', () => {
      render(<Header itemCount={3} isCartVisible={true}/>)

      const itemCount = screen.queryByTestId('cart-count')
      expect(itemCount).toBeInTheDocument()
    })

    it('should not render cart if visibility false', () => {
      render(<Header itemCount={3} isCartVisible={false}/>)

      const itemCount = screen.queryByTestId('cart-count')
      expect(itemCount).not.toBeInTheDocument()
    })
  })

})