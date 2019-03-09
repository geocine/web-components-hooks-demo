import Navigo from "navigo";
import { component } from "haunted";

export class Router {
  constructor(root,routes) {
    if (!Router.instance) {
      Router.instance = this;
    } else {
      throw new Error("use getInstance");
    }

    this.router = new Navigo(root, false);
    this.routes = routes;
    return Router.instance;
  }

  static get getInstance() {
    return Router.instance;
  }

  static inject(component) {
    const outlet = document.querySelector("app-outlet");
    while (outlet.firstChild) {
      outlet.removeChild(outlet.firstChild);
    }
    outlet.appendChild(document.createElement(component));
  }

  init() {
    this.routes.forEach(route => {
      this.router
      .on(route.path, params => {
        if(!customElements.get(route.tag)){
          customElements.define(route.tag,component(route.page));
        }
        Router.inject(route.tag);
      })
      .resolve();
    });
  }
}
Router.instance = null;
