const express = require('express');
const bodyParser = require('body-parser');
const { db } = require('./db/index');

const app = express();
const port = 3000;
db(); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({}));

app.get('/', (req, res) => {
    res.send('Hello STU');
});

//routes
const organization = require('./routes/organization.route');
app.use(organization);

app.listen(port, () => {
    console.log('Server runs at port 3000', port);
});