/**
 * Importar y operar con .csv
 **/
function crearTabla(data) {
    const todasFilas = data.split(/\r?\n|\r/);
    let tabla = '<table>';
    for (let fila = 0; fila < todasFilas.length; fila++) {
        if (fila === 0) {
            tabla += '<thead>';
            tabla += '<tr>';
        } else {
            tabla += '<tr>';
        }
        const celdasFila = todasFilas[fila].split(',');
        for (let rowCell = 0; rowCell < celdasFila.length; rowCell++) {
            if (fila === 0) {
                tabla += '<th>';
                tabla += celdasFila[rowCell];
                tabla += '</th>';
            } else {
                tabla += '<td>';
                if (rowCell === 9) {
                    tabla += '<th>';
                    tabla += celdasFila[rowCell];
                    tabla += '</th>';
                } else {
                    tabla += celdasFila[rowCell];
                }
                tabla += '</td>';
            }
        }
        if (fila === 0) {
            tabla += '</tr>';
            tabla += '</thead>';
            tabla += '<tbody>';
        } else {
            tabla += '</tr>';
        }
    }
    tabla += '</tbody>';
    tabla += '</table>';
    document.querySelector('#tablares').innerHTML = tabla;
}

function leerArchivo2(evt) {
    let file = evt.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        // Cuando el archivo se terminó de cargar
        crearTabla(e.target.result)
    };
    // Leemos el contenido del archivo seleccionado
    reader.readAsText(file);
}
document.querySelector('#archivo2')
    .addEventListener('change', leerArchivo2, false);


/**
 * Leer y mostrar contenido inmediatamente
 **/
function mostrarContenido(contenido) {
    const elemento = document.getElementById('contenido-archivo');
    elemento.innerHTML = contenido;
}

function leerArchivo(e) {
    const archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    const lector = new FileReader();
    lector.onload = function(e) {
        const contenido = e.target.result;
        mostrarContenido(contenido);
    };
    lector.readAsText(archivo);
}

document.querySelector('#archivo1')
    .addEventListener('change', leerArchivo, false);