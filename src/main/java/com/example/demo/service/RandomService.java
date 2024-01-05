package com.example.demo.service;

import java.util.List;
import java.util.Map;

public interface RandomService {

	void addPerson(Map<String, Object> param);

	void delPerson(Map<String, Object> param);

	void updatePerson(Map<String, Object> param);

	List<Map<String, Object>> getList();

	List<Map<String, Object>> randomStart();

	int nameCheck(Map<String, Object> param);

	int idCheck(Map<String, Object> param);

}
