module.exports = {
    entry: __dirname + '/src/js/main.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
      publicPath: 'http://localhost:8080/'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: 'dist',
        port: 8080,
        inline: true
    },
};
