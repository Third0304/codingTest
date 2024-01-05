package com.example.demo.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.RandomDAO;

@Service
public class RandomServiceImpl implements RandomService {
	
	@Autowired
	RandomDAO randomDao;

	@Override
	public void addPerson(Map<String, Object> param) {
		try {
			randomDao.addPerson(param);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void delPerson(Map<String, Object> param) {
		try {
			randomDao.delPerson(param);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void updatePerson(Map<String, Object> param) {
		try {
			randomDao.updatePerson(param);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public List<Map<String, Object>> getList() {
		try {
			return randomDao.getList();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<Map<String, Object>> randomStart() {
		try {
			return randomDao.randomStart();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public int nameCheck(Map<String, Object> param) {
		try {
			return randomDao.nameCheck(param);
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}

	@Override
	public int idCheck(Map<String, Object> param) {
		try {
			return randomDao.idCheck(param);
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}

}
