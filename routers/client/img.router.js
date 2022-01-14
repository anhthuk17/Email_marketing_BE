// Requiring module
const express = require('express');

// Creating express object
const app = express();

// Defining port number
const PORT = 3000;

// Function to serve all static files
// inside public directory.
// app.use(express.static(__dirname + '/images'));
// app.listen(3000, function() {
//     console.log('Express server is listening, use this url - localhost:3500/default.png');
// });
app.get("/google/logo", function(req, res) {
    var requestSettings = {
        url: 'https://www.google.com/images/srpr/logo11w.png',
        method: 'GET',
        encoding: null
    };

    request(requestSettings, function(error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
});