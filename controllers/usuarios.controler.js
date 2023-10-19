const { response } = require('express')


const usuariosGet = (req, res = response) => {

    const query = req.query

    res.json({
        message: 'Get API - controlador',
        query
    })
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body

    res.json({
        message: 'Post API - controlador',
        nombre,
        edad,
    })
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params

    res.json({
        message: 'Put API - controlador',
        id
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        message: 'Delete API - controlador'
    })
}

const usuariosPatch = (req, res = response) => {
  res.json({
      message: 'Patch API - controlador'
  })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch,
}