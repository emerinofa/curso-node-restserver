require('dotenv').config()
const Server = require('./models/server')


const server = new Server()

server.listen()

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Escuchando el puerto ${process.env.PORT}`);
});