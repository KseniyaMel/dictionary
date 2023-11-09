const express = require('express');
const router = express.Router();
const data = require('./glossary.data.json');

router.get('/', (req, res) => {
  res.send(data);
})

module.exports = router;