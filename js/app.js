let arrayAlumno   = [];
let botonRegistro = document.querySelector('#enviarRegistro');

botonRegistro.addEventListener('click', guardarRegistro);

function guardarRegistro() {
  let datosAlumno = {
    nombre           : document.querySelector('#nombre').value,
    apellido1        : document.querySelector('#apellido1').value,
    apellido2        : document.querySelector('#apellido2').value,
    fecha_nacimiento : document.querySelector('#nacimiento').value,
    provincia        : document.querySelector('#provincia').value,
    canton           : document.querySelector('#canton').value,
    distrito         : document.querySelector('#distrito').value,
    barrio           : document.querySelector('#barrio').value,
    otra_sennas      : document.querySelector('#otros').value,
  }

  arrayAlumno.push(Object.values(datosAlumno));

  localStorage.setItem('datos_alumnos', JSON.stringify(arrayAlumno));
}
