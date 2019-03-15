import { html } from "lit-html";
import { component } from "haunted";
import { Router } from "../router";

const RouterLink = element => {
  const navigate = e => {
    e.preventDefault();
    const router = Router.instance.router;
    const link = e.path.find(node => node.nodeName == "A");
    router.navigate(link.href, true);
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
      class="${active ? "active" : ""}"
    >
      <slot></slot>
    </a>
  `;
};

RouterLink.observedAttributes = ["to"];

customElements.define("router-link", component(RouterLink));
