const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');



const pages = require('./routes/pageRoute');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(compression())


app.use('/', pages)


app.get('/software', function (req, res) {
    res.send("Hey, welcome to our website")
})

app.listen(3000, ()=> {console.log('app listening on port 3000!🚀')})