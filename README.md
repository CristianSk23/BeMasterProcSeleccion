# Mi Página Web de Videojuegos

Esta es una página web dedicada a los videojuegos, construida con React, Material-UI, Redux, Redux-Thunk y React-Router-Dom.

## Características

### Login

La página comienza con un componente de inicio de sesión, donde se le pide al usuario que introduzca su correo electrónico y contraseña. Hay un archivo asociado que verifica si las entradas de correo electrónico y contraseña están correctamente diligenciadas.

### Home

Una vez que el usuario ha iniciado sesión, será redirigido al componente Home. Aquí se cargarán 5 tarjetas con géneros de videojuegos obtenidos de la API Rawg.io.

### Detalles del Videojuego

Al hacer clic en una tarjeta de género, el usuario podrá acceder a los videojuegos de esa categoría seleccionada. Además, al hacer clic en una tarjeta de un videojuego, se cargará un nuevo componente que mostrará la información detallada del videojuego seleccionado.

## Herramientas Utilizadas

- React: Una biblioteca de JavaScript para construir interfaces de usuario.
- Material-UI: Un sistema de diseño popular para React.
- Redux: Una biblioteca de JavaScript para gestionar el estado de la aplicación.
- Redux-Thunk: Un middleware de Redux para manejar acciones asíncronas.
- React-Router-Dom: Una biblioteca de enrutamiento para React.
