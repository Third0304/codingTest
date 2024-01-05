package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	public void addPerson(@RequestParam Map<String, Object> param, Model model) {
		try {
			randomService.addPerson(param);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@RequestMapping("/delPerson")
	public void delPerson(@RequestParam Map<String, Object> param) {
		try {
			randomService.delPerson(param);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@RequestMapping("/updatePerson")
	public void updatePerson(@RequestParam Map<String, Object> param) {
		try {
			randomService.updatePerson(param);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@RequestMapping("/getList")
	public List<Map<String, Object>> getList() {
		try {
			List<Map<String, Object>> userList = randomService.getList();
			return userList;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping("/randomStart")
	public List<Map<String, Object>> randomStart() {
		try {
			List<Map<String, Object>> rsndomList = randomService.randomStart();
			return rsndomList;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping("nameCheck")
	public int nameCheck(@RequestParam Map<String, Object> param) {
		try {
			int cnt = randomService.nameCheck(param);
			return cnt;
		} catch (Exception e) {
			e.printStackTrace();
			return 0; 
		}
	}
	
	@RequestMapping("idCheck")
	public int idCheck(@RequestParam Map<String, Object> param) {
		try {
			int cnt = randomService.idCheck(param);
			return cnt;
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}
	
}
