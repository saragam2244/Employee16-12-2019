package com.employee.service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.List;

import org.springframework.stereotype.Service;

import com.employee.model.Employee;
import com.employee.repository.EmployeeRepository;

@Service
public class EmployeeService implements EmployeeRepository{
	
	@Override
	public boolean insertEmployee(Employee emp) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean deleteEmployee(Employee emp) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean updateEmployee(Employee emp) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Employee showEmployee(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Employee> insertAllEmployee() {
		// TODO Auto-generated method stub
		return null;
	}

}
