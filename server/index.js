import express from 'express';
import { resolve } from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('*/', (req, res) => {
    res.sendFile(resolve(__dirname, './index.html'));
});

app.listen(8080, () => console.log('Running on http://localhost:8080'));