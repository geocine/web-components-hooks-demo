import './components/index.js';
import './context/shop-context.js';
import './context/GlobalState.js';
import { Router } from './router.js';
import { ProductsPage, CartPage } from './pages/index.js';

const router = new Router('http://localhost:3000', [
  { path: '/', page: ProductsPage, tag: 'products-page' },
  { path: '/cart', page: CartPage, tag: 'cart-page' }
]);
router.init();
