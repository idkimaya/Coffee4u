const express = require('express');
const router = express.Router();
const createCoffeeController = require('../controller/coffeeControllers/CreateCoffeeController')
const readCoffeeController = require('../controller/coffeeControllers/ReadCoffeeController')
const readOneCoffeeController = require('../controller/coffeeControllers/ReadOneCoffeeController')
const updateCoffeeController = require('../controller/coffeeControllers/UpdateCoffeeController')
const deleteCoffeeController = require('../controller/coffeeControllers/DeleteCoffeeController');

/* POST : create a new Coffee. */
router.post('/', createCoffeeController)

/* GET : fetch all Coffees . */
router.get('/', readCoffeeController)

/* GET : fetch one Coffee . */
router.get('/:id', readOneCoffeeController)

/* PUT : update one Coffee . */
router.put('/:id', updateCoffeeController)

/* DELETE : delete one Coffee . */
router.delete('/:id', deleteCoffeeController)

module.exports = router;