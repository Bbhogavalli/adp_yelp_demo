var getRestuarant = require('../yelpCalls').getRestuarant;

test('get icecream shops data', async () => {
    let data = await getRestuarant('icecreams', 34.075375, -84.294090);
    expect(data.length).toBeLessThanOrEqual(5);
})

test('Each restaurant in the final response should contain businessName,businessLocation,reviews', async () => {
    let data = await getRestuarant('icecreams', 34.075375, -84.294090);
    let keys = Object.keys(data[0]);
    expect(keys).toContain('businessName');
    expect(keys).toContain('businessLocation');
    expect(keys).toContain('reviews');
})

test('Each excert restaurant review in the final response should contain text,rating and reviewer name', async () => {
    let data = await getRestuarant('icecreams', 34.075375, -84.294090);
    let keys = Object.keys(data[0]['reviews']);
    expect(keys).toContain('text');
    expect(keys).toContain('rating');
    expect(keys).toContain('name');
})