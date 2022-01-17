const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = 3001;
const yelpCall = require('./yelpCalls.js');

/*
  
*/
app.get('/:searchText/:lat/:long', async (req, res) => {
    let { searchText, lat, long } = req.params;
    if (searchText && lat && long) {
        let finalData = await yelpCall.getRestuarant(searchText, lat, long);
        res.status(200);
        res.json(finalData);
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