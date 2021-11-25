const mongoose = require('mongoose');
const {MONGO_URI} = require('../config');

const ConnectionBD = async ()=>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log("La base de datos se conecto correctamente");
    } catch (error) {
        console.log(error);
        throw new Error("Error no conectado");
    }

}


module.exports = ConnectionBD;