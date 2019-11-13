<h1>
  <img
    src="https://raw.githubusercontent.com/stefanfrede/monkey-bar/master/monkey.png"
    width="32"
    height="32"
    alt="monkey"
    align="center" />
  &lt;monkey-bar&gt;
</h1>

> 🛠  Feel free to try it out, but be aware that the component is in alpha.

Progress element built with [lit-element](https://lit-element.polymer-project.org) based on [Bootstrap 4](https://getbootstrap.com).

```html
<monkey-bar
  min="0"
  max="100"
  now="80"
  label striped></monkey-bar>
```

![<monkey-bar> screenshot](https://raw.githubusercontent.com/stefanfrede/monkey-bar/master/screenshot.png)

## Pre-requisite

- [Node.js](https://nodejs.org/en/) >= 10.17.0
- [npm](https://www.npmjs.com) >= 6.13.0 ([npm](https://www.npmjs.com) comes with [Node.js](https://nodejs.org/en/) so there is no need to install it separately)

## Use the component

1. Install the component from [npm](https://www.npmjs.com)

    ```sh
    $ npm i monkey-bar@1.0.0-alpha2
    ```

2. Import the component

    In a JavaScript module:

    ```js
    import 'monkey-bar'
    ```

    In an HTML page:

    ```html
    <script type="module">
      import './path-to/monkey-bar/monkey-bar.js';
    <script>
    ```

    Or:

    ```html
    <script type="module" src="./path-to/monkey-bar/monkey-bar.js"></script>
    ```
3. Add the component to your application or component:

    ```html
    <monkey-bar><monkey-bar>
    ```
