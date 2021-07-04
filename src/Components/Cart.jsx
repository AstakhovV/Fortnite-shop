
function Cart(props) {
const {quantity = 0, handleBasketShow= Function.prototype} = props
    return (
        <div className="cart #01579b light-blue darken-4 white-text"
        onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="card-quantity">{quantity}</span> : null}
        </div>
    )
}

export {Cart}