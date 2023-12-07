const bcrypt = require('bcrypt');
//const { hash } = require('./pass-hash');
const myPassword = 'hola1234'
const hash = '$2b$10$md9phz5nDnV1jk./IiqSdud1FpQ4B6Gvka/lKTrTYMKeSLr77FyC2'
const hashVerify = async () => {
  await bcrypt.hash(myPassword, 10)
  console.log(await bcrypt.compare(myPassword, hash));
};

hashVerify();