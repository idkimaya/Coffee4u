const CoffeeManager = require('../../model/CoffeeManager');

async function createCoffeeController(req, res) {
    const {status, message} = await CoffeeManager.insertCoffee(req.body);
    
    return res.status(status).json(message)
}

module.exports = createCoffeeController;