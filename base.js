require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

//exportar el documento
async function getServicios() {
  try {
    const result = await pool.query(`SELECT * FROM usuarios;`);
    return result.rows;
  } catch (e) {
    return e;
  }
}
//insertar nuevas tareas
async function nuevoServicio(username,contraseña, email, fechaCreacion) {
  try {
    const result = await pool.query(
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
    const result = await pool.query(`DELETE FROM usuarios WHERE id='${id}'`);
    return result.rowCount;
  } catch (e) {
    return e;
  }
}

module.exports = { getServicios, nuevoServicio, deleteServicio };
