// Importamos DataTypes desde el módulo sequelize para definir tipos de columnas en la base de datos
const { DataTypes } = require('sequelize');

// Importamos el objeto connection desde una ruta relativa, que maneja la conexión con nuestra base de datos
const { connection } = require('../../database/index');

// Definimos un modelo 'User' usando el objeto connection que se refiere a la tabla 'user' en la base de datos
const Users = connection.define('users', {
  // Definimos una columna 'name' para almacenar el nombre del usuario
  user_name: {
    type: DataTypes.STRING // Establece el tipo de dato como cadena de texto
  },
  email: {
    type: DataTypes.STRING // Establece el tipo de dato como cadena de texto
  },
  password: {
    type: DataTypes.STRING // Establece el tipo de dato como cadena de texto
  },
  mobil_phone: {
    type: DataTypes.INTEGER // Establece los roles que puede adoptar el usuario en la aplicación

  },
  address: {
    type: DataTypes.STRING
  }

},
  {
    // Configuración adicional para el modelo
    timestamps: false // Desactiva la creación automática de las columnas 'createdAt' y 'updatedAt'
  });

// Exportamos el modelo 'User' para poder usarlo en otras partes de la aplicación
module.exports = Users;
