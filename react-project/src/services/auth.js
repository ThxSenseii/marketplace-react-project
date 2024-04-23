import api from './config.js'

const signupp = async (body) => {
    try {
  
        console.log(body)
      const { data } = await api.post('/auth/SignUp',body )
      return data
    } catch (error) {
      console.log(error)
    }
  }
  
  export {
    signupp
  }
  
