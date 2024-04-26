const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Define routes
router.get('/', restaurantController.getAllRestaurants);
router.get('/:id', restaurantController.getRestaurantById);
router.post('/', restaurantController.createRestaurant);
router.put('/:id', restaurantController.updateRestaurantById);
router.delete('/:id', restaurantController.deleteRestaurantById);

module.exports = router;
