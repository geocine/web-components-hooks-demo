import { html } from "lit-html";
import { useState } from "haunted";
import { css } from "goober";

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
  const [count, setCount] = useState(0);

  return html`
  <main-navigation></main-navigation>
    <main class="${ProductsStyle}">
      <ul>
        <li>
          <div><strong>Title</strong> - 100</div>
          <div>
            <button>
              Add to Cart
            </button>
          </div>
        </li>
      </ul>
    </main>
  `;
};

export default ProductsPage;
