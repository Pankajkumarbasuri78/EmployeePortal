package com.empolyeeportal.EmployeePortal.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.empolyeeportal.EmployeePortal.Entity.Employee;
import com.empolyeeportal.EmployeePortal.Repo.EmployeeRepo;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class EmployeeController {

    @Autowired
    private EmployeeRepo eRepo;

    @GetMapping("/getEmployees")
    public List<Employee> getAllEmployees()
    {
        return eRepo.findAll();
    }

    //add employee
    @PostMapping("/addEmployee")
    public Employee saveEmployeeDetails(@RequestBody Employee employee)
    {
        return eRepo.save(employee);
    }
    //retrieve the employee details by id
    @GetMapping("/getEmployee/{id}")
    public Employee getEmployeeById(@PathVariable Long id)
    {
        return eRepo.findById(id).get();
        //findById returns an optional
    }

    //REST end point to update the employees details
    @PutMapping("/putEmployee")
    public Employee updateEmployee(@RequestBody Employee employee)
    {
        return eRepo.save(employee);
    }

    //delete the employee

    @DeleteMapping("/deleteEmployee/{id}")
    public ResponseEntity<HttpStatus> deletEmployeeById(@PathVariable Long id)
    {
        eRepo.deleteById(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    }
}
