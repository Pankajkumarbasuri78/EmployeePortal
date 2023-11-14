package com.empolyeeportal.EmployeePortal.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.empolyeeportal.EmployeePortal.Entity.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee,Long>{
    
}
