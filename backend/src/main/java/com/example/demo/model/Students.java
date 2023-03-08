package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Students {
	@Id
	private int id;
	private String name;
	private String departmentName ;
	private String hostel;
	private long phoneNumber;
	private int yearOfPassing;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDepartmentName() {
		return departmentName;
	}
	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	public String getHostel() {
		return hostel;
	}
	public void setHostel(String hostel) {
		this.hostel = hostel;
	}
	public long getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public int getYearOfPassing() {
		return yearOfPassing;
	}
	public void setYearOfPassing(int yearOfPassing) {
		this.yearOfPassing = yearOfPassing;
	}
	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", departmentName=" + departmentName + ", hostel=" + hostel
				+ ", phoneNumber=" + phoneNumber + ", yearOfPassing=" + yearOfPassing + "]";
	}
	
}
