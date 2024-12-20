import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../api';

export default function EditEmployee() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: '', account: '', role: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/employees/${id}`).then((res) => setForm(res.data));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`/employees/${id}`, form).then(() => navigate('/employees'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} required />
      <input name="account" value={form.account} onChange={handleChange} required />
      <input name="role" value={form.role} onChange={handleChange} required />
      <button type="submit">Update Employee</button>
    </form>
  );
}
