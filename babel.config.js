const customMinifyCSS = require('./utils/custom-minify-css.js');

module.exports = api => {
  api.cache(true);

  return {
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      '@babel/plugin-proposal-class-properties',
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 3,
        },
      ],
      [
        'template-html-minifier',
        {
          modules: {
            'lit-html': ['html'],
            'lit-element': ['html', { name: 'css', encapsulation: 'style' }],
          },
          htmlMinifier: {
            collapseWhitespace: true,
            removeComments: true,
            caseSensitive: true,
            minifyCSS: customMinifyCSS,
          },
        },
      ],
      ['bundled-import-meta', { importStyle: 'baseURI' }],
    ].filter(Boolean),
    presets: [
      [
        '@babel/preset-env',
        {
          corejs: 3,
          exclude: ['@babel/plugin-transform-template-literals'],
          modules: false,
          useBuiltIns: 'usage',
        },
      ],
    ],
    env: {
      cjs: {
        presets: [
          [
            '@babel/env',
            {
              corejs: 3,
              targets: {
                node: 10,
              },
              useBuiltIns: 'usage',
            },
          ],
        ],
      },
    },
  };
};
