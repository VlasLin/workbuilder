const path = require('path');

module.exports = (env) => {
  const isProduction = env.production;

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/js/main.js',
    output: {
      path: path.resolve(__dirname, 'dist/js'),
      filename: isProduction ? 'bundle.min.js' : 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    devtool: isProduction ? false : 'source-map'
  };
};
