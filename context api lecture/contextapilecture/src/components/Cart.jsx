import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
export const Cart = ()=>{
    const {handleCartUpdate} = useContext(CartContext)
    return (
        <div>
           <button onClick={()=>{
            handleCartUpdate(1)
           }}>Add to cart</button>
        </div>
    )
}