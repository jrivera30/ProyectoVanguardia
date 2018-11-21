let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let catedraticoSchema = new Schema({
    id_catedratico: { type: Number },
    nombre: { nombres: {type: String}, apellidos: {type:String} },
}, { versionKey: false });

let Catedratico = mongoose.model('Catedraticos', catedraticoSchema);

module.exports = Catedratico;