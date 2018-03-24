const path = require('path');
const webpack = require('webpack');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

module.exports = (env, argv) => {
  const isDevBuild = argv.mode !== 'production';
  const targetPath = isDevBuild ? path.join(__dirname, 'dist') : path.join(__dirname, '..', 'Server', 'SocialLogin', 'wwwroot', 'dist');
  const config = {
    stats: { modules: false },
    resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    entry: { 'main-client': './src/index.tsx' },
    module: {
      rules: [
        { test: /\.tsx?$/, include: /src/, use: 'awesome-typescript-loader?silent=true' },
        { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' },
      ]
    },
    output: {
      filename: '[name].js',
      publicPath: 'dist/',
      path: targetPath
    },
    plugins: [
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require(path.join(targetPath, 'vendor-manifest.json'))
      }),
      new CheckerPlugin()
    ],
    devServer: {
      proxy: [{
        context: ["/api", "/images"],
        target: "http://localhost:5000",
        open: true,
        openPage: 'http://localhost:3000'
      }]
    },
    performance: {
      hints: false
    }
  };

  if (isDevBuild) {
    config.plugins.push(
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
        moduleFilenameTemplate: path.relative(targetPath, '[resourcePath]')
      })
    )
  }

  return [config];
};
