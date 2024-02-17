const mongoose = require('mongoose')
require('dotenv').config()

const dbConnection = async() => {
    try {
        console.log(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log('su base de datos ha sido conectada')
        
    } catch (error) {
        console.error(error)
        throw new Error('sin conexion a la base de datos')
        
    }
}

module.exports = {
    dbConnection
}
