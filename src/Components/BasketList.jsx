import React, {useContext} from 'react'
import {BasketItem} from "./BasketItem";
import {ShopContext} from "./Context";

function BasketList() {
    const {order= [], handleBasketShow, orderDone} = useContext(ShopContext)
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)
    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {order.length ?
                order.map ((item) =>
                <BasketItem key={item.id}
                            {...item}/>
                )
                :
                <li className="collection-item">
                    Корзина пуста
                </li>
            }
            <li className="collection-item active">Общая стоимость: {totalPrice} руб.
            </li>
            <li className="collection-item">
                {order.length ?                 <button className="btn-small" onClick={orderDone}>Оформить покупку</button>
:                 <button className="btn disabled" onClick={orderDone}>Оформить покупку</button>


                }
            </li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        </ul>
    )
}

export {BasketList}