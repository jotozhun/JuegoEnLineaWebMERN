const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const estadisticasSchema = new Schema({
    partidos_ganados: Number,
    partidas_perdidos: Number,
    total_goles_anotados: Number,
    total_goles_atajados: Number,
    total_goles_recibidos: Number
})

const partidoSchema = new Schema({
    fecha: Date,
    win: Boolean,
    esTorneo: Boolean,
    goles_anotados: Number,
    goles_atajados: Number,
    goles_recibidos: Number
},{
    timestamps: true
})

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: 'regular',
        enum: [
            'regular',
            'admin'
        ]
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    partidos: [partidoSchema],
    sign_up_date: {
        type: Date,
        default: Date.now()
    },
    estadisticas: estadisticasSchema,
    last_login_date: {
        type: Date,
        default: Date.now()
    }
},{
    timestamps: true
});

/*
userSchema.pre('save', function(next){
    bcrypt.genSalt(10).then(salts => {
        bcrypt.hash(this.password, salts).then(hash => {
            this.password = hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error));
});
*/
const User = mongoose.model('User', userSchema);

module.exports = User;