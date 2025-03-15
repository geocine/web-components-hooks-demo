import { html } from 'lit-html';
import { css } from 'goober';
const CartClass = css`
  width: 50rem;
  max-width: 90%;
  margin: 2rem auto;

  p {
    text-align: center;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid #00179b;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .item-info {
    display: flex;
    align-items: center;
  }
  
  .item-name {
    font-weight: bold;
  }
  
  .item-price {
    margin-left: 0.5rem;
  }
  
  .quantity-controls {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
  
  .quantity-controls button {
    margin: 0 0.25rem;
    padding: 0.25rem 0.5rem;
    background: #41b883;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .quantity-controls button:hover {
    background: #35495e;
  }
  
  .quantity-display {
    min-width: 1.5rem;
    text-align: center;
  }
  
  .remove-button {
    margin-left: 1rem;
  }
`;

const CartPage = () => {
  return html`
    <shop-consumer
      .render=${(context) => html`
        <main-navigation
          .cartItemNumber=${context.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)}
        >
        </main-navigation>
        <main class="${CartClass}">
          ${context.cart.length <= 0 ? html` <p>No Item in the Cart!</p> ` : ''}
          <ul>
            ${context.cart.map(
              (cartItem) => html`
                <li>
                  <div class="item-info">
                    <span class="item-name">${cartItem.title}</span>
                    <span class="item-price"> - $${cartItem.price.toFixed(2)}</span>
                    <div class="quantity-controls">
                      <button
                        @click=${context.removeProductFromCart.bind(
                          this,
                          cartItem.id
                        )}
                      >
                        -
                      </button>
                      <span class="quantity-display">${cartItem.quantity}</span>
                      <button
                        @click=${context.addProductToCart.bind(
                          this,
                          cartItem
                        )}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <button
                      class="remove-button"
                      @click=${() => {
                        // Remove all quantities of this item
                        for (let i = 0; i < cartItem.quantity; i++) {
                          context.removeProductFromCart(cartItem.id);
                        }
                      }}
                    >
                      Remove from Cart
                    </button>
                  </div>
                </li>
              `
            )}
          </ul>
        </main>
      `}
    >
    </shop-consumer>
  `;
};

export default CartPage;
