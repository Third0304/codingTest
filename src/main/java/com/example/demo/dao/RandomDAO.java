package com.example.demo.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RandomDAO {

	void addPerson(Map<String, Object> param);

	void delPerson(Map<String, Object> param);

	void updatePerson(Map<String, Object> param);

	List<Map<String, Object>> getList();

	List<Map<String, Object>> randomStart();

}
