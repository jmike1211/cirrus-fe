import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api';

export default function AddEmployee() {
  const [form, setForm] = useState({ name: '', account: '', role: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/employees', form).then(() => navigate('/employees'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="account" placeholder="Account" onChange={handleChange} required />
      <input name="role" placeholder="Role" onChange={handleChange} required />
      <button type="submit">Add Employee</button>
    </form>
  );
}
