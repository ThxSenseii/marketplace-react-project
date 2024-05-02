import api from './config.js'
import React, { useState, useEffect } from 'react';



/* const signupp = async (body) => {
  try {
    console.log(body)
    const { data } = await api.post('/auth/SignUp', body)
    console.log(data);
    return { userData: data, userId: data.userId };
  } catch (error) {
    console.log(error)
    return { userData: null, userId: null };
  }
}

export {
  signupp
} */

/* const signupp = async (body) => {
  try {
    const { data } = await api.post('/auth/SignUp', body);
    return { userData: data, userId: data.userId, error: null };
  } catch (error) {
    if (error.response && error.response.status === 409) {
      // Usuario ya existe en la base de datos
      return { userData: null, userId: null, error: "User already exists" };
    } else {
      // Otro tipo de error
      console.error("Error during signup:", error);
      return { userData: null, userId: null, error: "Signup error" };
    }
  }
}; */

const signupp = async (body) => {
  try {

    console.log(body)
    const { data } = await api.post('/auth/SignUp', body)
    return data
  } catch (error) {
    console.log(error)
  }
}

export {
  signupp
};

const loginn = async (body) => {
  try {
    console.log(body);
    const { data } = await api.post('/auth/LogIn', body);
    console.log(data);
    return { 
      userData: data,
      userId: data.userId,
      address: data.address,
      userName: data.name,
      mobilePhone: data.phone,
    }; 
  } catch (error) {
    console.log(error);
    return { 
      userData: null,
      userId: null,
      address: null,
      userName: null,
      mobilePhone: null
    };
  }
};

export { loginn };




const ImgIni = async (id) => {
  try {

    console.log(id)
    const { data } = await api.get(`/products/initialImage/${id}`)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

export {
  ImgIni
}

const ImgAll = async (body) => {
  try {


    const { data } = await api.get(`/productos/allImages`, body)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

export {
  ImgAll
}

