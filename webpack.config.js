const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // Why test?
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ],

    },
    resolve: {  // Why do I need this if I've above
        extensions: [
            ".ts",
            ".tsx",
            ".js"
        ]
    },
    watch: true
}