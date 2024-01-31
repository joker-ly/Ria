import React, { Component, Fragment } from 'react'
import CartList from '../components/cart/CartList'
import OrderList from '../components/cart/OrderList'

export class CartListPage extends Component {
  render() {
    return (
      <Fragment>
        <CartList />
        <OrderList />
      </Fragment>
    )
  }
}

export default CartListPage
