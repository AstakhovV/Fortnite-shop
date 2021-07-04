import React from 'react'
import {GoodsItem} from "./GoodItem";

function GoodList(props) {

    const { goods = [], addToBasket = Function.prototype} = props

    if (!goods.length){
        return <h3>Nothing was found</h3>
    }
    return <div className="goods">
        {goods.map(good => (
            <GoodsItem key={good.id} {...good} addToBasket={addToBasket}/>
        ))}
    </div>
}

export default GoodList