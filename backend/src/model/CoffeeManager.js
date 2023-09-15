const connection = require('./db');

async function insertCoffee(data) {
    
    let bodyResponse = {...data};
    
    return connection
    .promise()
    .query(
     "INSERT INTO coffees (name, volume, stars, description, price) VALUES (?, ?, ?,?,?)",
      [
        data.name,
        data.volume,
        data.stars,
        data.description,
        data.price,
      ]
    )
    .then(async ([rows]) => { 
        bodyResponse.id = rows.insertId
        
        return {status: 201, message: bodyResponse}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function updateCoffee(id, data) {
    let sqlQuery = "UPDATE coffees SET ";

    for (let key in itemValue = Object.keys(data)) {
        sqlQuery += `${itemValue[key]} = ?, `
    }

    sqlQuery = sqlQuery.slice(0, sqlQuery.length - 2);

    sqlQuery += ` WHERE id = ?`;

    let bodyResponse = {...data, id: id};
    
    return connection.promise().query(sqlQuery, [...Object.values(data), id])
    .then(async ([rows]) => { 
        //bodyResponse.id = rows.insertId
        //@TODO remove password from body

        return {status: 201, message: bodyResponse}
    })
    .catch(error => {
        console.log(error);
        return {status: 500, message: error}
    })
}

async function deleteCoffee(id) {
    let sqlQuery = `DELETE FROM coffees where id = ${id}`;
    
    return connection.promise().query(sqlQuery)
    .then(async ([rows]) => { 
        return {status: 204, message: {}}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function fetchCoffee() {
    const sql = "SELECT * FROM coffees";
    
    return connection.promise().query(sql)
    .then(async ([rows]) => { 
        return {status: 200, message: rows}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function fetchOneCoffee(id) {
    const sql = "SELECT * FROM coffees WHERE id = ?";
    
    return connection.promise().query(sql, id)
    .then(async ([rows]) => {
        return rows.length === 0 ? {status: 404, message: {}} : {status: 200, message: rows[0]}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

module.exports = {
    insertCoffee,
    fetchCoffee,
    fetchOneCoffee,
    updateCoffee,
    deleteCoffee
}