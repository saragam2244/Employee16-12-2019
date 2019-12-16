package com.employee.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.employee.model.Employee;

@Repository
public interface EmployeeRepository {
	public boolean insertEmployee(Employee emp);
	public boolean deleteEmployee(Employee emp);
	public boolean updateEmployee(Employee emp);
	public Employee showEmployee(int id);
	public List<Employee> insertAllEmployee();
	
}
