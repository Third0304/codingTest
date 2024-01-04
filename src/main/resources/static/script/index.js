/**
 * 
 */
// 버튼 클릭시 모달창
var r = 0;

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
	    
	    if (state == "all") {
			if ( r == 0 ) {
				$.ajax({
					type:'post',
					url:"/getList",
					datatype:'json',
					success : function(data) {
						if (data.length != 0) {
							for (var i = 0; i < data.length; i++) {
								$("#listTable").append("<tr><td>" + data[i].ID + "</td><td>" + data[i].NAME + "</td></tr>");
							}
						} else {
							$("#listTable").append("<tr><td colspan='2' style='text-align:center'>Empty</td></tr>");
						}
					 },
			        error: function (error) {
			            console.error("Error:", error);
			            alert("error");
			        }
				});
				r = 1;
			}
		}
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
			location.reload();
		 },
        error: function (error) {
            console.error("Error:", error);
            alert("error");
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
			location.reload();
		 },
        error: function (error) {
            console.error("Error:", error);
            alert("error");
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
			location.reload();
		 },
        error: function (error) {
            console.error("Error:", error);
            alert("error");
        }
	});
};
