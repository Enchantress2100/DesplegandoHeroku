const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const port=process.env.PORT || 5000

//importar funciones de base.js
const { getServicios, nuevoServicio, deleteServicio } = require("./base");

//middleware de bodyParser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//integrar handlebars como motos de plantillas
app.set("view engine", "handlebars");

//configurar el motor de plantilla con el metodo engine
app.engine(
  "handlebars",
  exphbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/componentes",
  })
);

//middleware para cargar las librerias de bootstrap y jquery
app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/css")
);
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
app.use(
  "/BootstrapJs",
  express.static(__dirname + "/node_modules/bootstrap/dist/js/")
);

//ruta para visualizar las tareas
app.get("/", async (req, res) => {
  const users = await getServicios();
  res.render("inicio", {
    layout: "inicio",
    users,
  });
});
app.get("/users", async (req, res) => {
  const respuesta = await getServicios();
  res.send(respuesta);
});

//ruta para crear nuevas tareas
app.post("/users", async (req, res) => {
  const { username, contraseña, email, fechaCreacion } = req.body;
  await nuevoServicio(username, contraseña, email, fechaCreacion);
  res.redirect("/");
});

app.get("/user-create", async (req, res) => {
  res.render("agregar", {
    layout: "agregar",
  });
});

//ruta para borrar tareas
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  let id1 = id.slice(3);
  const respuesta = await deleteServicio(id1);
  respuesta > 0
    ? res.send(`la tarea de id ${id} fue eliminado con exito`)
    : res.send("no existe una tarea con ese id");
});

app.get("/user-delete/:id", async (req, res) => {
  const { id } = req.params;
  let id1 = id.slice(3);
  const respuesta = await deleteServicio(id1);
  res.render("eliminar", {
    layout: "eliminar",
    respuesta,
  });
});

app.listen(port, () => {
  console.log(`Server on and working OK`);
});
