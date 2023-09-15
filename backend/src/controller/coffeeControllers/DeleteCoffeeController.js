const CoffeeManager = require('../../model/CoffeeManager');

async function deleteCoffeeController(req, res) {
    const {status, message} = await CoffeeManager.deleteCoffee(req.params.id);
    
    return res.status(status).json(message)
}

module.exports = deleteCoffeeController;