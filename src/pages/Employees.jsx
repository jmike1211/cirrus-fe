import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api';

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('/employees').then((res) => setEmployees(res.data));
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employees/${employee.id}`}>{employee.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
