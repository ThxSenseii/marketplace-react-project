const Users = require('../models/users.model.js')

async function getAllUsers(req, res) {
  try {
    const users = await Users.findAll({ paranoid: false })
    if (users) {
      return res.status(200).json(users)
    } else {
      return res.status(404).send('No users found')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getOneUser(req, res) {
  try {
    const users = await Users.findByPk(req.params.id)
    if (users) {
      return res.status(200).json(users)
    } else {
      return res.status(404).send('User not found')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function createUser(req, res) {
  try {
    const users = await Users.create({
      name: req.body.name,
    })
    return res.status(200).json({ message: 'User created', users: users })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updateUser(req, res) {
  try {
    const [userExist, users] = await User.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    })
    if (userExist !== 0) {
      return res.status(200).json({ message: 'User updated', users: users })
    } else {
      return res.status(404).send('User not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteUser(req, res) {
  try {
    const users = await Users.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (users) {
      return res.status(200).json('User deleted')
    } else {
      return res.status(404).send('User not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
}
