import React, {useContext} from 'react'
import {ShopContext} from "./Context";

function BasketItem(props) {
    const {id,
        name,
        price,
        icon,
        quantity} = props
const {decQuantity, incQuantity, removeFromBasket} = useContext(ShopContext)
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