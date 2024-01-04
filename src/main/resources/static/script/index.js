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
	const name = document.getElementById('name');
	
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
	const id = document.getElementById('id');
	
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
