# adp_yelp_demo
 

We love ice cream!

To download the application Run the below command from your terminal git clone https://github.com/Bbhogavalli/adp_yelp_demo.git

Use editor of your choice to open the cloned project

In the config folder you will have default.json. which holds sensitive data , you will need to replace the API Key of yours to run the App.

if you don't have the yelp fusion api key, i can share mine(Please Email).

once you have the setup Run the below command npm install

and to run the app npm run start

it starts at port 3001. i added simple get call to get the top five ice creams shops in Alpharetta! with the all details asked.

Also it is not only about icecream you can replace the text with what ever food you like at whatever location  example:- for ice cream shops http://localhost:3001/icecream/34.075375/-84.294090

  Alpharetta latitude and longitude are 34.075375/-84.294090
  
 for pizza shops
 http://localhost:3001/pizza/34.075375/-84.294090
 
 for indian food
 http://localhost:3001/indian/34.075375/-84.294090
 
 etc
the api response would include Business Name, Location, Rating ,Review and Name of person who gave the review.
