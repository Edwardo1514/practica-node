const express = require('express');
const path = require('path');
const app = express();

// Puerto dinámico para Render o 3000 para local
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (CSS, JS, Imágenes)
app.use(express.static(path.resolve(__dirname, 'public')));

// Ruta principal: Entrega el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});