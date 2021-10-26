import { html } from 'https://unpkg.com/haunted/haunted.js';
// https://github.com/matthewp/haunted/issues/306
// import { html } from 'https://unpkg.com/lit-html/lit-html.js';
import { css } from 'https://unpkg.com/goober/dist/goober.esm.js';

const ProductsStyle = css`
  width: 50rem;
  max-width: 90%;
  margin: 2rem auto;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid #35495e;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ProductsPage = () => {
  return html`
    <shop-consumer
      .render=${(context) => html`
        <main-navigation
          .cartItemNumber=${context.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)}
        >
        </main-navigation>
        <main class="${ProductsStyle}">
          <ul>
            ${context.products.map(
              (product) => html`
                <li>
                  <div>
                    <strong>${product.title}</strong> - ${product.price}
                  </div>
                  <div>
                    <button
                      @click=${context.addProductToCart.bind(this, product)}
                    >
                      Add to Cart
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

export default ProductsPage;
