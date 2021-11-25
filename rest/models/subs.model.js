const mongoose = require('mongoose');
const {Schema} = mongoose;

const SubSchema = Schema({
    FechaInicio: { type: Date, require: [true, "La fecha iniciañ es requerida"] },
    FechaFinal: { type: Date, require: [true, "La fecha final es requerida"] },
    Cliente: { type: String, require: [true, "Sus datos son requeridos"] },
    Estado: { type: String, require: [true, "El estado es requerido"] },
    Costo: { type: Number, require: [true, "El costo es requerido"] },
    Tipo: { type: String, require: [true, "Tipo de menbresia requerida"] }
});



module.exports = subs = mongoose.model('subs', SubSchema);