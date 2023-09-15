const CoffeeManager = require('../../model/CoffeeManager');
const qs = require('qs')

async function readCoffeeController(req, res) {
    const {status, message} = await CoffeeManager.fetchCoffee();
    
    return res.status(status).json(message)
}

module.exports = readCoffeeController;