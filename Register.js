import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/register', { username, email, password })
      .then(() => nav('/login'))
      .catch(err => alert(err.response.data.error || 'Error registering'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input required placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" required placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}
