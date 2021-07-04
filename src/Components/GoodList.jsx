import React, {useContext} from 'react'
import {GoodsItem} from "./GoodItem";
import {ShopContext} from "./Context";

function GoodList() {

    const { goods = []} = useContext(ShopContext)

    if (!goods.length){
        return <h3>Nothing was found</h3>
    }
    return <div className="goods">
        {goods.map(good => (
            <GoodsItem key={good.id} {...good} />
        ))}
    </div>
}

export default GoodList