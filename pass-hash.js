const bcrypt = require('bcrypt');

const myPassword = 'hola1234'
const hash = async () => {
  await bcrypt.hash(myPassword, 10)
  console.log(await bcrypt.hash(myPassword, 10));
};

hash();

module.exports = hash;