const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reglasSchema = new Schema({
    num_tiros: Number,
    tiempo_espera_minutos: Number,
    tiempo_patear_segundos: Number
})

const premioSchema = new Schema({
    nombre: String,
    company: String,
    cantidad: Number,
    descripcion: String,
    imagen: {
        data: Buffer,
        contentType: String
    }
})

const grupoSchema = new Schema({
    num_grupo: Number,
    usuarios: [String]
})

const torneoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    max_participantes: Number,
    fecha_inicio: Number,
    fecha_fin: Number,
    hora_inicio: Date,
    reglas: reglasSchema,
    premios: [premioSchema],
    num_grupos: Number,
    grupos: [grupoSchema]
})

const Torneo = mongoose.model('Torneo', torneoSchema);

module.exports = Torneo;