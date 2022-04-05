require("dotenv").config();

const { Client } = require("pg");
const cu = async (username, contraseña, email, fechaCreacion) => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  const res =
    await client.query(`INSERT INTO usuarios(username,contraseña,email,fechaCreacion) values('${username}',
            '${contraseña}','${email}', '${fechaCreacion}') RETURNING*;`);
  await client.end();
  return res.rows;
};

module.exports = cu;
