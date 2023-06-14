let videojuegos = new Map()

function crearCliente() {
    let ventana = document.getElementById("miVentana");
    ventana.style.display = "block"
}

function crearClienteCerrar() {
    let ventana = document.getElementById("miVentana");
    ventana.style.display = "none"
}

function crearVideojuego() {
    let ventana = document.getElementById("miVentanaVideojuego");
    ventana.style.display = "block"
}

function crearVideojuegoCerrar() {
    let ventana = document.getElementById("miVentanaVideojuego");
    ventana.style.display = "none"
}

function crearCliente2(id) {
    let ventana = document.getElementById("miVentana");
    ventana.style.display = "block"
    ventana.addEventListener("submit", function() {
        var fila = document.getElementById(id);
        fila.remove()
    })
}

function agregarID() {
    id = videojuegos.size
    return id + 1
}
function agregarVideojuegos(identificador, nombre, tematica, valor, puntos) {
    videojuegos.set(identificador, {
        "nombre": nombre,
        "tematica": tematica,
        "valor": valor,
        "puntos": puntos,
    })
}

let clientesPagina = document.getElementById("miFormularioCliente");
clientesPagina.addEventListener("submit", function (event) {
    event.preventDefault()
    const documento = document.getElementById("identificacion").value;
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const nacimiento = document.getElementById("nacimiento").value;
    const nacionalidad = document.getElementById("nacionalidad").value;
    const tabla = document.getElementById("tabla-clientes");
    const rows = document.createElement("tr");
    rows.id = documento;
    rows.innerHTML = `
    <th scope="row" class="registro">${documento}</th>
    <td class="registro">${nombres}</td>
    <td class="registro">${apellidos}</td>
    <td class="registro">${telefono}</td>
    <td class="registro">${correo}</td>
    <td class="registro">${nacimiento}</td>
    <td class="registro">${nacionalidad}</td>
    <td><button type="button" class="btn btn-danger" id="borrar" onclick="eliminarFila(${documento})">Eliminar</button>
    <button type="button" class="btn btn-warning" id="borrar" onclick="crearCliente2(${documento})">Modificar</button></td>
    `;
    tabla.appendChild(rows);
    document.getElementById("miFormularioCliente").reset();
})

let videojuegosPagina = document.getElementById("miFormularioVideojuegos");
videojuegosPagina.addEventListener("submit", function (event) {
    event.preventDefault()
    const id = agregarID()
    const nombre = document.getElementById("nombreJuego").value;
    const tematica = document.getElementById("tematica").value;
    const valor = document.getElementById("valor").value;
    const puntos = document.getElementById("puntos").value;
    const tabla = document.getElementById("tabla-videojuegos");
    agregarVideojuegos(id, nombre, tematica, valor, puntos)
    console.log(videojuegos)
    const rows = document.createElement("tr");
    rows.id = id;
    rows.innerHTML = `
    <th scope="row" class="registro">${id}</th>
    <td class="registro">${nombre}</td>
    <td class="registro">${tematica}</td>
    <td class="registro">${valor}</td>
    <td class="registro">${puntos}</td>
    <td><button type="button" class="btn btn-danger" id="borrar" onclick="eliminarFila(${id})">Eliminar</button>
    `;
    tabla.appendChild(rows);
    document.getElementById("miFormularioVideojuegos").reset();
})

function eliminarFila(id){
    var fila = document.getElementById(id);
    fila.remove()
}


