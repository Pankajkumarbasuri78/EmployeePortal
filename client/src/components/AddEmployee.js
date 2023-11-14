import React, { useEffect, useState } from "react";
import employeeService from "../services/employeeService";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  const saveEmployee = (e) => {
    e.preventDefault();
    const employee = { name, location, department, id };

    if (id) {
      //update the record
      employeeService
        .update(employee)
        .then((res) => {
          console.log("employee data updated successfully");
          navigate("/");
        })
        .catch((e) => {
          console.log("something went wrong", e);
        });
    } else {
      employeeService
        .create(employee)
        .then((res) => {
          console.log("employee data added successfully", res.data);
          navigate("/");
        })
        .catch((e) => {
          console.log("something went wrong", e);
        });
    }

    employeeService
      .create(employee)
      .then((res) => {
        console.log("employee data added sucessully", res.data);
        navigate("/");
      })
      .catch((e) => {
        console.log("something went wrong", e);
      });
  };

  useEffect(()=> {
    if(id){
      employeeService.get(id)
      .then(employee => {
        setName(employee.data.name);
        setLocation(employee.data.location);
        setDepartment(employee.data.department);
      })
      .catch(e=>{
        console.log('something went wrong',e);
      })
    }
  },[])

  return (
    <div>
      <h1>Add new Employee</h1>
      <hr />
      <form>
        <div>
          <label for="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>
        <div>
          <label for="location">Location: </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Location"
          />
        </div>
        <div>
          <label for="department">Department: </label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Enter Department"
          />
        </div>
        <div>
          <button onClick={(e) => saveEmployee(e)}>Save</button>
        </div>
      </form>
      <hr />
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default AddEmployee;
