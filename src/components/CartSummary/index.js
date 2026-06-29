import {useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [orderPlaced, setOrderPlaced] = useState(false)

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value

        const totalAmount =
          cartList.length > 0
            ? cartList.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0,
              )
            : 0

        const totalItems =
          cartList.length > 0
            ? cartList.reduce((acc, item) => acc + item.quantity, 0)
            : 0

        return (
          <div className="cart-summary-container">
            <h1 className="order-total-heading">
              Order Total: <span>Rs {totalAmount}/-</span>
            </h1>

            <p className="items-count">{totalItems} Items in cart</p>

            <Popup
              modal
              trigger={
                <button type="button" className="checkout-button">
                  Checkout
                </button>
              }
            >
              {close => (
                <div className="popup-container">
                  {!orderPlaced ? (
                    <>
                      <h2 className="payment-heading">Select Payment Method</h2>

                      <div className="payment-options">
                        <label>
                          <input type="radio" disabled />
                          Card
                        </label>

                        <label>
                          <input type="radio" disabled />
                          Net Banking
                        </label>

                        <label>
                          <input type="radio" disabled />
                          UPI
                        </label>

                        <label>
                          <input type="radio" disabled />
                          Wallet
                        </label>

                        <label>
                          <input
                            type="radio"
                            name="payment"
                            value="COD"
                            onChange={e => setPaymentMethod(e.target.value)}
                          />
                          Cash on Delivery
                        </label>
                      </div>

                      <hr />

                      <p>Total Items : {totalItems}</p>

                      <p>Total Price : Rs {totalAmount}/-</p>

                      <button
                        type="button"
                        className="confirm-button"
                        disabled={paymentMethod !== 'COD'}
                        onClick={() => setOrderPlaced(true)}
                      >
                        Confirm Order
                      </button>
                    </>
                  ) : (
                    <>
                      <h2 className="success-message">
                        Your order has been placed successfully
                      </h2>

                      <button
                        type="button"
                        className="close-button"
                        onClick={() => {
                          setOrderPlaced(false)
                          setPaymentMethod('')
                          close()
                        }}
                      >
                        Close
                      </button>
                    </>
                  )}
                </div>
              )}
            </Popup>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary
