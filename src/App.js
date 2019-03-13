import "./components";

import { Router } from "./router";
import { ProductsPage, CartPage } from "./pages";

const router = new Router("http://localhost:1234", [
  { path: "/", page: ProductsPage, tag: "products-page" },
  { path: "/cart", page: CartPage, tag: "cart-page" }
]);
router.init();
