import React, {useContext} from 'react'
import {ShopContext} from "./Context";

export function GoodsItem(props) {
    const {id, name, icon, description, price, full_background} = props
    const {addToBasket} = useContext(ShopContext)
    return (
        <div className="card" id={id}>
            <div className="card-image">
                {description === '' ?
                    <img src={`https://via.placeholder.com/300x300?text=Image not available`} alt={name}/>
                    : <img src={full_background} alt={name}/>

                }
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="btn" onClick={() => addToBasket({
                    id, name, price, icon, full_background
                })}>Купить
                </button>
                <span className="right" style={{fontSize: '1.5rem'}}>{price} руб.</span>
            </div>
        </div>
    )
}
