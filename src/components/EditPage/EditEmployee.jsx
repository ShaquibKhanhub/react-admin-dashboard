import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EditEmployee.css";
import axios from "axios";

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    id: id,
    name: "",
    email: "",
  });
  const handleInputChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("Employee data saved!");
  };
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
    <div className="edit-employee-container">
      <h2>Edit Employee</h2>
      <form className="edit-form">
        <label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="email"
            value={employee.username}
            onChange={handleInputChange}
            placeholder="Enter your username"
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="email"
            value={employee.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </label>
        <br />

        <label>
          <input
            type="text"
            name="email"
            value={employee.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone"
          />
        </label>
        <br />
        <button type="button" onClick={handleSave} className="button-38">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
