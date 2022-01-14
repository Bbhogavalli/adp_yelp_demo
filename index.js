const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = 3001;
const yelpCall = require('./yelpCalls.js');

app.get('/:searchText', async (req, res) => {
    if (req.params.searchText) {
        let finalData = await yelpCall.getRestuarant(req.params.searchText);
        res.status(200);
        res.json(finalData);
        res.end();
    } else {
        res.status(200);
        res.json({ text: 'no search item' });
        res.end();
    }
});


server.listen(port, (err) => {
    if (err) {
        throw err;
    }

    console.log(`Server Runnning at ${port}`);
});

module.exports = server;