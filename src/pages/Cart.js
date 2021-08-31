import { html } from 'https://unpkg.com/lit-html/lit-html.js';
import { css } from 'https://unpkg.com/goober/dist/goober.esm.js';

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
                  <div>
                    <strong>${cartItem.title}</strong> - ${cartItem.price}
                    (${cartItem.quantity})
                  </div>
                  <div>
                    <button
                      @click=${context.removeProductFromCart.bind(
                        this,
                        cartItem.id
                      )}
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
