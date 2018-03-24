const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isDevBuild = argv.mode !== 'production';
  const targetPath = isDevBuild ? path.join(__dirname, 'dist') : path.join(__dirname, '..', 'Server', 'OAuthManagement', 'wwwroot', 'dist')
  const vendorConfig = {
    stats: { modules: false },
    resolve: { extensions: ['.js'] },
    output: {
      path: targetPath,
      publicPath: 'dist/',
      filename: '[name].js',
      library: '[name]_[hash]'
    },
    module: {
      rules: [
        { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' }
      ]
    },
    entry: {
      vendor: [
        'history',
        'react',
        'react-dom',
        'react-router-dom',
        'react-redux',
        'redux',
        'redux-thunk',
        'react-router-redux'
      ]
    },
    plugins: [
      new webpack.DllPlugin({
        path: path.join(targetPath, '[name]-manifest.json'),
        name: '[name]_[hash]'
      })
    ]
  };

  return [vendorConfig];
};
