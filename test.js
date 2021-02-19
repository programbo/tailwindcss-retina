const merge = require('lodash/merge');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const customPlugin = require('./index.js');

expect.extend({
  toMatchCss: cssMatcher,
});

function generatePluginCss(overrides) {
  const config = {
    theme: {
      fontWeight: {
        bold: 700,
      },
    },
    variants: {
      fontWeight: ['retina'],
    },
    corePlugins: ['fontWeight'],
    plugins: [customPlugin],
  };

  return postcss(tailwindcss(merge(config, overrides)))
    .process('@tailwind utilities', {
      from: undefined,
    })
    .then(({ css }) => css);
}

test('utility classes can be generated', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(`
    .font-bold {
      font-weight: 700;
    }

    @media (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi) {
      .retina\\:font-bold {
        font-weight: 700;
      }
    }
    `);
  });
});
