const path = require('path');

module.exports = {
  entry: ['babel-polyfill', path.resolve('./public/src/')],
  output: {
    path: path.resolve(__dirname, './public/dist/'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/react',
            {
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          ],
        },
      },
      {
        test: [/\.css$/, /\.scss$/],
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
      //   loader: 'url-loader?limit=100000'
      // },
      {
        test: /\.(gif|png|jpe?g|svg|pdf)$/i,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, './public/dist'),
    historyApiFallback: true,
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   // injects bundle.js to our new index.html
    //   inject: true,
    //   // copys the content of the existing index.html to the new /build index.html
    //   template:  path.resolve('./dist/index.html'),
    // }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },
  mode: 'development',
};
