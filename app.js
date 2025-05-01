console.log('Iniciando servidor...');

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Importar rutas
const authRoutes = require('./routes/auth'); 
const projectRoutes = require('./routes/projects');
const publicationRoutes = require('./routes/publications');
const researcherRoutes = require('./routes/researchers');

// Usar rutas
app.use('/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/publications', publicationRoutes);
app.use('/api/researchers', researcherRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('✅ Conectado a MongoDB Atlas'))
    .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// Iniciar servidor — esto SIEMPRE al final
app.listen(3000, () => {
    console.log('Servidor en puerto 3000');
});
