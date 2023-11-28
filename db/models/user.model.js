const {Model, DataTypes, Sequelize} = require('sequelize');

// Creamos toda la estructura para que despues sequelize la cree en la tabla
const USER_TABLE = 'users'; //Nombre de la tabla

// Le decimos el esquema. Define la estructura de la bd
// La estructura de la tabla es por objetos con propiedades
const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }// El campo field es para respetar las buenas practicas SQL de naming, por eso esta ahi
}

// Definimos una clase con nuestro modelo. El modelo tiene toda las formas de hacer querys, por eso es muy importante
class User extends Model{
  // Creamos metodos estaticos. O sea que no necesito declarar el objeto para acceder a esos metodos. Definimos las asociaciones
  static associate() {
    // associate
  }
  static config(sequelize){
    // Primero la conexion que tendra, luego el nombre de la tabla. Nombre del modelo y el timestamp que crean campos por defecto para creacion y actualizacion
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User };