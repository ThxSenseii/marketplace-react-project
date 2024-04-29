import api from './config.js'
import React, { useState, useEffect } from 'react';



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
}

const loginn = async (body) => {
  try {

    console.log(body)
    const { data } = await api.post('/auth/LogIn', body)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

export {
  loginn
}

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

