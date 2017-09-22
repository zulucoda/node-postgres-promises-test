var express = require('express');
var router = express.Router();

const db = require('../queries');

router.get('/api/alfa-romeos', db.getAllAlfaRomeos);
router.get('/api/alfa-romeos/:id', db.getSingleAlfaRomeo);
router.post('/api/alfa-romeos', db.createAlfaRomeo);
// router.put('/api/alfa-romeos/:id', db.updateAlfaRomeo);
// router.delete('/api/alfa-romeos/:id', db.removeAlfaRomeo);

module.exports = router;
