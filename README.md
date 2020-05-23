# Web Components + Hooks Demo

This demonstrates a basic shopping cart built using Web Components. It also has State Management, Routing, CSS-in-JS and *does not need a build step*.

<br>
<p align="center">
 <img src="https://i.imgur.com/OESQ8sq.gif"></img>
</p>

Technologies used:
- Web Components through [lit-html](https://github.com/Polymer/lit-html)
- Hooks through [haunted](https://github.com/matthewp/haunted)
- Context API through [haunted](https://github.com/matthewp/haunted)
- Routing through [navigo](https://github.com/krasimir/navigo)
- CSS-in-JS through [goober](https://github.com/cristianbote/goober)

### Usage

This [demo](https://web-components-hooks.netlify.com/) runs without a build step. 

### Development
Just run on a webserver with `index.html` as a fallback page. I suggest using [lite-server](https://github.com/johnpapa/lite-server) on root directory. The `yarn start` script uses `lite-server`.

```sh
yarn
yarn start
```

If you are serving this on a different `host:port` make sure to replace all instances of 
```
http://localhost:3000
```

