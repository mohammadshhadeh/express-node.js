const express = require('express');
const app = express();

const pug = require('pug');

// Working with file and directory paths
const path = require('path');

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

// Init Pug.js
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './views'));
app.set('etag', false);

// Init static route for style and script files
app.use('/public/css', express.static(path.join(__dirname, '../dist/css/')));
app.use('/public/js', express.static(path.resolve(__dirname, '../dist/js/')));

app.get('/', (req, res) => {
    res.status(200).render('index', { data:  'Hello World!' });
});

// listening Port
const LISTEN_PORT = 3000;
app.listen(process.env.LISTEN_PORT || LISTEN_PORT, () => {
    console.log(`Server Start listening on port ${process.env.LISTEN_PORT || LISTEN_PORT}...`);
});

module.exports = {
	app,
};
