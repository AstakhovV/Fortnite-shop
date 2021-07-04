import React, {createContext, useReducer} from 'react'
import {reducer} from "./Reducer"

export const ShopContext = createContext();

export const ContextProvider = ({children}) => {

    const initialState = {
        goods: [],
        loading: true,
        order: [],
        isBasketShow: false,
        alertName: ''
    }

    const [value, dispatch] = useReducer(reducer, initialState)

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }
    value.orderDone = () => {
        dispatch({type: 'ORDER_DONE'})
    }
    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
    }
    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    }
    value.incQuantity = (itemId) => {
        dispatch({type: 'INCREASE_QUANTITY', payload: {id: itemId}})
    }
    value.decQuantity = (itemId) => {
        dispatch({type: 'DECREASE_QUANTITY', payload: {id: itemId}})
    }
    value.handleBasketShow = () => {
        dispatch({type: 'TOGGLE_BASKET'})
    }
    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )


}