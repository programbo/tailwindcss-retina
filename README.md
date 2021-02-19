# Tailwind CSS Retina plugin

> Enable variants for high pixel density displays

Install the plugin from npm:

```
$ npm install tailwindcss-retina
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  // ...
  variants: {
    // ...
    fontWeight: ['retina'],
    // ...
  },
  plugins: [
    // ...
    require('tailwindcss-retina'),
    // ...
  ],
};
```

This plugin will generate following CSS:

```css
/* ... */
.font-thin {
  font-weight: 100;
}
/* ... */
@media (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi) {
  .retina\:font-thin {
    font-weight: 100;
  }
  /* ... */
}
/* ... */
```

## License

Tailwindcss Retina is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
