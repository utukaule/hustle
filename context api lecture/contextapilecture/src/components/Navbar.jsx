import { useContext } from 'react'
import {CreateContext} from '../contexts/CartContext'
export const Navbar = ()=>{
    const value = useContext(CreateContext)
    return (
        <div>
            <h3>Cart : {value}</h3>
        </div>
    )
}