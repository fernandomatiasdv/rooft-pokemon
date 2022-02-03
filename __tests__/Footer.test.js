import { render, screen } from '@testing-library/react'
import Footer from '../src/components/Footer'

describe('Footer', () => {
    const poweredBy = 'Powered by Fernando del Valle'
    beforeEach(()=>{
        render(<Footer />)
    })
    it('Muestra la leyenda "Powered by Fernando del Valle"', () => {
        const leyenda = screen.getByText(poweredBy)
        expect(leyenda).toBeInTheDocument
    })
    it('Al hacer click sobre la leyenda te redirige al usuario de LinkedIn', () => {
        const redirige = screen.getByText(poweredBy);
        expect(redirige.closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/fernando-del-valle/') 
    })
})