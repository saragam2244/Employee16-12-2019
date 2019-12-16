package com.employee.controller;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RestController {
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@RequestMapping("/")
	public String homePage() {
		return "index";
	}
	@RequestMapping("/loadCountry")
	public @ResponseBody ResponseEntity<Object> setCountry() {
		return new ResponseEntity<>(jdbcTemplate.query("SELECT count(id),country FROM employee.address group by country;",  new ResultSetExtractor<JSONArray>(){
	         
	         public JSONArray extractData(
	            ResultSet rs) throws SQLException, DataAccessException {
	        	JSONArray list=new JSONArray();
	            while(rs.next()){  
	               JSONObject obj=new JSONObject();
	               obj.put("name",rs.getString(2));
	               list.put(obj);
	            }  
	            return list;  
	         }    	  
	      }).toString(),HttpStatus.OK);
	}
	@RequestMapping("/loadState")
	public @ResponseBody ResponseEntity<Object> setState(@RequestParam("data")String country) {
		return new ResponseEntity<>(jdbcTemplate.query("SELECT state FROM employee.address where country='"+country+"';",  new ResultSetExtractor<JSONArray>(){
	         
	         public JSONArray extractData(
	            ResultSet rs) throws SQLException, DataAccessException {
	        	JSONArray list=new JSONArray();
	            while(rs.next()){  
	               JSONObject obj=new JSONObject();
	               obj.put("name",rs.getString(1));
	               list.put(obj);
	            }  
	            return list;  
	         }    	  
	      }).toString(),HttpStatus.OK);
	}
	@RequestMapping("/loadData")
	public @ResponseBody ResponseEntity<Object> loadData() {
		return new ResponseEntity<>(jdbcTemplate.query("select * from employee.employee as m INNER JOIN employee.employee_info mi on m.id=mi.id where m.active=1",new ResultSetExtractor<JSONArray>() {
			
			@Override
			public JSONArray extractData(ResultSet rs) throws SQLException, DataAccessException {
				JSONArray obj=new JSONArray();
				while(rs.next()) {
					JSONObject j=new JSONObject();
					j.put("1", rs.getString(2));
					j.put("2", rs.getString(3));
					j.put("3", rs.getString(4));
					j.put("4", rs.getString(5));
					j.put("5", rs.getString(6));
					j.put("6", rs.getString(7));
					j.put("7", rs.getString(8));
					j.put("8", rs.getString(9));
					j.put("9", rs.getString(12));
					j.put("10", rs.getString(13));
					j.put("11", rs.getString(14));
					j.put("12", rs.getString(15));
					j.put("13", rs.getString(16));
					j.put("14", rs.getString(17));
					j.put("15", rs.getString(18));
					j.put("16", rs.getString(19));
					j.put("17", rs.getString(1));
					obj.put(j);
				}
				return obj;
			}}).toString(),HttpStatus.OK);
	}
	@RequestMapping("/employeeLoad")
	public @ResponseBody ResponseEntity<Object> fiendEmployee(@RequestParam("id")String id) {
		return new ResponseEntity<>(jdbcTemplate.query("select * from employee.employee as m INNER JOIN employee.employee_info mi on m.id=mi.id where m.active=1 and m.id="+id,new ResultSetExtractor<JSONObject>() {
			@Override
			public JSONObject extractData(ResultSet rs) throws SQLException, DataAccessException {
				JSONObject j=new JSONObject();
				while(rs.next()) {
					j.put("1", rs.getString(1));
					j.put("2", rs.getString(2));
					j.put("3", rs.getString(3));
					j.put("4", rs.getString(4));
					j.put("5", rs.getString(5));
					j.put("6", rs.getString(6));
					j.put("7", rs.getString(7));
					j.put("8", rs.getString(8));
					j.put("9", rs.getString(9));
					j.put("10", rs.getString(12));
					j.put("11", rs.getString(13));
					j.put("12", rs.getString(14));
					j.put("13", rs.getString(15));
					j.put("14", rs.getString(16));
					j.put("15", rs.getString(17));
				}
				return j;
			}}).toString(),HttpStatus.OK);
	}
	@RequestMapping("/employeeRegistration")
	public @ResponseBody ResponseEntity<Object> employeeRegistration(@RequestParam("data") String emp) {
		try {
			JSONObject obj=new JSONObject(emp);
			jdbcTemplate.execute("insert into employee.employee (fname,mname,lname,birthdate,email,contact,gender,password,active) values('"+obj.getString("fname")+"','"+obj.getString("mname")+"','"+obj.getString("lname")+"','"+obj.getString("birthDate")+"','"+obj.getString("email")+"','"+obj.getString("contact")+"','"+obj.getString("gender")+"','"+obj.getString("password")+"',1)");
			jdbcTemplate.execute("insert into employee.employee_info (address,country,state,city,pincode,hobbies,insertdate) values('"+obj.getString("address")+"','"+obj.getString("country")+"','"+obj.getString("state")+"','"+obj.getString("city")+"','"+obj.getString("pincode")+"','"+obj.get("hobbies")+"','"+ LocalDateTime.now()+"')");
			return new ResponseEntity<>("insert employee successfully",HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>("insert employee fail",HttpStatus.CONFLICT);
	}
	@RequestMapping("/updateEmployee")
	public @ResponseBody ResponseEntity<Object> updateEmployee(@RequestParam("data") String emp) {
		try {
			JSONObject obj=new JSONObject(emp);
			jdbcTemplate.update("update employee.employee set fname='"+obj.getString("fname")+"',mname='"+obj.getString("mname")+"',lname='"+obj.getString("lname")+"',birthdate='"+obj.getString("birthDate")+"',email='"+obj.getString("email")+"',contact='"+obj.getString("contact")+"',gender='"+obj.getString("gender")+"',password='"+obj.getString("password")+"' where id="+obj.getString("id")+" and active=1");
			jdbcTemplate.update("update employee.employee_info set address='"+obj.getString("address")+"',country='"+obj.getString("country")+"',state='"+obj.getString("state")+"',city='"+obj.getString("city")+"',pincode='"+obj.getString("pincode")+"',hobbies='"+obj.get("hobbies")+"',updatedate='"+ LocalDateTime.now()+"' where id="+obj.getString("id")+"");
			return new ResponseEntity<>("update employee successfully",HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>("update employee fial",HttpStatus.CONFLICT);
	}
	@RequestMapping("/deleteEmployee")
	public @ResponseBody ResponseEntity<Object> deleteEmployee(@RequestParam("data") String emp) {
		try {
			jdbcTemplate.update("update employee.employee set active=0 where id="+emp);
			return new ResponseEntity<>("delete employee successfully",HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>("delete employee fail",HttpStatus.CONFLICT);
	}
	
}
