<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/css/index.css">
<link rel="stylesheet" type="text/css" href="/css/contents.css">
<script type="text/javascript" src="/script/index.js"></script>
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<title>Coding Test</title>
</head>
<body>
	<div id="btnBox">
		<div id="topBtn">
			<button class="top-btn btn-2"><span>Randomly into lunch groups</span></button>
		</div>
		<div id="bottomBtn">
			<button onclick="javascript:btnClick('add')" class="bottom-btn btn-2"><span>Add a person</span></button>
			<button onclick="javascript:btnClick('del')" class="bottom-btn btn-2"><span>Delete a person</span></button>
			<button onclick="javascript:btnClick('update')"class="bottom-btn btn-2"><span>Update a person</span></button>
			<button class="bottom-btn btn-2"><span>Get all people</span></button>
		</div>
		
		<div id="add" class="modalBack">
		    <div class="content-box">
		        <span class="add close">&times;</span>
		        <h2>Add a person</h2>
		        <input id="addName" type="text" placeholder="Enter name">
		        <button class="modal-btn btn-2" onclick="javascript:addPerson()"><span>Add</span></button>
		    </div>
		</div>
		
		<div id="del" class="modalBack">
		    <div class="content-box">
		        <span class="del close">&times;</span>
		        <h2>Delete a person</h2>
		        <input id="delId" type="text" placeholder="Enter id">
		        <button class="modal-btn btn-2" onclick="javascript:delPerson()"><span>Delete</span></button>
		    </div>
		</div>
		
		<div id=update class="modalBack">
		    <div class="content-box">
		        <span class="update close">&times;</span>
		        <h2>Update a person</h2>
		        <input id="upId" type="text" placeholder="Enter id">
		        <input id="upName" type="text" placeholder="Enter name">
		        <button class="modal-btn btn-2" onclick="javascript:updatePerson()"><span>Update</span></button>
		    </div>
		</div>
	</div>
</body>
</html>