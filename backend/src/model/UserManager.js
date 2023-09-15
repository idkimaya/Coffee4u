const connection = require('./db');

async function insertUser(data) {

    let bodyResponse = {...data};
    
    return connection
    .promise()
    .query(
     "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [
        data.username,
        data.email,
        data.password,
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

async function updateUser(id, data) {
    let sqlQuery = "UPDATE users SET ";

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

async function deleteUser(id) {
    let sqlQuery = `DELETE FROM users where id = ${id}`;
    
    return connection.promise().query(sqlQuery)
    .then(async ([rows]) => { 
        return {status: 204, message: {}}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function fetchUser() {
    const sql = "SELECT * FROM users";
    
    return connection.promise().query(sql)
    .then(async ([rows]) => { 
        return {status: 200, message: rows}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function fetchOneUser(id) {
    const sql = "SELECT * FROM users WHERE id = ?";
    
    return connection.promise().query(sql, id)
    .then(async ([rows]) => {
        return rows.length === 0 ? {status: 404, message: {}} : {status: 200, message: rows[0]}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

module.exports = {
    insertUser,
    fetchUser,
    fetchOneUser,
    updateUser,
    deleteUser
}