// requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//global
const PORT = 5000;

// spin up server
app.listen(PORT, () => {
    console.log('server up on port:', PORT);
    
});