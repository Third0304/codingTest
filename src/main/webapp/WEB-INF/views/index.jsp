<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/css/index.css">
<link rel="stylesheet" type="text/css" href="/css/add.css">
<script type="text/javascript" src="/script/add.js"></script>
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<title>Coding Test</title>
</head>
<body>
	<div id="btnBox">
		<div id="topBtn">
			<button class="top-btn btn-2"><span>Randomly into lunch groups</span></button>
		</div>
		<div id="bottomBtn">
			<button id="openAdd" class="bottom-btn btn-2"><span>Add a person</span></button>
			<button class="bottom-btn btn-2"><span>Delete a person</span></button>
			<button class="bottom-btn btn-2"><span>Update a person</span></button>
			<button class="bottom-btn btn-2"><span>Get all people</span></button>
		</div>
		
		<div id="add" class="addBack">
		    <div class="add-content">
		        <span class="close">&times;</span>
		        <h2>Add a person</h2>
		        <input id="name" type="text" placeholder="Enter name">
		        <button class="add-btn btn-2" onclick="javascript:addPerson()"><span>Add</span></button>
		    </div>
		</div>
	</div>
</body>
</html>