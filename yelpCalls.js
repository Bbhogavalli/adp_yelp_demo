let lodash = require('lodash');
let { getBusinessSearch, getExertReviews } = require('./datafetching');
async function getRestuarant(searchText, lat, long) {
    let businessList = await getBusinessSearch(searchText, lat, long);
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



module.exports = {
    getRestuarant
}