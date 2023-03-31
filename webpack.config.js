const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        entrada: './js/entrada/index.js',
        balcon: './js/balcon/balcon.js',
        cocina: './js/cocina/cocina.js',
        estudio: './js/estudio/estudio.js',
        fin: './js/fin/fin.js',
        jardin: './js/jardin/jardin.js',
        lavanderia: './js/lavanderia/lavanderia.js',
        sala: './js/sala/sala.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist_webpack'),
        filename: '[name].bundle.js',
    }, 
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }), 
        new HtmlWebpackPlugin({
            template: './js/entrada/index.html',
            filename: '[name].html',
            chunks: ['[index]']
         })
    ],
    module: {
        rules: [
        {
            test: /.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        ],
    }, 
};