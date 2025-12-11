# Restaurant Search Backend

A simple Node.js + MySQL backend service

Setup Instructions

1.Create a MySQL database on Clever Cloud.

2.Copy the credentials: Host, Username, Password, Database Name, Port.


3.Copy .env.example → .env file for local testing:

    DB_HOST=<Clever Cloud host>
    DB_USER=<Clever Cloud username>
    DB_PASSWORD=<Clever Cloud password>
    DB_NAME=<Clever Cloud database name>
    DB_PORT=3306
    PORT=5000

4.Install dependencies:
   
   npm install express mysql dotenv

5.Seed sample data:
   
   node seed.js
6.Start the server:

Local
   npm start

Server runs on:
   http://localhost:5000

Render Deployment

    The live URL (example):

    https://restaurant-search-idjn.onrender.com
    

API Usage
  
    GET /search/dishes

Query Parameters:
  
   name,minPrice,maxPrice

Example:

  GET https://restaurant-search-idjn.onrender.com/search/dishes?name=briyani&minPrice=150&maxPrice=300


Sample Response:

    {
  "restaurants": [
    {
      "restaurantId": 1,
      "restaurantName": "Hyderabadi Spice House",
      "city": "Hyderabad",
      "dishName": "Chicken Briyani",
      "dishPrice": 200,
      "orderCount": 5
    },
    {
      "restaurantId": 2,
      "restaurantName": "Meghana Briyani House",
      "city": "Bangalore",
      "dishName": "Veg Briyani",
      "dishPrice": 150,
      "orderCount": 3
    }
  ]
}




