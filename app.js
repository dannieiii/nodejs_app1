const express = require('express');
const app = express();
const port = 3000;

// Set up the view engine
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/gallery', (req, res) => {
    res.render('gallery');
});

app.get('/products', (req, res) => {
    res.render('products');
});


app.post('/contact', (req, res) => {
    res.send('Form submitted!');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});