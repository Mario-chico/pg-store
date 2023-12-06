// Se encarga de conectar el ORM con el model, Envia la conexión a los modelos para hacer mapeo y serializacion de datos
const { User, UserSchema } = require('./user.model') // Esta la configuracion y setup inicial de Sequelize con los modelos, por eso traemos estos
const { Customer, CustomerSchema} = require('./customers.model');
const { Category, CategorySchema} = require('./category.model');
const { Product, ProductSchema} = require('./product.model');
const { Order, OrderSchema} = require('./order.model');
const { OrderProduct, OrderProductSchema} = require('./order-product.model');

// Le pasamos la conexion
function setupModels(sequelize){

  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
}

// Para correr esto vamos al archivo sequelize en la carpeta libs

module.exports = setupModels;