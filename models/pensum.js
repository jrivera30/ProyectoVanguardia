let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let pensumSchema = new Schema({
    id_carrera: { type: Number },
    desc_carrera: { type: String },
    id_clase: { type: Number },
    desc_clase: { type: String },
    id_requisito: { type: Number },
    desc_requisito: { type: String }
}, { versionKey: false });

let Pensum = mongoose.model('Pensums', pensumSchema);

module.exports = Pensum;