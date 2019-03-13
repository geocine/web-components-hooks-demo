import { html } from "lit-html";
import { component } from "haunted";
import { Router } from "../router";

const RouterLink = (element) => {
  const navigate = e => {
    e.preventDefault();
    const router = Router.instance.router;
    router.navigate(e.path[1].href, true);
  };
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
        padding: var(--padding,0);
      }
    </style>
    <a href="${element.to}" @click=${navigate}>
      <slot></slot>
    </a>
  `;
};

RouterLink.observedAttributes = ['to'];

customElements.define(
  "router-link", component(RouterLink)
);