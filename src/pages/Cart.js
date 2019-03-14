import { html } from "lit-html";
import { css } from "goober";

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
    <main-navigation></main-navigation>
    <main class="${CartClass}">
      <ul>
          <li>
            <div>
              <strong>Title</strong> - 100 (2)
            </div>
            <div>
              <button>
                Remove from Cart
              </button>
            </div>
          </li>
      </ul>
    </main>
  `;
};

export default CartPage;
