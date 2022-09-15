const express = require('express');
const router = express.Router();
/* const adminCheck= require('../middlewares/adminCheck') */
const {listar,crear,editar,store,update,destroy,historial,restore,crash} = require('../controllers/adminController');
const productsValidation=require('../validations/productsValidation');

const multer = require('multer')
const upload = require('../middlewares/multerProductos')


/* get home page */
router.get('/listar',/* adminCheck */ listar);
router.get('/historial',/* adminCheck */ historial);

/* Añadir un producto */
router.get('/crear',/* adminCheck */ crear);
router.post('/crear',upload.single('imagen'),productsValidation,store)

//editar un producto
router.get('/editar/:id',/* adminCheck */ editar);
router.put('/editar/:id',upload.single('imagen'),productsValidation, update);

//eliminar un producto
router.delete('/destroy/:id', destroy);
router.delete('/restore/:id', restore);
router.delete('/crash/:id', crash);

module.exports = router;