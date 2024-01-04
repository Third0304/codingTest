package com.example.demo.dao;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RandomDAO {

	void addPerson(Map<String, Object> param);

}
