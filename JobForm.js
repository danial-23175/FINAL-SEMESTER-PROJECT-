import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function JobForm() {
  const [form, setForm] = useState({ title: '', description: '', skillsRequired: '', budget: '' });
  const nav = useNavigate();

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return alert('Login first');
    axios.post('http://localhost:5000/api/jobs/create', {
      ...form,
      skillsRequired: form.skillsRequired.split(',').map(s => s.trim())
    }, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => nav('/'))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Post a Job</h2>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
      <input name="skillsRequired" placeholder="Skills (comma-separated)" value={form.skillsRequired} onChange={handleChange} required />
      <input name="budget" type="number" placeholder="Budget" value={form.budget} onChange={handleChange} required />
      <button type="submit">Create Job</button>
    </form>
  );
}
