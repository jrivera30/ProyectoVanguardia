let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let cursadaSchema = new Schema({
    id_carrera: { type: Number },
    desc_carrera: { type: String },
    id_clase: { type: Number },
    desc_clase: { type: String },
    id_requisito: { type: Number },
    desc_requisito: { type: String },
    id_alumno: {type:Number}
}, { versionKey: false });

let Cursada = mongoose.model('Cursadas', cursadaSchema);

module.exports = Cursada;