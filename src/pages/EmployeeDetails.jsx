import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api';

export default function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios.get(`/employees/${id}`).then((res) => setEmployee(res.data));
  }, [id]);

  if (!employee) return <p>Loading...</p>;

  return (
    <div>
      <h1>{employee.name}</h1>
      <p>Account: {employee.account}</p>
      <p>Role: {employee.role}</p>
    </div>
  );
}
