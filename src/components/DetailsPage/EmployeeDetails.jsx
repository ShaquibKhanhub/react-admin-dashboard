import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./EmployeeDetails.css";
const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setEmployee(response.data))
      .catch((error) =>
        console.error("Error fetching employee details:", error)
      );
  }, [id]);

  if (!employee) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  return (
    <div className="employee-card">
      <h2>Employee Details</h2>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Username: {employee.username}</p>
      <p>Email: jane.doe@company.com</p>
      <p>Phone: {employee.phone}</p>
    </div>
  );
};

export default EmployeeDetail;
