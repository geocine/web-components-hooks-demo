import { html } from "lit-html";
import { Router } from "../router";

const RouterLink = ({to="/"}) => {
  const navigate = e => {
    e.preventDefault();
    const router = Router.instance.router;
    router.navigate(e.path[1].href, true);
  };

  return html`
    <a href="${to}" @click=${navigate}>
      <slot></slot>
    </a>
  `;
};

RouterLink.observedAttributes = ['to'];

export default RouterLink;
