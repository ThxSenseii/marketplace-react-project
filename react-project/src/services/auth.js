import api from './config.js'
import React, { useState, useEffect } from 'react';



const signupp = async (body) => {
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
}

/* const loginn = async (body) => {
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
} */

/* const loginn = async (body) => {
  try {
    console.log(body);
    const { data } = await api.post('/auth/LogIn', body);
    console.log(data);
    return { userData: data, userId: data.userId }; // Modificamos para obtener el ID del usuario desde la respuesta
  } catch (error) {
    console.log(error);
    return { userData: null, userId: null };
  }
};

export { loginn }; */

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

