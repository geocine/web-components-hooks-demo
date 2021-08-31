import { html } from 'https://unpkg.com/lit-html/lit-html.js';
import { component } from 'https://unpkg.com/haunted/haunted.js';
import { Router } from '../router.js';

const RouterLink = (element) => {
  const navigate = (e) => {
    e.preventDefault();
    const router = Router.instance.router;
    const path = e.path || (e.composedPath && e.composedPath());
    const link = path.find((node) => node.nodeName == 'A');
    const url = new URL(link.href);
    router.navigate(url.pathname, true);
  };
  const active = element.to == location.pathname;

  return html`
    <style>
      :host {
        display: block;
      }
      a {
        display: block;
        text-decoration: var(--text-decoration, none);
        color: var(--color, black);
        border-radius: var(--border-radius, 0);
        padding: var(--padding, 0);
      }
      a.active {
        background: var(--background-active, white);
        color: var(--color-active, black);
      }
    </style>
    <a
      href="${element.to}"
      @click=${navigate}
      class="${active ? 'active' : ''}"
    >
      <slot></slot>
    </a>
  `;
};

RouterLink.observedAttributes = ['to'];

customElements.define('router-link', component(RouterLink));
