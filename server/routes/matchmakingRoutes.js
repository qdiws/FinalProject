const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

router.get('/:userId', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*');

  if (error) {
    return res.status(500).json({ message: 'Error fetching users', error });
  }

  res.json(data);
});

module.exports = router;
