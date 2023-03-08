package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Students;
import com.example.demo.service.StudentsService;

@RestController
public class StudentsController {
	@Autowired
	StudentsService service;
	
	@PostMapping("/student")
	public String addStudent(@RequestBody Students student) {
		return service.addStudent(student);
	}
	
	@GetMapping("/student")
	public List<Students> read(){
		return service.getStudent();
	}
	
	@GetMapping("/student/{id}")
	public Optional<Students> readById(@PathVariable int id){
		return service.getStudentById(id);
	}
	
//	@GetMapping("/student/{field}")
//	public List<Student> studentWithSort(@PathVariable String field){
//		return service.getStudentSorted(field);
//	}
	
	@GetMapping("/student/{offset}/{pagesize}")
	public List<Students> studentWithPagination(@PathVariable int offset,@PathVariable int pagesize){
		return service.getStudentWithPagination(offset,pagesize);
	}
	
	@GetMapping("/student/{offset}/{pagesize}/{field}")
	public List<Students> studentWithPaginationField(@PathVariable int offset,@PathVariable int pagesize,@PathVariable String field){
		return service.getStudentWithPaginationField(offset,pagesize,field);
	}
	
	@PutMapping("/student/{id}")
	public Students update(@RequestBody Students student) {
		return service.udpdateStudent(student);
	}
	
	@DeleteMapping("/student")
	public String delete(@RequestParam int id) {
		return service.deleteStudent(id);
	}
}
