# Library Catalog App - React Frontend

![Library Catalog App](app_screenshot.png)

## Contexto

Somos un sello editorial de libros multinacional. Queremos ofrecer a nuestro público una forma de ver nuestro catálogo y poder guardar los libros que les interesan en una lista de lectura.

Para ello, hemos desarrollado una aplicación web en React que permite a los usuarios ver los libros disponibles y crear una lista de lectura. La aplicación ha sido diseñada teniendo en cuenta los siguientes aspectos:

- Aunque el framework utilizado en la implementación actual es React, podríamos cambiarlo en el futuro, pero nos esforzaremos por reutilizar la mayor cantidad de código posible.
- La interfaz de usuario de la aplicación se ha diseñado para ser intuitiva y agradable visualmente.
- La mayoría de nuestros usuarios (80%) acceden a la aplicación desde navegadores de escritorio.
- Los datos de los libros se obtienen a partir del archivo `books.json`, el cual sigue una estructura específica. Si lo deseas, puedes añadir más libros manteniendo dicha estructura.

## Requisitos

### Funcionalidad

1. **Visualización de Libros Disponibles**: La aplicación muestra una lista de libros disponibles que los usuarios pueden revisar.

2. **Creación de Lista de Lectura**: Los usuarios pueden crear una lista de lectura a partir de los libros disponibles. La interfaz distingue claramente qué libros están en la lista de lectura y cuáles no. Además, es posible mover un libro de la lista de lectura a la lista de disponibles.

3. **Filtrado de Libros por Género**: Los usuarios pueden filtrar la lista de libros disponibles por género. Un contador muestra el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.

4. **Sincronización de Estado**: El estado global refleja el número de libros en la lista de lectura y el número de libros disponibles. Si un libro se traslada de la lista de disponibles a la lista de lectura, los recuentos se actualizan automáticamente.

5. **Persistencia de Datos**: La aplicación persiste los datos de la lista de lectura en el almacenamiento local del navegador. La lista de lectura se mantiene incluso al recargar la página.

6. **Sincronización entre Pestañas**: Los cambios realizados en una pestaña se reflejan en otras pestañas abiertas por el mismo usuario. Esto se logra sin necesidad de un backend.

7. **Despliegue**: La aplicación se encuentra desplegada en [Netlify](https://www.netlify.com/) y es accesible a través de la siguiente URL pública: [Library Catalog App](https://example-library-catalog.netlify.app).

8. **Test**: La aplicación incluye al menos un test. Hemos priorizado la creación de un test que consideramos fundamental para la aplicación.

## Ejecución del Proyecto

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando `npm install` o `yarn install`.
3. Ejecuta la aplicación con `npm start` o `yarn start`.
4. Abre tu navegador y accede a `http://localhost:3000`.

## Próximos Pasos

La aplicación actual es una primera versión que cumple con los requisitos establecidos. Sin embargo, siempre hay margen para mejoras y nuevas características. Algunas ideas para futuras iteraciones incluyen:

- Implementación de un sistema de autenticación para guardar las listas de lectura de usuarios registrados.
- Mejora de la interfaz de usuario para hacerla aún más atractiva y amigable.
- Agregar funcionalidad de búsqueda para facilitar la búsqueda de libros por título o autor.
- Añadir la posibilidad de compartir libros favoritos en redes sociales.

¡Gracias por tu interés en nuestra aplicación!

---

© 2023 [Nombre de la Compañía]
