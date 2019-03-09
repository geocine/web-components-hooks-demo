import { html } from "lit-html";
import { useState } from "haunted";
import { css } from "goober";

const CountClass = css`
  background: dodgerblue;
  color: white;
  padding: 1em;
`;

const ProductsPage = () => {
  const [count, setCount] = useState(0);

  return html`
    <div id="count" class="${CountClass}">${count}</div>
    <button type="button" @click=${() => setCount(count + 1)}>Increment</button>
    <a href="/cart">Cart</a>
  `;
}

export default ProductsPage