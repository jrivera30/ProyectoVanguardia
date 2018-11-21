let express = require('express');
let router = express.Router();

let mongoose = require('../config/conexion.js');
let Usuario = require('../models/usuario.js');

router.get('/', (req, res, next) => {
  Usuario.find((err, usuarios) => {
    
    if (err) throw err;
    res.render('indexUsuario', { usuarios: usuarios });
  });
});

router.get('/usuario/:id', (req, res, next)=>{
  let idUsuario = req.params.id
  Usuario.findOne({id: idUsuario}, (err, usuario)=>{
    if(err) throw err;
    res.render('indexUsuario', {usuarios:usuarios});
  });
});

router.get('/usuario/nuevo', (req, res, next) => {
  res.render('indexUsuario', {});
});

router.get('/usuario/modificar/:id', (req, res, next) => {
  let idUsuario = req.params.id;  
  Usuario.findOne({_id: idUsuario }, (err, usuario) => {
    
    if (err) throw err;
    res.render('indexUsuario', { usuario: usuario });
  });
});

router.get('/usuario/eliminar/:id', (req, res, next) => {
  let idUsuario = req.params.id;

  Usuario.remove({_id: idUsuario }, (err) => {
    if (err) throw err;
    
    res.redirect('/');
  });
});

module.exports = router;