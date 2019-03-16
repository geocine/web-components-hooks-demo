# Web Components + Hooks Demo

This demonstrates a basic shopping cart built using Web Components. It also has State Management, Routing, CSS-in-JS and *does not require a build step*.

<br>
<p align="center">
 <img src="https://i.imgur.com/yT9B48W.png"></img>
</p>

Technologies used:
- Web Components through [lit-html](https://github.com/Polymer/lit-html)
- Hooks through [haunted](https://github.com/matthewp/haunted)
- Context API through [haunted](https://github.com/matthewp/haunted)
- Routing through [navigo](https://github.com/krasimir/navigo)
- CSS-in-JS through [goober](https://github.com/cristianbote/goober)
- Build through [parceljs](https://github.com/parcel-bundler/parcel) - *optional*

### Usage
```sh
yarn
yarn start
```

### Without Build

Can also be used without a build step. Checkout the [gh-pages branch](https://github.com/geocine/web-components-hooks-demo/tree/gh-pages). 

Just run on a webserver with `index.html` as a fallback page. I suggest using [lite-server](https://github.com/johnpapa/lite-server) on root directory.

```sh
lite-server
```

You can also checkout the github page [demo here](https://geocine.github.io/web-components-hooks-demo/) that uses the [gh-pages branch](https://github.com/geocine/web-components-hooks-demo/tree/gh-pages).

If you are using the static version on a different `host:port` make sure to replace all instances of 
```
https://geocine.github.io/web-components-hooks-demo/
```

