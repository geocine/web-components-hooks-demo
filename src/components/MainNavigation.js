import { html } from 'https://unpkg.com/haunted/haunted.js';
// https://github.com/matthewp/haunted/issues/306
// import { html } from 'https://unpkg.com/lit-html/lit-html.js';
import { component } from 'https://unpkg.com/haunted/haunted.js';
import { css } from 'https://unpkg.com/goober/dist/goober.esm.js';

const MainNavigationStyle = css`
  width: 100%;
  height: 4.5rem;
  background: #41b883;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 0 1rem;
    border-radius: 5px;
    router-link {
      --color: white;
      --border-radius: 5px;
      --padding: 0.5rem 1rem;
    }
    &:hover,
    &:active {
      background: white;
      color: #00179b;
    }

    &:hover router-link,
    &:active router-link {
      --color: black;
    }
  }
`;

const MainNavigation = ({ cartItemNumber = '0' }) => {
  return html`
    <header class="${MainNavigationStyle}">
      <nav>
        <ul>
          <li>
            <router-link to="/">Products</router-link>
          </li>
          <li>
            <router-link to="/cart">Cart (${cartItemNumber})</router-link>
          </li>
        </ul>
      </nav>
    </header>
  `;
};

export default MainNavigation;

customElements.define(
  'main-navigation',
  component(MainNavigation, HTMLElement, { useShadowDOM: false })
);
