import { html } from 'https://unpkg.com/haunted/haunted.js';
// https://github.com/matthewp/haunted/issues/306
// import { html } from 'https://unpkg.com/lit-html/lit-html.js';
import { useReducer, component } from 'https://unpkg.com/haunted/haunted.js';

import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducers.js';

const GlobalState = () => {
  const products = [
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99 }
  ];

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  return html`
    <shop-provider
      .value=${{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      <slot></slot>
    </shop-provider>
  `;
};

export default GlobalState;

customElements.define('global-state', component(GlobalState));
