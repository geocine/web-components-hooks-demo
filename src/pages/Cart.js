import { html } from "lit-html";
import { css } from "goober";

const CartClass = css`
  background: dodgerblue;
  color: white;
  padding: 1em;
`;

const CartPage = () => {
  return html`
    <div class=${CartClass}>Cart Page</div>
    <router-link to="/">Home</router-link>
  `;
}

export default CartPage