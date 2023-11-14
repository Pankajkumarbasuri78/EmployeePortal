import React, { useEffect, useState } from 'react';
import employeeService from '../services/employeeService';
import { Link } from 'react-router-dom';


const EmployeesList=() => {

  const [employees,setEmployees] = useState([]);


  useEffect(()=>{
    init();
  },[])

  const init = () => {
    employeeService.getAll()
    .then(res => {
      console.log('Printing the emplopyees data', res.data);
      setEmployees(res.data);
    })
    .catch(e => {
      console.log('Something went wrong',e);
    })
    console.log("hii");
  }

  const handleDelete = id => {

    employeeService.remove(id)
    .then(res => {
      console.log('employee deleted',res.data);
      init();
    })
    .catch(e => {
      console.log('something went wrong',e);
    })
  }

  return (
    <div className="container">
      <h3>List of Employees</h3>
      <div>
        <Link to="/add">Add Employee</Link>
        <table className='table1' border="1" cellPadding={"10"}>
          <tr>
            <th className='table-head'>Name</th>
            <th className='table-head'>Location</th>
            <th className='table-head'>Department</th>
            <th className='table-head'>Actions</th>
          </tr>

          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.location}</td>
              <td>{employee.department}</td>
              <td>
                <Link to={`/employees/edit/${employee.id}`} style={{paddingRight:'15px'}}>Update</Link>
                <button onClick={(e)=>handleDelete(employee.id)}>delete</button>
              </td>

            </tr>
          ))}
           

        </table>
      </div>
    </div>
  );
}

export default EmployeesList;
