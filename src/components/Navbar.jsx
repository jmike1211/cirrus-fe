import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/employees">Employees</Link> | <Link to="/employees/add">Add Employee</Link>
    </nav>
  );
}
