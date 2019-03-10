import { Router } from "./router";
import { component } from "haunted";
import { RouterLink } from "./components";
import { ProductsPage, CartPage } from "./pages";

customElements.define("router-link", component(RouterLink));

const router = new Router("http://localhost:1234", [
  { path: "/", page: ProductsPage, tag: "products-page" },
  { path: "/cart", page: CartPage, tag: "cart-page" }
]);
router.init();
