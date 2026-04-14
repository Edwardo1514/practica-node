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
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Las vistas irán en una carpeta llamada 'views'}

app.get('/', (req, res) => {
    const listaDeServicios = [
        { nombre: 'Face Retouching', icono: 'icon-1.png', imagen: 'service-1.jpg' },
        { nombre: 'Mommy Makeover', icono: 'icon-2.png', imagen: 'service-2.jpg' },
        { nombre: 'Breast Implants', icono: 'icon-3.png', imagen: 'service-3.jpg' }
    ];

    res.render('index', { 
        titulo: 'Inicio', 
        servicios: listaDeServicios // Aquí enviamos la lista al HTML
    });
});

app.get('/', (req, res) => {
    const listaServicios = [
        { nombre: 'Face Retouching', icono: 'icon-1.png', imagen: 'service-1.jpg' },
        { nombre: 'Mommy Makeover', icono: 'icon-2.png', imagen: 'service-2.jpg' },
        { nombre: 'Breast Implants', icono: 'icon-3.png', imagen: 'service-3.jpg' },
        { nombre: 'Body Procedures', icono: 'icon-4.png', imagen: 'service-4.jpg' },
        { nombre: 'Liposaction', icono: 'icon-5.png', imagen: 'service-5.jpg' },
        { nombre: 'Lips Surgery', icono: 'icon-6.png', imagen: 'service-6.jpg' }
    ];

    res.render('index', { 
        titulo: 'Inicio - Plasery', 
        servicios: listaServicios 
    });
});