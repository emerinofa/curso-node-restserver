const { Router } = require('express')
const { usuariosGet, 
        usuariosPost, 
        usuariosPut,
        usuariosDelete, 
        usuariosPatch} = require('../controllers/usuarios.controler')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const { esRolValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators')
const router = Router()


router.get('/', usuariosGet)

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria y debe tener al menos 6 caracteres').isLength({ min: 6 }),
    check('correo').custom(emailExiste),
    check('rol', 'No es un rol permitido').not().isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(esRolValido),
    validarCampos
], usuariosPost)

router.put('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos
], usuariosPut)

router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
]
, usuariosDelete)

router.patch('/', usuariosPatch)





module.exports = router