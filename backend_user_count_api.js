// ============================================
// À AJOUTER DANS VOTRE BACKEND
// routes/userRoutes.js (ou créer un nouveau fichier statsRoutes.js)
// ============================================

const express = require('express');
const router = express.Router();
const pool = require('../config/database'); // Votre connexion PostgreSQL

// GET /api/users/count - Compter le nombre d'utilisateurs inscrits
router.get('/count', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) as count FROM users');
        const count = parseInt(result.rows[0].count);
        
        res.json({
            success: true,
            count: count
        });
    } catch (error) {
        console.error('Erreur comptage utilisateurs:', error);
        res.status(500).json({
            success: false,
            count: 0
        });
    }
});

module.exports = router;

// ============================================
// DANS app.js, AJOUTEZ :
// ============================================
// const statsRoutes = require('./routes/statsRoutes');
// app.use('/api/users', statsRoutes);
