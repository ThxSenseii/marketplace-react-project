import api from './config.js'

const signupp = async (body) => {
  try {

    console.log(body)
    const { data } = await api.post('/auth/SignUp', body)
    return { userData: data, userId: data.id };
  } catch (error) {
    console.log(error)
  }
}

export {
  signupp
}

const loginn = async (body) => {
  try {

    console.log(body)
    const { data } = await api.post('/auth/LogIn', body)
    console.log(data)
    return { userData: data, userId: data.id };
  } catch (error) {
    console.log(error)
    return { userData: null, userId: null };
  }
}

export {
  loginn
}

const getUserData = async (userId) => {
  try {
    const { data } = await api.get(`/users/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export {
  getUserData
}



