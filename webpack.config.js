var path = require("path");

module.exports = {
    context: path.resolve("js"),
    entry: ["./utils.js","./app"],
    output: {
        path: path.resolve("build/js/"),
        publicPath: "/public/assets/js/",
        filename: "bundle.js"
    },
    watch: true,
    devServer: {
        contextBase: "public"
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },

    resolve: {
        extensions: ["", ".js", ".es6"]
    }
};
