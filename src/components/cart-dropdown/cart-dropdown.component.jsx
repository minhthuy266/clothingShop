import React from 'react'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.componen'
import {createStructuredSelector} from 'reselect'

import CustomButton from '../custom-button/custom-button.component'
import {selectCartItems} from '../../redux/cart/cartSelectors'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss'
import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from './cart-dropdown.styles'

const CartDropdown = ({cartItems, history, dispatch}) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty!</EmptyMessageContainer>
      )}
    </CartItemsContainer>

    <CartDropdownButton
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}>
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
