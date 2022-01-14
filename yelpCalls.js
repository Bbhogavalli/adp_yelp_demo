const axios = require('axios');
var lodash = require('lodash');
const config = require('./config/default.json');
const token = config.token;
async function getRestuarant(searchText) {
    let businessList = await getBusinessSearch(searchText);
    businessList = lodash.sortBy(businessList.businesses, ["rating"]);
    let lastfive = businessList.slice(-5);

    let resData = await getReviews(lastfive);
    resData.forEach(element => {
        delete element.id;
    });

    return resData;

}
function getReviews(data) {
    return new Promise((resolve, reject) => {


        let finalData = data.map((item) => {
            return {
                id: item.id,
                businessName: item.name,
                businessLocation: item.location['display_address'],
            }
        });

        let newData = finalData.map(async (element) => {
            let list = await getExertReviews(element.id);

            element.reviews = {
                text: list.reviews[0].text,
                rating: list.reviews[0].rating,
                name: list.reviews[0].user.name,
            };
            return element;
        });


        Promise.all(newData).then(values => {

            resolve(values);
        })
    })
}

function getBusinessSearch(searchText) {
    return new Promise(function (resolve, reject) {
        axios.get(config.searchLocationUrl.replace("${searchText}", searchText),
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
    getRestuarant
}