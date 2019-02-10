import express from 'express';
import config from './webpack.config.dev.babel';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express(),
	compiler = webpack(config),
	DIST_DIR = path.resolve(__dirname, 'dist'),
	HTML_DIR = path.resolve(__dirname, 'src', 'index.html');

app.use(express.static(DIST_DIR));
app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
	res.sendFile(HTML_DIR);
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${PORT}`));
