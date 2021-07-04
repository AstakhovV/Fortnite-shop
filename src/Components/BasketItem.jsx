import React from 'react'

function BasketItem(props) {
    const {id,
        name,
        price,
        icon,
        quantity,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype,
        removeFromBasket = Function.prototype} = props

    return (
        <li className="collection-item avatar">
            {(icon) ? <img src={icon} alt={icon} className="circle basket-avatar"/>
                : <img src={`https://via.placeholder.com/50x50?text=${name}`} alt={name} className="circle"/>
            }
            <span className="title">{name}</span>
            <p>{name}
            <i className="material-icons basket-quantity"
               onClick={() => decQuantity(id)}>remove</i>x{quantity}
                <i className="material-icons basket-quantity"
                              onClick={() => incQuantity(id)}>add</i> = {price * quantity} руб.</p>
            <span className="secondary-content">
                <i className="material-icons basket-delete"
                onClick={()=>removeFromBasket(id)}>close</i></span>
        </li>
    )
}

export {BasketItem}