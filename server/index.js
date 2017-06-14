// Node
import express from 'express';
import { resolve } from 'path';
import bodyParser from 'body-parser';

// Webpack config
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

// Router
import users from './routes/users';

const app = express();
const compiler = webpack(webpackConfig)

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.json());
app.use('/api/users', users);

app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, './index.html'));
});

app.listen(8080, () => console.log('Running on http://localhost:8080'));