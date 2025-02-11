var express = require('express');
const fs = require("fs").promises;
var router = express.Router();

/* GET home page. */
router.get('/get_data', async function(req, res, next) {
    const data = await fs.readFile('./data/10.10.23 Agenda1.json', 'utf-8');
    res.status(200).json(JSON.parse(data));
});

module.exports = router;
