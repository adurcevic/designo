module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 2,
        features: {
          'custom-media-queries': true,
        },
      },
    ],
  ],
};
