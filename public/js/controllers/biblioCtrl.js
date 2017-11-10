angular.module('controladores.biblioteca',['servicios.biblioteca'])
	.controller('LibroCtrl',LibroCtrl);

function LibroCtrl($scope,$http,Libro){

	$scope.libro = {};

	$scope.libros = Libro.libros;

	$scope.getLibros = function(){
		Libro.getLibros();
		$scope.libros = Libro.libros;
	};

	$scope.deleteLibro = function(id){
		Libro.deleteLibro(id);
		Libro.getLibros();
		$scope.libros = Libro.libros;
	};

	$scope.updateLibro = function(libro){
		$scope.libro = libro;
		Libro.updateLibro(libro);
		//Libro.getLibros();
	};

	$scope.addLibro = function(){
		console.log($scope.libro);
		Libro.addLibro($scope.libro);
		//$scope.libro = {};
	};

	$scope.showLibro = function(libro){
		$scope.libro = libro;
		Libro.getById(libro._id);
		//
	};

}