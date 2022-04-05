require("dotenv").config();

const { Client } = require("pg");
const eu = async (id) => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  const res = await client.query(`DELETE FROM usuarios WHERE id='${id}'`);
  await client.end();
  return res.rowCount;
};

module.exports = eu;
