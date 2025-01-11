const express = require('express');
const app = express();
const port = 3000;

// Middleware para procesar JSON
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi API básica!');
});

// Ruta para obtener una lista de elementos (GET)
app.get('/items', (req, res) => {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];
    res.json(items);
});

// Ruta para crear un nuevo elemento (POST)
app.post('/items', (req, res) => {
    const newItem = req.body;
    newItem.id = Date.now(); // Generar un ID simple
    res.status(201).json(newItem);
});

// Ruta para obtener un elemento por ID (GET)
app.get('/items/:id', (req, res) => {
    const { id } = req.params;
    const item = { id, name: `Item ${id}` }; // Simula buscar un elemento
    res.json(item);
});

// Ruta para actualizar un elemento por ID (PUT)
app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const updatedItem = { ...req.body, id };
    res.json(updatedItem);
});

// Ruta para eliminar un elemento por ID (DELETE)
app.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Elemento con ID ${id} eliminado.` });
});

// Servidor en escucha
app.listen(port, () => {
    console.log(`API básica corriendo en http://localhost:${port}`);
});
