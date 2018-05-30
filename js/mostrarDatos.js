mostrarDatos();

function mostrarDatos() {
  let tbody = document.querySelector('#tbAlumnoData tbody');
  let fila  = document.createElement('tr'),
      celda = document.createElement('td');

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

  console.log(obtenerDatos);
}