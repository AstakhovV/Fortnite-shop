import React, { useEffect, useContext} from 'react'
import { API_KEY, API_URL } from '../config'
import {Preloader} from "./Preloader";
import GoodList from "./GoodList";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";
import {Alert} from "./Alert";
import {ShopContext} from "./Context";


function Shop() {
    const {loading, isBasketShow, alertName, setGoods} = useContext(ShopContext)
    useEffect(function getGoods() {

        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then(data => {
                setGoods(data.featured)
            })
    }, [])

    return (
        <main className='container content'>
            <Cart />
            {loading ? <Preloader/> : <GoodList/>}
            {isBasketShow && <BasketList/>}
            {alertName && <Alert />}
        </main>
    )
}

export {Shop}