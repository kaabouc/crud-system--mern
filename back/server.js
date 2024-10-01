require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

// Initialiser l'application Express
const app = express();

// Connexion à la base de données MongoDB
connectDB();

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
