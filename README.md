# prueba_tecnica

## Enunciado
Prueba de maquetación
La prueba consiste en maquetar un listado dinámico de tarjetas.
Las tarjetas son enlaces, todas a la misma url.
Tienen todas, el mismo contenido, excepto por el título rojo.
Con JS o JQuery, se debe dar dinamismo al listado. Al introducir un texto en el input y al dar al
botón “+”, se debe añadir una tarjeta con el título del texto del input.
Al dar a la X en la tarjeta, la tarjeta es eliminada.
Se debe tener en cuenta la accesibilidad y que sea responsive. Se puede utilizar Bootstrap
cómo base.
![Lista-dinamica](https://user-images.githubusercontent.com/93122874/174850967-0bac413f-536b-42fe-8385-661c253207d2.png)


## Tecnologia usada
He utilizado JS, CSS3 y HTML5 para realizar la prueba.
Al no haber especificaciones para navegadores en concreto he usado flex para la correcta visualizacion de las tarjetas en las resoluciones de desktop, tablet y mobile.
Las seis primeras tarjetas se cargan dinamicamente desde JS simulando una carga inicial.
Utilizo h3 como titulo de las tarjetas asumiendo que la pagina que contenga la seccion dispondra de h1 y h2.

Para visionar la prueba tan solo es abrir el archivo index.html que se encuentra en la carpeta src en un navegador.
