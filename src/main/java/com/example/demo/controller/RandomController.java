package com.example.demo.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.service.RandomService;

@RestController
public class RandomController {
	
	@Autowired
	RandomService randomService;
	
	@RequestMapping("/")
	public ModelAndView index() {
		ModelAndView mav = new ModelAndView("index");
		return mav;
	}
	
	@RequestMapping("/addPerson")
	public void addPerson(@RequestParam Map<String, Object> param) {
		randomService.addPerson(param);
	}
	
	@RequestMapping("/delPerson")
	public void delPerson(@RequestParam Map<String, Object> param) {
		randomService.delPerson(param);
	}
	
	@RequestMapping("/updatePerson")
	public void updatePerson(@RequestParam Map<String, Object> param) {
		System.out.println(param);
		randomService.updatePerson(param);
	}
	
}
