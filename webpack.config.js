const path = require('path');

module.exports = {
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, 'src/components/'),
      "@stories": path.resolve(__dirname, 'src/stories/'),
      "@test": path.resolve(__dirname, 'src/test/'),
    },
  },
};
