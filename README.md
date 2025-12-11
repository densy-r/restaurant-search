# Restaurant Search Backend

A simple Node.js + MySQL backend service

Setup Instructions

1.Start XAMPP MySQL and Apache.

2.Create a database:
   
   CREATE DATABASE restaurant_db;

3.Copy .env.example → .env and fill your MySQL credentials:

   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=           # leave blank if default
   DB_NAME=restaurant_db
   PORT=5000

4.Install dependencies:
   
   npm install express mysql dotenv

5.Seed sample data:
   
   node seed.js
6.Start the server:

   node server.js

API Usage
  
    GET /search/dishes

Query Parameters:
  
   name,minPrice,maxPrice

Example:
  
    http://localhost:5000/search/dishes?name=briyani&minPrice=150&maxPrice=300
    
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




