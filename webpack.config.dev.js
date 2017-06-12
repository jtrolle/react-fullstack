import { resolve } from 'path'; 
import webpack from 'webpack';

export default {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        resolve(__dirname, './client/index.js')
    ],
    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                include: resolve(__dirname, './client'),
                loaders: ['react-hot-loader', 'babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}