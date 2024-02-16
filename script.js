// Importar las variables de ciudades
import { barcelona, roma, paris, londres } from "./ciudades.js";

// Obtener todos los elementos del DOM
const enlaces = document.querySelectorAll(".ciudad");
const tituloElemento = document.getElementById("titulo");
const subTituloElemento = document.getElementById("subtitulo");
const parrafoElemento = document.getElementById("parrafo");

enlaces.forEach((enlace) => {
  // Asociar un evento de clic a cada enlace
  enlace.addEventListener("click", function () {
    // Al hacer clic, remover la clase "active" de todos los enlaces
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    // Agregar la clase "active" al enlace actual que fue clicado
    this.classList.add("active");

    // Obtener el contenido asociado al enlace clicado
    let contenido = obtenerContenido(this.textContent);

    // Mostrar el contenido en el DOM
    tituloElemento.innerHTML = contenido.titulo;
    subTituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
  });
});

// Función para obtener la información de la ciudad desde ciudades.js
function obtenerContenido(enlace) {
  // Definir un objeto con las variables de las ciudades y sus contenidos
  let contenidoCiudades = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };

  // Devolver la información correspondiente al enlace proporcionado
  return contenidoCiudades[enlace];
}
