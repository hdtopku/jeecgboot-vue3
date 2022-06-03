module.exports = {
  plugins: {
    autoprefixer: {},
    postcssPlugin: 'internal:charset-removal',
    AtRule: {
      charset: (atRule) => {
        if (atRule.name === 'charset') {
          atRule.remove();
        }
      },
    },
  },
};
