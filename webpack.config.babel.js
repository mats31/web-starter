import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'inline-source-map',
  entry: './src/main.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  resolve: {
    root: path.resolve( __dirname, 'src' ),
    extensions: [
      '',
      '.js',
      '.vue',
      '.json',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      Vue: 'vue',
    }),
  ],
};
