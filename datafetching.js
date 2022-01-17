/* istanbul ignore file */
const axios = require('axios');
const config = require('./config/default.json');
const token = config.token;



function getBusinessSearch(searchText, lat, long) {
    let url = config.searchLocationUrl.replace("${searchText}", searchText);
    url = url.replace("${lat}", lat);
    url = url.replace("${long}", long);
    return new Promise(function (resolve, reject) {
        axios.get(url,
            { headers: { Authorization: `Bearer ${token}` } })
            .then(function (response) {
                resolve(response.data);

            })
            .catch(function (error) {
                console.log(error);
                reject(error)
            })
    })
}

function getExertReviews(id) {
    return new Promise(function (resolve, reject) {
        axios.get(config.reviewUrl.replace("${id}", id),
            { headers: { Authorization: `Bearer ${token}` } })
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                console.log(error);
                reject(error)
            })
    })
}


module.exports = {
    getExertReviews,
    getBusinessSearch
}