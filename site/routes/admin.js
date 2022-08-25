const express = require('express');
const router = express.Router();
const {listar,crear,editar,store,update,destroy} = require('../controllers/adminController');

/* get home page */
router.get('/listar',listar);

/* Añadir un producto */
router.get('/crear',crear);
router.post('/crear',store)

router.get('/editar/:id',editar);
router.put('/edit/:id', update);

router.delete('/destroy/:id', destroy);

module.exports = router;