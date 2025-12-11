const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/dishes', (req, res) => {
    const { name, minPrice, maxPrice } = req.query;

    if (!name || !minPrice || !maxPrice) {
        return res.status(400).json({
            error: "name,minprice,maxprice are required"
        });
    }

    const sql = `
                    SELECT r.id AS restaurantId,
                    r.restaurant_name AS restaurantName,
                    r.city,
                    m.name AS dishName,
                    m.price AS dishPrice,
                    COUNT(o.id) AS orderCount
                    FROM restaurants r
                    JOIN menu_items m ON r.id = m.restaurant_id
                    LEFT JOIN orders o ON o.menu_item_id = m.id
                    WHERE m.name LIKE ?
                    AND m.price BETWEEN ? AND ?
                    GROUP BY r.id, m.id
                    ORDER BY orderCount DESC
                    LIMIT 10
                    `;
    

    db.query(sql, [`%${name}%`, minPrice, maxPrice], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ restaurants: results });
    });
})



module.exports = router;
