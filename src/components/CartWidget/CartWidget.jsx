import React from 'react'
import './CartWidget.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const CartWidget = () => {
return (
    <div>
    <AiOutlineShoppingCart className="icon"/>
        <span className='smallText'>
        8
        </span>
    </div>
)
}

export default CartWidget