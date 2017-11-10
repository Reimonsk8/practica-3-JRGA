var express = require('express');
var router = express.Router();

var multer = require('multer');//v1.0.5
var upload = multer();//parsing 

var modelos = require('../models/Libro');
var modelosAutor = require('../models/Autor');
var LibrosCtrl = require('../controllers/LibrosCtrl');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', saludo: 'Gen 2017' });
});

router.route('/libros')
	.get(LibrosCtrl.getLibros)
	.post(upload.array(),LibrosCtrl.addLibro);

router.route('/libros/:id')
	.get(LibrosCtrl.getById)
	.put(upload.array(),LibrosCtrl.updateLibro)
	.delete(LibrosCtrl.deleteLibro);

router.route('/autores')
	.get(LibrosCtrl.getAutores)
	.post(upload.array(),LibrosCtrl.addAutor);

router.route('/autores/:id')
	.get(LibrosCtrl.getByAutor)
	.put(upload.array(),LibrosCtrl.updateAutores)
	.delete(LibrosCtrl.deleteAutor);

router.route('/autores/:id/libros')
	.get(LibrosCtrl.getLibrosByAutor);

module.exports = router;

