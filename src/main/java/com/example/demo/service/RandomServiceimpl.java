package com.example.demo.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.RandomDAO;

@Service
public class RandomServiceimpl implements RandomService {
	
	@Autowired
	RandomDAO randomDao;

	@Override
	public void addPerson(Map<String, Object> param) {
		randomDao.addPerson(param);
	}

	@Override
	public void delPerson(Map<String, Object> param) {
		randomDao.delPerson(param);
	}

	@Override
	public void updatePerson(Map<String, Object> param) {
		randomDao.updatePerson(param);
	}

}
