const router = require('express').Router();
const userRoutes = require('./userRoutes');
// Using users route
router.use('/users', userRoutes);

module.exports = router;