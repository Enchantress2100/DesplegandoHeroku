require("dotenv").config();

const { Client } = require("pg");
const db = async () => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  const res = await client.query("SELECT * from usuarios");
  await client.end();
  return res.rows;
};





// //exportar el documento
// async function getServicios() {
  //   try {
    //     const result = await client.query(`SELECT * FROM usuarios;`);
    //     return result.rows;
    //   } catch (e) {
      //     return e;
      //   }
      // }
      //insertar nuevas tareas
      async function nuevoServicio(username,contraseña, email, fechaCreacion) {
        try {
          const result = await client.query(
            `INSERT INTO usuarios(username,contraseña,email,fechaCreacion) values('${username}',
            '${contraseña}','${email}', '${fechaCreacion}') RETURNING*;`
            );
            return result.rows;
          } catch (e) {
            return e;
          }
        }
        
        //borrar tareas del documento
        async function deleteServicio(id) {
          try {
            const result = await client.query(`DELETE FROM usuarios WHERE id='${id}'`);
            return result.rowCount;
          } catch (e) {
            return e;
          }
        }
      
        module.exports = db;
        