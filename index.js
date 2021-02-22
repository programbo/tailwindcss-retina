const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addVariant, e, postcss }) {
  addVariant('retina', ({ container, separator }) => {
    const mediaQuery = postcss.atRule({
      name: 'media',
      params: [
        '(-webkit-min-device-pixel-ratio: 2)',
        '(min-resolution: 192dpi)',
      ].join(),
    });
    mediaQuery.append(container.nodes);
    container.append(mediaQuery);
    mediaQuery.walkRules(rule => {
      rule.selector = `.${e(`retina${separator}${rule.selector.slice(1)}`)}`;
    });
  });
});
