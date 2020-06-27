const express = require('express');
const pug = require('pug');
const path = require('path');
const app = express();

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('header');
});

// listen Port
app.listen(3000, function(){
    console.log('Server Start listening on port 3000...');
});
