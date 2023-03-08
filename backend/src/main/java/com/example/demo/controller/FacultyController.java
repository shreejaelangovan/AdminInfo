package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Faculty;
import com.example.demo.service.FacultyService;

@RestController
@CrossOrigin(origins="http://localhost:3000/")
public class FacultyController {
	@Autowired
	FacultyService service;
	
	@PostMapping("/faculty")
	public String addAdmin(@RequestBody Faculty faculty) {
		return service.addAdmin(faculty);
	}
	
	@GetMapping("/faculty")
	public List<Faculty> read(){
		return service.getAdmin();
	}
	
	@GetMapping("/faculty/{id}")
	public Optional<Faculty> readById(@PathVariable int id){
		return service.getAdminById(id);
	}
	
	@PutMapping("/faculty/{id}")
	public Faculty update(@RequestBody Faculty faculty) {
		return service.udpdateAdmin(faculty);
	}

	@DeleteMapping("/faculty/{id}")
	public String delete(@PathVariable int id) {
		return service.deleteAdmin(id);
	}
	
}
