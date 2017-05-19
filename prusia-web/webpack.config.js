module.exports = {
    entry: "./src/controller.jsx",
    output: {
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015','react','stage-0']
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    }
};
