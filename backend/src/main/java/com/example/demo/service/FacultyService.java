package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Faculty;
import com.example.demo.repository.FacultyRepository;

@Service
public class FacultyService {

	@Autowired
	FacultyRepository repository;
	
	public String addAdmin(Faculty faculty) {
		repository.save(faculty);
		return "Record added";
	}

	public List<Faculty> getAdmin() {
		return repository.findAll();
	}

	public Optional<Faculty> getAdminById(int id) {
		return repository.findById(id);
	}

	public Faculty udpdateAdmin(Faculty faculty) {
		repository.save(faculty);
		return faculty;
	}
	
	public String deleteAdmin(int id) {
		repository.deleteById(id);
		return "Deleted a record";
	}

}
