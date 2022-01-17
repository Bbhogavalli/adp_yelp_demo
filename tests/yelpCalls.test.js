let { getRestuarant } = require('../yelpCalls');
let { getExertReviews, getBusinessSearch } = require('../datafetching');
jest.mock('../datafetching');

let mockReviews = {
    "reviews": [
        {
            "id": "fQBYWng5FeiIQP7UmnHfEw",
            "url": "https://www.yelp.com/biz/bi-rite-creamery-san-francisco?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&hrid=fQBYWng5FeiIQP7UmnHfEw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "text": "This review pertains to an old service-order I received from Bi-Rite Creamery's catering on February 2, 2020. \n\nFor work, I was tasked with the...",
            "rating": 5,
            "time_created": "2022-01-05 20:55:57",
            "user": {
                "id": "3_GQehuy2tNLqKSTOCJIEg",
                "profile_url": "https://www.yelp.com/user_details?userid=3_GQehuy2tNLqKSTOCJIEg",
                "image_url": "https://s3-media2.fl.yelpcdn.com/photo/d1kgqMwPK53sGTM3RqXJCg/o.jpg",
                "name": "Kim A."
            }
        },
        {
            "id": "nCq92bckrMEG-lELN5QYQQ",
            "url": "https://www.yelp.com/biz/bi-rite-creamery-san-francisco?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&hrid=nCq92bckrMEG-lELN5QYQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "text": "Bi-Rite Creamery has been a staple in the city for quite some time and for good reason. Their ice cream is creamy and they have a good variety of flavors to...",
            "rating": 4,
            "time_created": "2022-01-07 20:02:08",
            "user": {
                "id": "ZyXthHtbiKmooN2FjZwQgQ",
                "profile_url": "https://www.yelp.com/user_details?userid=ZyXthHtbiKmooN2FjZwQgQ",
                "image_url": "https://s3-media1.fl.yelpcdn.com/photo/WNwtM7PrQVWu714mHBiyuw/o.jpg",
                "name": "Jem C."
            }
        },
        {
            "id": "_Sqiw4T_ENan8mYGiHFE0A",
            "url": "https://www.yelp.com/biz/bi-rite-creamery-san-francisco?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&hrid=_Sqiw4T_ENan8mYGiHFE0A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "text": "Said it once and ima say it again.... BEST ICE REAM EVER!!\n\nBlack sesame 10/10\n- nutty and delicious \n- super creamy \n\nCreme brulee 8/10\n- I think the ice...",
            "rating": 5,
            "time_created": "2022-01-03 23:04:46",
            "user": {
                "id": "8R_EjrXq1gGRBOxqXsaWSg",
                "profile_url": "https://www.yelp.com/user_details?userid=8R_EjrXq1gGRBOxqXsaWSg",
                "image_url": "https://s3-media3.fl.yelpcdn.com/photo/xJ1DLRGh5f1MB5OJEbnIEQ/o.jpg",
                "name": "Sophia C."
            }
        }
    ],
    "total": 9723,
    "possible_languages": [
        "de",
        "en",
        "es",
        "fr",
        "it",
        "ja",
        "pt",
        "zh"
    ]
};
let mockBusiness = {
    "businesses": [
        {
            "id": "Tos9i8fU_Ggbug963lgSLA",
            "alias": "popbar-alpharetta-alpharetta",
            "name": "Popbar Alpharetta",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/RmxdEqDhq0-u36CXRjVUgA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/popbar-alpharetta-alpharetta?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "review_count": 62,
            "categories": [
                {
                    "alias": "icecream",
                    "title": "Ice Cream & Frozen Yogurt"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 34.11077,
                "longitude": -84.2224577
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "location": {
                "address1": "6710 Town Square",
                "address2": "Ste 130",
                "address3": null,
                "city": "Alpharetta",
                "zip_code": "30005",
                "country": "US",
                "state": "GA",
                "display_address": [
                    "6710 Town Square",
                    "Ste 130",
                    "Alpharetta, GA 30005"
                ]
            },
            "phone": "+14702942910",
            "display_phone": "(470) 294-2910",
            "distance": 7681.101369109677
        },
        {
            "id": "oDTdXsjMJ-Xzs-rsn96_4Q",
            "alias": "four-fat-cows-alpharetta",
            "name": "Four Fat Cows",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/8c_9eN7dQfI48QH4uRGiJQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/four-fat-cows-alpharetta?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "review_count": 105,
            "categories": [
                {
                    "alias": "icecream",
                    "title": "Ice Cream & Frozen Yogurt"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 34.0772361,
                "longitude": -84.29463
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "64 N Main St",
                "address2": "",
                "address3": "",
                "city": "Alpharetta",
                "zip_code": "30009",
                "country": "US",
                "state": "GA",
                "display_address": [
                    "64 N Main St",
                    "Alpharetta, GA 30009"
                ]
            },
            "phone": "+14702685268",
            "display_phone": "(470) 268-5268",
            "distance": 235.92827107297953
        },
        {
            "id": "8cePaxBvWKAtrZ81YI-PIA",
            "alias": "wheres-the-scoop-alpharetta-2",
            "name": "Where's The Scoop",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/SWDZ82W50TWqhL3r4t1m8Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/wheres-the-scoop-alpharetta-2?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "review_count": 23,
            "categories": [
                {
                    "alias": "bubbletea",
                    "title": "Bubble Tea"
                },
                {
                    "alias": "coffee",
                    "title": "Coffee & Tea"
                },
                {
                    "alias": "icecream",
                    "title": "Ice Cream & Frozen Yogurt"
                }
            ],
            "rating": 5.0,
            "coordinates": {
                "latitude": 34.0750075,
                "longitude": -84.2950824
            },
            "transactions": [],
            "location": {
                "address1": "26 Old Roswell St",
                "address2": "Ste 102",
                "address3": null,
                "city": "Alpharetta",
                "zip_code": "30009",
                "country": "US",
                "state": "GA",
                "display_address": [
                    "26 Old Roswell St",
                    "Ste 102",
                    "Alpharetta, GA 30009"
                ]
            },
            "phone": "+17705586503",
            "display_phone": "(770) 558-6503",
            "distance": 153.04151830474612
        },
        {
            "id": "r_XFeHjknaX0pRgLXuqHXw",
            "alias": "menchies-frozen-yogurt-roswell",
            "name": "Menchie's Frozen Yogurt",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/X7X3jtWymhaTFIbzGLi9gA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/menchies-frozen-yogurt-roswell?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "review_count": 32,
            "categories": [
                {
                    "alias": "icecream",
                    "title": "Ice Cream & Frozen Yogurt"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 34.073303669794,
                "longitude": -84.361726995389
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "12030 Etris Rd",
                "address2": "",
                "address3": "",
                "city": "Roswell",
                "zip_code": "30075",
                "country": "US",
                "state": "GA",
                "display_address": [
                    "12030 Etris Rd",
                    "Roswell, GA 30075"
                ]
            },
            "phone": "+17709927992",
            "display_phone": "(770) 992-7992",
            "distance": 6233.888320002797
        },
        {
            "id": "v21jReWx5dd5KuQ0QS6Dog",
            "alias": "screamn-nuts-alpharetta",
            "name": "Scream'n Nuts",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/d-Vb9kn1nCJbn1RPHVXY-w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/screamn-nuts-alpharetta?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "review_count": 400,
            "categories": [
                {
                    "alias": "donuts",
                    "title": "Donuts"
                },
                {
                    "alias": "icecream",
                    "title": "Ice Cream & Frozen Yogurt"
                },
                {
                    "alias": "coffee",
                    "title": "Coffee & Tea"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 34.04965,
                "longitude": -84.28216
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "5950 North Point Pkwy",
                "address2": "",
                "address3": null,
                "city": "Alpharetta",
                "zip_code": "30022",
                "country": "US",
                "state": "GA",
                "display_address": [
                    "5950 North Point Pkwy",
                    "Alpharetta, GA 30022"
                ]
            },
            "phone": "+14044744766",
            "display_phone": "(404) 474-4766",
            "distance": 3144.3343292260934
        },
        {
            "id": "0RDGOFcgDhzry4MDopu0-A",
            "alias": "jenis-splendid-ice-creams-alpharetta-2",
            "name": "Jeni's Splendid Ice Creams",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/g4swssZEtx3bCD_HvozQ2Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/jenis-splendid-ice-creams-alpharetta-2?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "review_count": 199,
            "categories": [
                {
                    "alias": "icecream",
                    "title": "Ice Cream & Frozen Yogurt"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 34.070811,
                "longitude": -84.273856
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "800 Avalon Blvd",
                "address2": null,
                "address3": "",
                "city": "Alpharetta",
                "zip_code": "30009",
                "country": "US",
                "state": "GA",
                "display_address": [
                    "800 Avalon Blvd",
                    "Alpharetta, GA 30009"
                ]
            },
            "phone": "+16788941483",
            "display_phone": "(678) 894-1483",
            "distance": 1931.5202855487473
        },
        {
            "id": "er9SPQA5RF3I60OY3Vr3Gg",
            "alias": "cold-stone-creamery-duluth-2",
            "name": "Cold Stone Creamery",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ztNOx3IxEKzq4cGveT6uEg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/cold-stone-creamery-duluth-2?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "review_count": 41,
            "categories": [
                {
                    "alias": "icecream",
                    "title": "Ice Cream & Frozen Yogurt"
                },
                {
                    "alias": "customcakes",
                    "title": "Custom Cakes"
                },
                {
                    "alias": "cupcakes",
                    "title": "Cupcakes"
                }
            ],
            "rating": 2.5,
            "coordinates": {
                "latitude": 34.017939,
                "longitude": -84.193243
            },
            "transactions": [
                "delivery"
            ],
            "price": "$",
            "location": {
                "address1": "9700 Medlock Bridge Rd",
                "address2": "Ste 172",
                "address3": null,
                "city": "Duluth",
                "zip_code": "30097",
                "country": "US",
                "state": "GA",
                "display_address": [
                    "9700 Medlock Bridge Rd",
                    "Ste 172",
                    "Duluth, GA 30097"
                ]
            },
            "phone": "+17704760292",
            "display_phone": "(770) 476-0292",
            "distance": 11274.717795829678
        },
        {
            "id": "D9zjp5ENutChZtAl7c2SuQ",
            "alias": "sweet-charlies-roswell",
            "name": "Sweet Charlie's",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/bSzSbY0bSSMkLhX7qc7iwg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sweet-charlies-roswell?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "review_count": 23,
            "categories": [
                {
                    "alias": "icecream",
                    "title": "Ice Cream & Frozen Yogurt"
                }
            ],
            "rating": 5.0,
            "coordinates": {
                "latitude": 34.039067,
                "longitude": -84.345456809894
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "location": {
                "address1": "580 E Crossville Rd",
                "address2": "Ste 300",
                "address3": "",
                "city": "Roswell",
                "zip_code": "30075",
                "country": "US",
                "state": "GA",
                "display_address": [
                    "580 E Crossville Rd",
                    "Ste 300",
                    "Roswell, GA 30075"
                ]
            },
            "phone": "+16783733646",
            "display_phone": "(678) 373-3646",
            "distance": 6220.26354196184
        },
        {
            "id": "1K-P9QXVm1JfgiuuDuEGEA",
            "alias": "baskin-robbins-roswell-2",
            "name": "Baskin Robbins",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/L8wk2Q8g4-g_KmNrabuxaw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/baskin-robbins-roswell-2?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "review_count": 15,
            "categories": [
                {
                    "alias": "icecream",
                    "title": "Ice Cream & Frozen Yogurt"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 34.0439425019232,
                "longitude": -84.3411961790064
            },
            "transactions": [
                "delivery"
            ],
            "price": "$",
            "location": {
                "address1": "10800 Alpharetta Hwy",
                "address2": "Ste 232",
                "address3": "",
                "city": "Roswell",
                "zip_code": "30076",
                "country": "US",
                "state": "GA",
                "display_address": [
                    "10800 Alpharetta Hwy",
                    "Ste 232",
                    "Roswell, GA 30076"
                ]
            },
            "phone": "",
            "display_phone": "",
            "distance": 5571.935135255464
        },
        {
            "id": "busZqvXX73idGQMLagMtpQ",
            "alias": "mr-tinos-ice-cream-roswell",
            "name": "Mr Tinos Ice Cream",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/CLCvvmbQsQLUZAUen4hPgQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/mr-tinos-ice-cream-roswell?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "review_count": 39,
            "categories": [
                {
                    "alias": "icecream",
                    "title": "Ice Cream & Frozen Yogurt"
                }
            ],
            "rating": 5.0,
            "coordinates": {
                "latitude": 34.031355,
                "longitude": -84.341339
            },
            "transactions": [
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "1255 Grimes Bridge Rd",
                "address2": "Ste E",
                "address3": "",
                "city": "Roswell",
                "zip_code": "30075",
                "country": "US",
                "state": "GA",
                "display_address": [
                    "1255 Grimes Bridge Rd",
                    "Ste E",
                    "Roswell, GA 30075"
                ]
            },
            "phone": "+14045036233",
            "display_phone": "(404) 503-6233",
            "distance": 6554.660979112248
        },
        {
            "id": "g_uZL_6-mV5WWq2-3b_Q3w",
            "alias": "kilwins-alpharetta-alpharetta",
            "name": "Kilwins - Alpharetta",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/AM2-WGUH6iL7nBmmNaUhdA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kilwins-alpharetta-alpharetta?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "review_count": 10,
            "categories": [
                {
                    "alias": "chocolate",
                    "title": "Chocolatiers & Shops"
                },
                {
                    "alias": "icecream",
                    "title": "Ice Cream & Frozen Yogurt"
                },
                {
                    "alias": "giftshops",
                    "title": "Gift Shops"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 34.11072166272919,
                "longitude": -84.22374960677813
            },
            "transactions": [
                "delivery"
            ],
            "location": {
                "address1": "6330 Halcyon Way",
                "address2": "Ste 710",
                "address3": "",
                "city": "Alpharetta",
                "zip_code": "30005",
                "country": "US",
                "state": "GA",
                "display_address": [
                    "6330 Halcyon Way",
                    "Ste 710",
                    "Alpharetta, GA 30005"
                ]
            },
            "phone": "+17706769637",
            "display_phone": "(770) 676-9637",
            "distance": 7576.398478670094
        },
        {
            "id": "fqbZGZDppDJpwcS7P3V7wg",
            "alias": "alchemist-trading-co-alpharetta",
            "name": "Alchemist Trading Co",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CiapS8X_qfXYKmewxY7AbQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/alchemist-trading-co-alpharetta?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "review_count": 234,
            "categories": [
                {
                    "alias": "coffee",
                    "title": "Coffee & Tea"
                },
                {
                    "alias": "juicebars",
                    "title": "Juice Bars & Smoothies"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 34.016973049126634,
                "longitude": -84.19310183634408
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "9700 Medlock Bridge Rd",
                "address2": "Ste 138",
                "address3": "",
                "city": "Alpharetta",
                "zip_code": "30022",
                "country": "US",
                "state": "GA",
                "display_address": [
                    "9700 Medlock Bridge Rd",
                    "Ste 138",
                    "Alpharetta, GA 30022"
                ]
            },
            "phone": "+17706872677",
            "display_phone": "(770) 687-2677",
            "distance": 11346.611424543284
        },
        {
            "id": "U4ZD9Q1EuW3mQlcynqWDkw",
            "alias": "andys-frozen-custard-alpharetta",
            "name": "Andy's Frozen Custard",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Q3SxiINHNeu7lWcrO3qAEQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/andys-frozen-custard-alpharetta?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "review_count": 85,
            "categories": [
                {
                    "alias": "desserts",
                    "title": "Desserts"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 34.065147,
                "longitude": -84.253105
            },
            "transactions": [
                "delivery"
            ],
            "location": {
                "address1": "3670 Old Milton Pkwy",
                "address2": null,
                "address3": "",
                "city": "Alpharetta",
                "zip_code": "30005",
                "country": "US",
                "state": "GA",
                "display_address": [
                    "3670 Old Milton Pkwy",
                    "Alpharetta, GA 30005"
                ]
            },
            "phone": "+14702686175",
            "display_phone": "(470) 268-6175",
            "distance": 3942.6559294720423
        },
        {
            "id": "zvn3_zfE_WJMtYUsCjR3BA",
            "alias": "tiffs-treats-alpharetta",
            "name": "Tiff's Treats",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/63HfwUjrvFBBA7gFP_f3mg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/tiffs-treats-alpharetta?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "review_count": 44,
            "categories": [
                {
                    "alias": "fooddeliveryservices",
                    "title": "Food Delivery Services"
                },
                {
                    "alias": "bakeries",
                    "title": "Bakeries"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 34.063735,
                "longitude": -84.252401
            },
            "transactions": [
                "delivery"
            ],
            "price": "$",
            "location": {
                "address1": "3665 Old Milton Pkwy",
                "address2": "Ste 10",
                "address3": "",
                "city": "Alpharetta",
                "zip_code": "30005",
                "country": "US",
                "state": "GA",
                "display_address": [
                    "3665 Old Milton Pkwy",
                    "Ste 10",
                    "Alpharetta, GA 30005"
                ]
            },
            "phone": "+14046496290",
            "display_phone": "(404) 649-6290",
            "distance": 4052.202866304593
        },
        {
            "id": "QgXJOaQcHk_6MTAI2TC-_Q",
            "alias": "dairy-queen-roswell",
            "name": "Dairy Queen",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/3swHdhH7jFz9rikC1wKMfg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/dairy-queen-roswell?adjust_creative=n_ZZFW_J1RzfUyQGqsMo-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n_ZZFW_J1RzfUyQGqsMo-w",
            "review_count": 38,
            "categories": [
                {
                    "alias": "icecream",
                    "title": "Ice Cream & Frozen Yogurt"
                }
            ],
            "rating": 2.0,
            "coordinates": {
                "latitude": 34.0331096,
                "longitude": -84.3506446
            },
            "transactions": [
                "delivery"
            ],
            "price": "$",
            "location": {
                "address1": "1260 Alpharetta St",
                "address2": "",
                "address3": "",
                "city": "Roswell",
                "zip_code": "30075",
                "country": "US",
                "state": "GA",
                "display_address": [
                    "1260 Alpharetta St",
                    "Roswell, GA 30075"
                ]
            },
            "phone": "+17705872253",
            "display_phone": "(770) 587-2253",
            "distance": 7016.596247356857
        }
    ],
    "total": 135,
    "region": {
        "center": {
            "longitude": -84.29409,
            "latitude": 34.075375
        }
    }
};
afterEach(() => {
    getExertReviews.mockReset();
    getBusinessSearch.mockReset();
})

test('get icecream shops data', async () => {

    getExertReviews.mockResolvedValue(mockReviews);
    getBusinessSearch.mockResolvedValue(mockBusiness);
    let data = await getRestuarant('icecreams', 34.075375, -84.294090);
    expect(data.length).toBeLessThanOrEqual(5);
})

test('Each restaurant in the final response should contain businessName,businessLocation,reviews', async () => {
    getExertReviews.mockResolvedValue(mockReviews);
    getBusinessSearch.mockResolvedValue(mockBusiness);
    let data = await getRestuarant('icecreams', 34.075375, -84.294090);
    let keys = Object.keys(data[0]);
    expect(keys).toContain('businessName');
    expect(keys).toContain('businessLocation');
    expect(keys).toContain('reviews');
})

test('Each excert restaurant review in the final response should contain text,rating and reviewer name', async () => {
    getExertReviews.mockResolvedValue(mockReviews);
    getBusinessSearch.mockResolvedValue(mockBusiness);
    let data = await getRestuarant('icecreams', 34.075375, -84.294090);
    let keys = Object.keys(data[0]['reviews']);
    expect(keys).toContain('text');
    expect(keys).toContain('rating');
    expect(keys).toContain('name');
})