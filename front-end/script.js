// Obtener productos y mostrarlos en la lista
function obtenerProductos() {
    fetch('http://localhost:3000/productos')
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('lista-productos');
            lista.innerHTML = ''; // Limpiar la lista antes de actualizar
            data.forEach(producto => {
                const item = document.createElement('li');
                item.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
                lista.appendChild(item);
            });
        });
}

// Agregar producto
function agregarProducto() {
    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);

    if (nombre && precio) {
        fetch('http://localhost:3000/productos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre, precio })
        })
        .then(response => response.json())
        .then(() => obtenerProductos());
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

// Cargar productos al iniciar
obtenerProductos();
