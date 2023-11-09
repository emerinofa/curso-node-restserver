const { Schema, model } = require('mongoose')

const RoleSchema = Schema({
    rol: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    
})

module.exports = model('Role', RoleSchema)