package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.model.DailyUpdates;
import com.repository.DetailsRepository;
@RestController
@CrossOrigin(origins ="*")
public class Controller {
	@Autowired
	DetailsRepository details;
	
	@PostMapping(path="/addRecord")
	public DailyUpdates addUser(@RequestBody DailyUpdates user) {
		details.save(user);
		return user;
	}
	

	@GetMapping(path="/getRecord")
	@ResponseBody
	public List<DailyUpdates> getUsers() {
		
		return details.findAll();	
	
	}
	

	

	@RequestMapping(value="/delete",method=RequestMethod.GET)
	public int deleteRecord(@RequestParam(value="id")int id){
		details.deleteById(id);

		return id;
	}

	

	@PutMapping(path="/updateRecord")
	public DailyUpdates saveOrUpdateAlien1(@RequestBody DailyUpdates user) {
		details.save(user);
		return user;
	}
}
