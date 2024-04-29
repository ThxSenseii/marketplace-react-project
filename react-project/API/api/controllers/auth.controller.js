// Importamos los modelos de usuario y contacto
const Users = require('../models/users.model');

// Importamos las librerías para manejar tokens y cifrado de contraseñas
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Definimos la función signUp, que será una función asincrónica para manejar la creación de usuarios
const signUp = async (req, res) => {
  try {
    console.log(req.body)
    //Buscamos al usuario primero para erificar que no se haya registrado antes.
    const findUsers = await Users.findOne({
      where: {
        email: req.body.email
        /* user_name: req.body.user_name */
      }
    })
    // Si existe el usuario devolvemos un mensaje con que le usuario ya existe y que así no pueda registrase si no que haga login
    if (findUsers) {
      
      return res.json({ message: 'User already exits' })
     
      
    }
    // Generamos una 'sal' para el cifrado de la contraseña. Esto ayuda a asegurar la contraseña aún más
    const salt = bcrypt.genSaltSync(parseInt('10'));
    // Ciframos la contraseña que viene en el cuerpo de la solicitud (req.body.password) usando la 'sal' generada
    req.body.password = bcrypt.hashSync(req.body.password, salt);

    // Creamos un nuevo usuario con los datos proporcionados en la solicitud
    const users = await Users.create({
      email: req.body.email,
      password: req.body.password,
      user_name: req.body.user_name,
      address: req.body.address,
      mobil_phone: req.body.mobil_phone
    });

    // Creamos una nueva entrada de contacto con los datos proporcionados
    // Asociamos el contacto creado con el usuario creado utilizando la función setContact generada por Sequelize
    // await contact.setUsers(users);

    // Creamos el payload del token, incluyendo el email del usuario
    const payload = { email: req.body.email };
    // Firmamos el token con una clave secreta y establecemos un tiempo de expiración
    const token = jwt.sign(payload, 'secret', { expiresIn: '1h' });
    console.log(token)
    // Si todo es correcto, devolvemos el token al usuario con un estado 200 (OK)
    return res.status(200).json({ token: token, email: users.email, userId: users.id, name: users.user_name, phone: users.mobil_phone, address: users.address});  // ===> { token: token }
  } catch (error) {
    // Si hay un error, lo registramos y devolvemos un error 500 (Error interno del servidor)
    console.log('Error signing up user');
    return res.status(500).json(error);
  }
}

// Definición de la función 'login' que es asincrónica para manejar peticiones de inicio de sesión
const login = async (req, res) => {
  try {
    // Intenta encontrar un usuario en la base de datos que coincida con el email proporcionado
    const users = await Users.findOne({
      where: {
        email: req.body.email // El email viene del cuerpo de la petición
      }
    });
    console.log('User found:', users);

    // Si no se encuentra un usuario con el email proporcionado, devuelve un error 404
    if (!users) {
      return res.status(404).send('Email or password wrong'); // Mensaje de error indicando que el email o contraseña son incorrectos
      
    }

    // Utiliza bcrypt para comparar la contraseña proporcionada con la almacenada en la base de datos
    const checkPass = bcrypt.compareSync(req.body.password, users.password);

    // Si la contraseña es correcta
    if (checkPass) {
      // Crea un payload con el email del usuario
      const payload = { email: req.body.email };
      // Firma un token JWT usando una clave secreta y establece un tiempo de expiración
      const token = jwt.sign(payload, 'secret', { expiresIn: '1h' });
      // Devuelve el token generado con un estado 200, indicando éxito en el inicio de sesión
      return res.status(200).json({ token: token, email: users.email, userId: users.id, name: users.user_name, phone: users.mobil_phone, address: users.address}); // El objeto json contiene el token generado
    } else {
      // Si la contraseña no es correcta, devuelve un error 404
      return res.status(404).send('Email or password wrong'); // Mensaje de error similar al anterior
    }

  } catch (error) {
    // En caso de un error durante el proceso, registra el error y devuelve un estado 500
    console.log('Error logging in'); // Mensaje de error en consola
    return res.status(500).json(error); // Devuelve el error capturado como respuesta JSON
  }
}

// Exportamos la función signUp para que pueda ser utilizada en otros archivos
module.exports = {
  signUp,
  login
};
