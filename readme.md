https://usuarios-consuelo.herokuapp.com/

Para realizar deploy en Heroku:
1. Crear cuenta en Heroku: https://signup.heroku.com/
2. Iniciar sesión en https://id.heroku.com/login
3. Dirigirse a https://dashboard.heroku.com/apps y presionar en Create new app. Darle un nombre y confirmar con Create app.
4. Acceder a https://data.heroku.com para crear la base de datos en Heroku. Hacer click en Heroku Postgres, en el botón Create One.
5. Instalar Heroku Postgres, escogiendo la versión de aplicación Hobby Dev. Confirmar con Submit Order From. Presionar Heroku Postgres.
6. Dar click en Settings y acceder a View Credentials.
7. Instalar el programa https://dbeaver.io//, para migrar la base de datos.  Acceder al programa, seleccionar que se usará una base de datos Postgres, por lo que se debe escribir los datos que están disponibles en las Credentials de Heroku (port, user, database, etc). Presionar en probar conexión.
8. Presionar en New SQL Script e importar el documento sql del proyecto (la tabla). Ejecutar el script.
9. En todos los archivos de las distintas funciones, modificar:   
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
10. En el archivo index, facilitar que Heroku disponibilice el puerto con: const port=process.env.PORT || 5000
11.Instalar Heroku CLI siguiendo las instrucciones de: https://devcenter.heroku.com/articles/heroku-cli
12. Ejecutar heroku login en la terminal, iniciar sesión.
13. Crear repositorio en git del proyecto.
14. Ejecutar en terminal: heroku git:remote -a usuarios-consuelo
15. Subir la rama master del proyecto: git push heroku master . Si no estamos en la rama master, dirigirnos a ella con git checkout -b master.
16. Acceder a la dirección https://usuarios-consuelo.herokuapp.com/. Realizar pruebas. Para eliminar, por favor refrescar la página.


