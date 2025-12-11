const { error } = require("console");
const db = require("./db");


//create Tables
db.query(`
    CREATE TABLE IF NOT EXISTS restaurants(
    id INT AUTO_INCREMENT PRIMARY KEY,
    restaurant_name VARCHAR(100),
    city VARCHAR(100)
    )`
);


db.query(`
    CREATE TABLE IF NOT EXISTS menu_items(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price INT,
    restaurant_id INT,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
    )`
);

db.query(`
  CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    menu_item_id INT,
    qty INT,
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(id)
  )
`);

db.query("SELECT COUNT(*) AS count FROM restaurants", (err, result) => {
    if (err) throw err;

    if (result[0].count > 0) {
        console.log("Sample data already exists");
        return
    }
    console.log("Inserting sample data")

    //insert values into restaurants table
    db.query(`
        INSERT INTO restaurants(restaurant_name,city) VALUES
        ('Hyderabadi Spice House','Hyderabad'),
        ('Meghana Briyani House','Bangalore'),
        ('Rameshwaram Cafe','Bangalore');
        `);

    db.query(`
        INSERT INTO menu_items(name, price,restaurant_id) VALUES
        ('Chicken Briyani',200,1),
        ('Mutton Briyani',300,1),
        ('Chicken Briyani',250,2),
        ('Veg Briyani',150,2),
        ('Chicken Briyani',220,3)
        `);

    db.query(`INSERT INTO orders (menu_item_id, qty) VALUES
        (1,1),(1,1),(1,1),(1,1),(1,1), 
        (2,1),(2,1),                    
        (3,1),(3,1),(3,1),(3,1),        
        (4,1),(4,1),(4,1),               
        (5,1),(5,1),(5,1),(5,1),(5,1),(5,1) 
    `);

    console.log("Sample data inserted");
});