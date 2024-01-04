/**
 * 
 */
// 버튼 클릭시 모달창
function btnClick(state) {
	    var span = document.getElementsByClassName(state)[0];
	    var modal = document.getElementById(state);
	
	    modal.style.display = 'block';
	
	    span.addEventListener('click', function () {
	        modal.style.display = 'none';
	    });
	
	    window.addEventListener('click', function (event) {
	        if (event.target === modal) {
	            modal.style.display = 'none';
	        }
	    });
}

// 추가
function addPerson() {
	const name = document.getElementById('addName');
	
	$.ajax({
		type:'post',
		data:{"name":name.value},
		url:"/addPerson",
		datatype:'json',
		success : function() {
			alert("success!!");
			name.value = '';
		 },
        error: function (error) {
            console.error("Error:", error);
            alert("A person with the same name already exists.");
        }
	});
};

// 삭제
function delPerson() {
	const id = document.getElementById('delId');
	
	$.ajax({
		type:'post',
		data:{"id":id.value},
		url:"/delPerson",
		datatype:'json',
		success : function() {
			alert("success!!");
			id.value = '';
		 },
        error: function (error) {
            console.error("Error:", error);
            alert("The Person ID does not exist.");
        }
	});
};

// 수정
function updatePerson() {
	const id = document.getElementById('upId');
	const name = document.getElementById('upName');
	
	$.ajax({
		type:'post',
		data:{"id":id.value,
			  "name":name.value},
		url:"/updatePerson",
		datatype:'json',
		success : function() {
			alert("success!!");
			id.value = '';
			name.value = '';
		 },
        error: function (error) {
            console.error("Error:", error);
            alert("The Person ID does not exist.");
        }
	});
};
