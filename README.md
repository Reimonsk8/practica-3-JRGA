Practica 3 de sistemas distribuidos

Pasos para ejecutar el programa

1-clonar git

2-corre en la consola de comandos "ruta de mongo .exe" --dbpath "ruta de la carpeta de la base de datos"

3-luego correr el mongo.exe

2-desde la consola navegar hasta el directorio de nuestros archivos

3-correr '$npm install' en el directorio que tenemos nuestros archivos git

4-correr '$npm start' para correr el servidor local express

5-abrir la extension postman de chrome

6-insertar en postman los siguientes request de URI para obtener las cosas

usar Get 'localhost:3000' para desplegar pagina bienvenida

usar Get 'localhost:3000/libros' para desplegar los libros disponibles

usar Get 'localhost:3000/libros/:id' para despeglar el libro con el id seleccionado

usar Post 'localhost:3000/libros/' para insertar nuestro body como un libro debe llevar el orden indicado {titulo,anio,genero}

usar Put 'localhost:3000/libros/:id' para actualizar con nuestro body {titulo,anio,genero} de el libro con el id seleccionado

usar Delete 'localhost:3000/libros/:id' para eliminar el libro con el id seleccionado

usar Get 'localhost:3000/autores' para desplegar los autores disponibles

usar Get 'localhost:3000/autores/:autor' para despeglar los libros con el autor seleccionado

usar Post 'localhost:3000/autores/' para insertar nuestro body {nombre, apeido} de el libro para un autor

usar Put 'localhost:3000/autores/:autor' para actualizar con nuestro body {nombre, apeido} de el libro del autor seleccionado

usar Delete 'localhost:3000/autores/:autor' para eliminar el libro del autor seleccionado
