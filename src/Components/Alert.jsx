import React, {useEffect, useContext} from 'react'
import {ShopContext} from "./Context";

function Alert() {
    const {alertName: name = '', closeAlert} = useContext(ShopContext)
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000)
        return () => {
            clearTimeout(timerId)
        }
    }, [name])
    return <div id="toast-container">
        {name.charAt(0) === '№' ?
            <div className="toast rounded">Заказ {name} оформлен</div>
:         <div className="toast rounded">{name} добавлен в корзину</div>


        }
    </div>
}

export {Alert}