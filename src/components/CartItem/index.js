import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value

      const {cartItemDetails} = props
      const {id, title, brand, quantity, price, imageUrl} = cartItemDetails

      const onRemoveCartItem = () => {
        removeCartItem(id)
      }

      const onIncreaseQuantity = () => {
        incrementCartItemQuantity(id)
      }

      const onDecreaseQuantity = () => {
        decrementCartItemQuantity(id)
      }

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={title} />

          <div className="cart-item-details-container">
            <div>
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>

            <div className="cart-quantity-container">
              <button
                type="button"
                data-testid="minus"
                className="quantity-controller-button"
                onClick={onDecreaseQuantity}
              >
                <BsDashSquare color="#52606D" size={12} />
              </button>

              <p className="cart-quantity">{quantity}</p>

              <button
                type="button"
                data-testid="plus"
                className="quantity-controller-button"
                onClick={onIncreaseQuantity}
              >
                <BsPlusSquare color="#52606D" size={12} />
              </button>
            </div>

            <div>
              <p className="cart-total-price">Rs {price * quantity}/-</p>

              <button
                type="button"
                data-testid="remove"
                className="remove-button"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>

          <button
            type="button"
            className="delete-button"
            onClick={onRemoveCartItem}
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
