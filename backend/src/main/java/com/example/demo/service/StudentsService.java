package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.model.Students;
import com.example.demo.repository.StudentsRepository;

@Service
public class StudentsService {

	@Autowired
	StudentsRepository repository;
	
	public String addStudent(Students student) {
		repository.save(student);
		return "Record added";
	}

	public List<Students> getStudent() {
		return repository.findAll();
	}

	public Optional<Students> getStudentById(int id) {
		return repository.findById(id);
	}

//	public List<Student> getStudentSorted(String field) {
//		return repository.findAll(Sort.by(Sort.Direction.ASC,field));
//	}
	
	public List<Students> getStudentWithPagination(int offset, int pagesize) {
		Page<Students>page=repository.findAll(PageRequest.of(offset,pagesize));
		return page.getContent();
	}

	public List<Students> getStudentWithPaginationField(int offset, int pagesize, String field) {
		Page<Students>page=repository.findAll(PageRequest.of(offset, pagesize,Sort.by(field)));
		return page.getContent();
	}

	public Students udpdateStudent(Students student) {
		repository.save(student);
		return student;
	}
	
	public String deleteStudent(int id) {
		repository.deleteById(id);
		return "Deleted a record";
	}

}
