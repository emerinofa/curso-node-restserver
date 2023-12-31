const { Router } = require('express')
const { usuariosGet, 
        usuariosPost, 
        usuariosPut,
        usuariosDelete, 
        usuariosPatch} = require('../controllers/usuarios.controler')

const router = Router()

router.get('/', usuariosGet)

router.post('/', usuariosPost)

router.put('/:id', usuariosPut)

router.delete('/', usuariosDelete)

router.delete('/', usuariosPatch)





module.exports = router