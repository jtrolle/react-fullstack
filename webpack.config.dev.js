import { resolve } from 'path'; 

export default {
    devtools: 'eval-source-map',
    entry: resolve(__dirname, './client/index.js'),
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                include: resolve(__dirname, './client'),
                loaders: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}