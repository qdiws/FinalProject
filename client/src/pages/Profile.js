import React, { useState } from 'react';

const Profile = () => {
  const [formData, setFormData] = useState({
    username: '',
    rank: '',
    playstyle: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5050/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => setMessage(data.message || 'Submitted successfully!'))
    .catch(err => {
      console.error(err);
      setMessage('Error submitting profile.');
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Profile Setup</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="username" placeholder="Username" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="rank" placeholder="Rank (e.g., Gold, Diamond)" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="playstyle" placeholder="Playstyle (Aggressive, Support...)" onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  );
};

export default Profile;
