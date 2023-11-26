const { Client } = require('pg');

async function getConnection(){
  // Creacion de un cliente con POO y una instancia de client
  // Configuracion de la conexión: host, port, user, password, database
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'mario',
    password: 'admin123',
    database: 'my_store'
  });
  
  // Hacer la conexion del cliente. Esta da una promesa como retorno, hay que correrla de forma asincrona. Así que todo lo ponemos en una funcion asincrona. Retorna el client
  await client.connect();
  return client;
}
// Exporta el modulo
module.exports = getConnection;