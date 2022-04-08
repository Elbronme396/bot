const mongoose = require('mongoose');
const config = require('../../config/config.json');
module.exports = client => {
    //nos conectamos a la base de datos

    let palo = 53;

    mongoose.connect(config.mongodb, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`Conectado a la nube(MONGOBD)`.blue)
    }).catch((err) => {
        console.log(`☁ Error al conectar a la base de datos mongodb`.red);
        console.log(err)
    })
    console.log(`Conectado como ${client.user.tag}`.green)
}