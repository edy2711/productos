const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let productos = [
    { id: 1, nombre: "Laptop", precio: 1200.99 },
    { id: 2, nombre: "Mouse", precio: 25.50 }
];

// Obtener todos los productos
app.get('/productos', (req, res) => {
    res.json(productos);
});

// Agregar un nuevo producto
app.post('/productos', (req, res) => {
    const { nombre, precio } = req.body;
    const nuevoProducto = { id: productos.length + 1, nombre, precio };
    productos.push(nuevoProducto);
    res.json({ message: "Producto agregado", producto: nuevoProducto });
});

// Actualizar un producto
app.put('/productos/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, precio } = req.body;
    productos = productos.map(p => p.id == id ? { id: p.id, nombre, precio } : p);
    res.json({ message: "Producto actualizado" });
});

// Eliminar un producto
app.delete('/productos/:id', (req, res) => {
    const { id } = req.params;
    productos = productos.filter(p => p.id != id);
    res.json({ message: "Producto eliminado" });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

