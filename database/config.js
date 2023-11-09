const mongoose = require('mongoose')


const dbConection = async() => {

    try {

        await mongoose.connect(process.env.MONGODB_CNN)

        console.log('Base de datos online')
    } catch (error) {
        console.log(error)
        throw new Error('Error de coneccion a la base de datos')
    }


}

module.exports = {
    dbConection
}