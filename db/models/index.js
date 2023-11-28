// Se encarga de conectar el ORM con el model, Envia la conexión a los modelos para hacer mapeo y serializacion de datos
const { User, UserSchema } = require('./user.model') // Esta la configuracion y setup inicial de Sequelize con los modelos, por eso traemos estos

// Le pasamos la conexion
function setupModels(sequelize){

  User.init(UserSchema, User.config(sequelize));
}

// Para correr esto vamos al archivo sequelize en la carpeta libs

module.exports = setupModels;