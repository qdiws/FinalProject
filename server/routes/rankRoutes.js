const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

router.get('/distribution', async (req, res) => {
  const { data, error } = await supabase
    .from('users')
    .select('rank');

  if (error) {
    console.error('Rank fetch error:', error);
    return res.status(500).json({ error: 'Failed to fetch ranks' });
  }

  // Count occurrences
  const counts = {};
  data.forEach(user => {
    const rank = user.rank || 'Unknown';
    counts[rank] = (counts[rank] || 0) + 1;
  });

  res.json(counts);
});

module.exports = router;
