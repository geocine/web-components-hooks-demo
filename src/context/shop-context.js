import { useContext, component } from "haunted";

const contextEvent = "haunted.context";

export const createContext = defaultValue => {
  const Context = {};

  Context.Provider = class extends HTMLElement {
    constructor() {
      super();
      this.listeners = [];

      this.eventHandler = event => {
        const { detail } = event;

        if (detail.Context === Context) {
          detail.value = this.value;

          detail.unsubscribe = () => {
            const index = this.listeners.indexOf(detail.callback);

            if (index > -1) {
              this.listeners.splice(index, 1);
            }
          };

          this.listeners.push(detail.callback);

          event.stopPropagation();
        }
      };

      this.addEventListener(contextEvent, this.eventHandler);
    }

    disconnectedCallback() {
      this.removeEventListener(contextEvent, this.eventHandler);
    }

    set value(value) {
      this._value = value;
      this.listeners.forEach(callback => callback(value));
    }

    get value() {
      return this._value;
    }
  };

  Context.Consumer = component(
    function({ render }) {
      const context = useContext(Context);

      return render(context);
    },
    HTMLElement,
    { useShadowDOM: false }
  );

  Context.defaultValue = defaultValue;

  return Context;
};

const ShopContext = createContext({
  products: [
    { id: "p1", title: "Gaming Mouse", price: 29.99 },
    { id: "p2", title: "Harry Potter 3", price: 9.99 },
    { id: "p3", title: "Used plastic bottle", price: 0.99 },
    { id: "p4", title: "Half-dried plant", price: 2.99 }
  ],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});

customElements.define("shop-provider", ShopContext.Provider);
customElements.define("shop-consumer", ShopContext.Consumer);
