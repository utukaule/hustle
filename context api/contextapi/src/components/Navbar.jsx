import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export const Navbar = () => {

    const { cartCount } = useContext(CartContext);

    return (
        <div>
            <h4>Cart : {cartCount}</h4>
        </div>
    )
}