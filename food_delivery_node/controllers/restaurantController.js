
var db = require('../helpers/db_helpers')
var helper = require('../helpers/helpers')
var multiparty = require("multiparty")
var fs = require("fs")
var imageSavePath = "./public/img/"






// module.exports.controller = (app, io, socket_list) => {


//     // API endpoint to fetch restaurant details
//     app.get('/restaurants', (req, res) => {
//         const query = 'SELECT * FROM restaurant_detail';
//         db.query(query, (err, results) => {
//         if (err) {
//             throw err;
//         }
//         res.json(results);
//         });
//     });



// }    




module.exports.controller = (app, io, socket_list) => {


    // Controller function to get all restaurants

   app.get('/restaurants', (req, res) => {
        const query = 'SELECT * FROM restaurant_detail';
        db.query(query, (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results);
        });
    });

    // Controller function to get a specific restaurant by ID
    app.get('/restaurants/:id', (req, res) => {
        const restaurantId = req.params.id;
        const restaurant = restaurants.find(restaurant => restaurant.id === parseInt(restaurantId));
        
        if (!restaurant) {
            res.status(404).json({ message: 'Restaurant not found' });
        } else {
            res.json(restaurant); // Respond with JSON object of the found restaurant
        }
    });

    // Controller function to create a new restaurant
    app.post('/restaurants', (req, res) => {
        const newRestaurant = req.body; // Assuming request body contains restaurant data
        restaurants.push(newRestaurant); // Add new restaurant to the list
        res.status(201).json(newRestaurant); // Respond with the newly created restaurant
    });

    // Controller function to update an existing restaurant by ID
    app.put('/restaurants/:id', (req, res) => {
        const restaurantId = req.params.id;
        const updatedRestaurantData = req.body; // Assuming request body contains updated restaurant data
        const restaurantIndex = restaurants.findIndex(restaurant => restaurant.id === parseInt(restaurantId));
        
        if (restaurantIndex === -1) {
            res.status(404).json({ message: 'Restaurant not found' });
        } else {
            restaurants[restaurantIndex] = { ...restaurants[restaurantIndex], ...updatedRestaurantData };
            res.json(restaurants[restaurantIndex]); // Respond with the updated restaurant
        }
    });

    // Controller function to delete a restaurant by ID
    app.delete('/restaurants/:id', (req, res) => {
        const restaurantId = req.params.id;
        const restaurantIndex = restaurants.findIndex(restaurant => restaurant.id === parseInt(restaurantId));
        
        if (restaurantIndex === -1) {
            res.status(404).json({ message: 'Restaurant not found' });
        } else {
            const deletedRestaurant = restaurants.splice(restaurantIndex, 1);
            res.json(deletedRestaurant[0]); // Respond with the deleted restaurant
        }
    });

};
