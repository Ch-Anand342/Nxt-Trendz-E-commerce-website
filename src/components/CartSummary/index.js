import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalAmount =
        Array.isArray(cartList) && cartList.length > 0
          ? cartList.reduce((acc, item) => acc + item.price * item.quantity, 0)
          : 0

      const totalItems =
        Array.isArray(cartList) && cartList.length > 0
          ? cartList.reduce((acc, item) => acc + item.quantity, 0)
          : 0

      return (
        <div className="cart-summary-container">
          <h1 className="order-total-heading">
            Order Total: Rs {totalAmount}/-
          </h1>
          <p className="items-count">{`${totalItems} Items in cart`}</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
