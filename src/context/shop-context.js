import {
  useContext,
  component,
  createContext
} from 'https://unpkg.com/haunted/haunted.js';

// https://github.com/matthewp/haunted/issues/75
const createConsumer = (Context) =>
  component(
    function ({ render }) {
      const context = useContext(Context);

      return render(context);
    },
    HTMLElement,
    { useShadowDOM: false }
  );

const ShopContext = createContext({
  products: [],
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {}
});

ShopContext.Consumer = createConsumer(ShopContext);

customElements.define('shop-provider', ShopContext.Provider);
customElements.define('shop-consumer', ShopContext.Consumer);
