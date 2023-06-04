import React from 'react'
import './ItemListContainer.css'
const ItemListGreeting = ({greeting}) => {
return (
    <div className='greeting'>
        <h1>{greeting}</h1>
    </div>
)
}

export default ItemListGreeting