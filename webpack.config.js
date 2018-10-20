const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const SRC_PATH= path.join(__dirname, 'src')
const ASSETS_PATH = path.join(SRC_PATH, 'assets')

const PATHS = {
    src: SRC_PATH,
    appcode: path.join(SRC_PATH, 'app'),
    assets: path.join(SRC_PATH, 'assets'),
    img: path.join(ASSETS_PATH, 'img'),
    fonts: path.join(ASSETS_PATH, 'fonts'),
    css: path.join(ASSETS_PATH, 'css'),
    dist : path.resolve(__dirname, 'dist')

}


const config = {
    entry: './index.ts',
    output: {
        path: PATHS.dist,
        filename: 'xonomy.bundle.js',
        libraryTarget: 'var',
        library: "Xonomy"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    devtool: "source-map",
    module: {
        rules: [
            {test: /\.txt$/, use: 'raw-loader'},
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader",
                include: PATHS.fonts
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug'],
                include: PATHS.img

            },
            {test: /\.tsx?$/, use: "awesome-typescript-loader"}

        ]
    }
};


module.exports = config;