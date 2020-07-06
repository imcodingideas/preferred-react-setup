const staticCacheId = '0000';

module.exports = [
  {
    test: /\.s?css$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
  },
  {
    test: /\.jsx?$/,
    use: 'babel-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.(jpe?g|png|gif|svg|mp4)$/i,
    loader: 'file-loader',
    options: {
      name: `static/${staticCacheId}/[name].[contenthash].[ext]`,
    },
  },
  {
    test: /\.(otf|ttf)$/i,
    loader: 'file-loader',
    options: {
      name: `static/${staticCacheId}/[contenthash].[ext]`,
    },
  },
  {
    enforce: 'pre',
    test: /\.js$/,
    loader: 'source-map-loader',
  },
];
