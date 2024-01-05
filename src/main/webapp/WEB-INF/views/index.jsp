<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/css/index.css">
<link rel="stylesheet" type="text/css" href="/css/contents.css">
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="/script/index.js"></script>
<script type="text/javascript" src="/script/duplicate.js"></script>
<title>Coding Test</title>
</head>
<body>
	<div id="btnBox">
		<div id="topBtn">
			<button onclick="javascript:btnClick('random')" class="top-btn btn-2"><span>Randomly into lunch groups</span></button>
		</div>
		<div id="bottomBtn">
			<button onclick="javascript:btnClick('add')" class="bottom-btn btn-2"><span>Add a person</span></button>
			<button onclick="javascript:btnClick('del')" class="bottom-btn btn-2"><span>Delete a person</span></button>
			<button onclick="javascript:btnClick('update')" class="bottom-btn btn-2"><span>Update a person</span></button>
			<button onclick="javascript:btnClick('all')" class="bottom-btn btn-2"><span>Get all people</span></button>
		</div>
		
		<div id="random" class="modalBack">
		    <div class="content-box">
		        <span class="random close">&times;</span>
		        <h2>Randomly into lunch groups</h2>
		        <input id="groupSize" type="number" min="1" placeholder="Number of groups">
		        <input id="peoplePerGroup" type="number" min="1" placeholder="Minimum size of people in a group">
		        <button class="modal-btn btn-2" onclick="javascript:randomStart()"><span>Start</span></button>
		        <div id="random-area">
		        	<table>
		        		<tfoot id="random-table"></tfoot>
		        	</table>
		        </div>
		    </div>
		</div>
		
		<div id="add" class="modalBack">
		    <div class="content-box">
		        <span class="add close">&times;</span>
		        <h2>Add a person</h2>
		        <input id="addName" class="name-chk" type="text" placeholder="Enter name" onkeypress="checkEnter(event, 'addBtn')">
		        <font id="warning" size="2" color="red"></font><br>
		        <button id="addBtn" class="modal-btn btn-2" onclick="javascript:addPerson()"><span>Add</span></button>
		    </div>
		</div>
		
		<div id="del" class="modalBack">
		    <div class="content-box">
		        <span class="del close">&times;</span>
		        <h2>Delete a person</h2>
		        <input id="delId" class="id-chk" type="text" placeholder="Enter id" onkeypress="checkEnter(event, 'delBtn')">
		        <font id="warning-id" size="2" color="red"></font><br>
		        <button id="delBtn" class="modal-btn btn-2" onclick="javascript:delPerson()"><span>Delete</span></button>
		    </div>
		</div>
		
		<div id="update" class="modalBack">
		    <div class="content-box">
		        <span class="update close">&times;</span>
		        <h2>Update a person</h2>
		        <input id="upId" class="id-chk-up" type="text" placeholder="Enter id" onkeypress="checkEnter(event, 'upBtn')">
		        <font id="warning-id" size="2" color="red"></font><br>
		        <input id="upName" class="name-chk-up" type="text" placeholder="Enter name" onkeypress="checkEnter(event, 'upBtn')">
		        <font id="warning" size="2" color="red"></font><br>
		        <button id="upBtn" class="modal-btn btn-2" onclick="javascript:updatePerson()"><span>Update</span></button>
		    </div>
		</div>
		
		<div id="all" class="modalBack">
		    <div class="content-box">
		        <span class="all close">&times;</span>
		        <h2>Get all people</h2>
		        <div id="listArea">
		        	<table>
		        		<tr>
		        			<th>ID</th>
		        			<th>NAME</th>
		        		</tr>
		        		<tbody id="listTable">
		        		</tbody>
		        	</table>
		        </div>
		    </div>
		</div>
	</div>
</body>
</html>