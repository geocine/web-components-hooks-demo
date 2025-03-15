import { useReducer, component, html } from 'haunted';

import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducers.js';

const GlobalState = () => {
  const products = [
    { id: 'p1', title: 'Exalted Orb', price: 120.99 },
    { id: 'p2', title: 'Tabula Rasa', price: 15.99 },
    { id: 'p3', title: 'Divine Orb', price: 180.50 },
    { id: 'p4', title: 'Headhunter Belt', price: 75.00 },
    { id: 'p5', title: 'Chaos Orb', price: 1.99 }
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
