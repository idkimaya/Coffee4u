const CoffeeManager = require('../../model/CoffeeManager');

async function updateCoffeeController(req, res) {
    const {status, message} = await CoffeeManager.updateCoffee(req.params.id, req.body);
    
    return res.status(status).json(message)
}

module.exports = updateCoffeeController;