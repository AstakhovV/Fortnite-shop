import React from 'react'
import {BasketItem} from "./BasketItem";

function BasketList(props) {
    const {order= [],
        decQuantity = Function.prototype,
        incQuantity = Function.prototype,
        removeFromBasket = Function.prototype,
        handleBasketShow = Function.prototype} = props
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)
    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {order.length ?
                order.map ((item) =>
                <BasketItem key={item.id}
                            decQuantity={decQuantity}
                            incQuantity={incQuantity}
                            removeFromBasket={removeFromBasket}
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
                <button className="btn-small">Оформить покупку</button>
            </li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        </ul>
    )
}

export {BasketList}