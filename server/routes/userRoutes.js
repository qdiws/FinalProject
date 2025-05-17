const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

router.post('/', async (req, res) => {
  const { username, rank, playstyle } = req.body;

  const { data, error } = await supabase
    .from('users')
    .insert([{ username, rank, playstyle }]);

  if (error) {
    console.log('Supabase insert error:', error);  // <-- log the error
    return res.status(500).json({ message: 'Insert failed', error });
  }

  res.json({ message: 'User saved to Supabase', data });
});

module.exports = router;
