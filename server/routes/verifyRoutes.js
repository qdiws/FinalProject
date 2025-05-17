const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
  res.json({ valid: true });
});

module.exports = router;
