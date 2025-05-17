import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Matchmaking = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5050/api/matchmaking/USER_ID')
      .then((res) => res.json())
      .then((data) => {
        setMatches(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Suggested Teammates</h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {matches.map((user, i) => (
            <motion.li
              key={i}
              className="bg-white shadow-md rounded-lg p-4 border"
              whileHover={{ scale: 1.02 }}
            >
              <p className="font-semibold text-lg mb-1">{user.username}</p>
              <p className="text-sm text-gray-600">Rank: {user.rank}</p>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default Matchmaking;
