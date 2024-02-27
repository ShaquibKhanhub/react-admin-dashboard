import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import EmployeeDetail from "./components/DetailsPage/EmployeeDetails";
import Navbar from "./components/Navbar/Navbar";
import Users from "./components/UsersPage/Users";
import EditEmployee from "./components/EditPage/EditEmployee";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (id) => {
    setSearchId(id);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Users
              employees={employees}
              searchId={searchId}
              setSearchId={setSearchId}
              handleSearch={handleSearch}
            />
          }
        />
        <Route
          path="/employee/:id"
          element={<EmployeeDetail employees={employees} />}
        />
        <Route path="/edit/:id" element={<EditEmployee />} />
      </Routes>
    </Router>
  );
};

export default App;
