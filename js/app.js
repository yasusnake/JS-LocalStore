let arrayAlumno = [];

if(localStorage.getItem('datos_alumnos') != null) {
  arrayAlumno = JSON.parse( localStorage.getItem('datos_alumnos') );
  mostrarDatos();
}

function guardarRegistro() {
  let datosAlumno = {
    nombre           : document.querySelector('#nombre').value,
    apellido1        : document.querySelector('#apellido1').value,
    apellido2        : document.querySelector('#apellido2').value,
    fecha_nacimiento : document.querySelector('#nacimiento').value,
    email            : document.querySelector('#email').value,
    telefono         : document.querySelector('#telefono').value,
    provincia        : document.querySelector('#provincia').value,
    canton           : document.querySelector('#canton').value,
    distrito         : document.querySelector('#distrito').value,
    barrio           : document.querySelector('#barrio').value,
    otra_sennas      : document.querySelector('#otros').value,
  }

  arrayAlumno.push(Object.values(datosAlumno));

  localStorage.setItem('datos_alumnos', JSON.stringify(arrayAlumno));

  swal({
    title: "Registro Guardado!",
    text: "La información rellenada en el formulario fue guardada exitosamente",
    icon: "success",
    button: "Ok",
  });
}

function mostrarDatos() {
  let tbody = document.querySelector('#tbAlumnoData tbody');

  tbody.innerHTML = '';

  let obtenerDatos = JSON.parse( localStorage.getItem('datos_alumnos') );

  for(let i in obtenerDatos) {
    let array = obtenerDatos[i];
    let fila  = document.createElement('tr');
    for(let j in array) {
      let celda = document.createElement('td'),
          texto = document.createTextNode(array[j]);
      
          celda.appendChild(texto);
          fila.appendChild(celda);
          tbody.appendChild(fila);
    }
  }
}