import axios from "axios";
import { useState, useEffect } from "react";
import "./users.css";
import { Link } from "react-router-dom";
const Users = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [modal, setModal] = useState(false);

  const Toggle = () => setModal(!modal);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then((response) => {
        setEmployees(response.data);
      })

      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Filtering employees based on the searchInput
    setFilteredEmployees(
      searchInput
        ? employees.filter(
            (employee) => employee.id.toString() === searchInput.trim()
          )
        : employees
    );
  }, [employees, searchInput]);

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };
  if (!employees.length) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="box">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by ID"
            className="inp"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        <div className="center-container">
          <div className="card-container">
            {filteredEmployees.map((employee) => (
              <div className="card" key={employee.id}>
                <Link to={`/employee/${employee.id}`} className="employee-link">
                  <div className="card-content">
                    <p>ID: {employee.id}</p>
                    <p>Name: {employee.name}</p>
                    <p>Username: {employee.username}</p>
                    <p>Email: {employee.email}</p>
                    <p>Phone: {employee.phone}</p>
                  </div>
                </Link>
                <div className="button-container">
                  <Link
                    to={`/edit/${employee.id}`}
                    className="custom-button btn-success"
                    onClick={() => Toggle()}
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="custom-button btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
