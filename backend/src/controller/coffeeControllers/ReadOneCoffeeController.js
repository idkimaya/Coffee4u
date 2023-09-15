const CoffeeManager = require('../../model/CoffeeManager');

async function readOneCoffeeController(req, res) {
    const {status, message} = await CoffeeManager.fetchOneCoffee(req.params.id);
    
    return res.status(status).json(message)
}

module.exports = readOneCoffeeController;