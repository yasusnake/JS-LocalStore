let arrayAlumno = [];

if(localStorage.getItem('datos_alumnos') != null) {
  arrayAlumno = JSON.parse( localStorage.getItem('datos_alumnos') );
}

function guardarRegistro() {
  let datosAlumno = {
    nombre           : document.getElementById('nombre').value,
    apellido1        : document.getElementById('apellido1').value,
    apellido2        : document.getElementById('apellido2').value,
    fecha_nacimiento : document.getElementById('nacimiento').value,
    email            : document.getElementById('email').value,
    telefono         : document.getElementById('telefono').value,
    provincia        : document.getElementById('provincia').value,
    canton           : document.getElementById('canton').value,
    distrito         : document.getElementById('distrito').value,
    barrio           : document.getElementById('barrio').value,
    otra_sennas      : document.getElementById('otros').value,
  }

  arrayAlumno.push(Object.values(datosAlumno));

  localStorage.setItem('datos_alumnos', JSON.stringify(arrayAlumno));
}

function mostrarDatos() {
  let tbody = document.querySelector('#tbAlumnoData tbody'),
      obtenerDatos = JSON.parse( localStorage.getItem('datos_alumnos') );

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
