var config = {
  entry: {
    app: ['./app/core/bootstrap.js'],
  },
  output: {
    path: __dirname + '/app/',
    filename: 'bundle.js',
  },
  resolve: {
    root: __dirname + '/app/',
  },
  module: {
    noParse: [],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate!babel' },
      { test: /\.html$/, loader: 'raw' },
      // { test: /\.css$/, loader: 'style!css' },
      // { test: /\.scss$/, loader: 'style!css!sass' },
      // { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192' },
    ]
  }
};

module.exports = config;
