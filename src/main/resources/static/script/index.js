/**
 * 
 */
// 조건을 위한 변수
var r = 0;

// 버튼 클릭시 모달창
function btnClick(state) {
	    var span = document.getElementsByClassName(state)[0];
	    var modal = document.getElementById(state);
	
	    modal.style.display = 'block';
	
	    span.addEventListener('click', function () {
	        modal.style.display = 'none';
	        location.reload();
	    });
	
	    window.addEventListener('click', function (event) {
	        if (event.target === modal) {
	            modal.style.display = 'none';
	            location.reload();
	        }
	    });
	    
	    // 리스트 불러오기
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
			name.value = "";
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
			id.value = "";
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
			id.value = "";
			name.value = "";
		 },
        error: function (error) {
            console.error("Error:", error);
            alert("error");
        }
	});
};

// 랜덤
function randomStart() {
	const groupSize = document.getElementById('groupSize').value;
	const peoplePerGroup = document.getElementById('peoplePerGroup').value;
	const element = document.getElementById('random-table');
  
 	element.innerText = '';
 	
	$.ajax({
		type:'post',
		url:"/randomStart",
		datatype:'json',
		success : function(data) {
		    var groupedArray = [];
		
		// 그룹 나누기
		    for (let i = 0; i < groupSize; i++) {
		        const startIdx = i * peoplePerGroup;
		        const endIdx = startIdx + peoplePerGroup;
		        const group = data.slice(startIdx, endIdx);
		
		        // 그룹의 인원 수가 정해진 인원 수보다 적다면 빈 자리를 채웁니다.
		        while (group.length < groupSize) {
		            group.push(null);
		        }
		
		        for ( let j = 0; j < peoplePerGroup; j++ ){
					if(group[j] != null)
						groupedArray.push(group[j].NAME);
				}
				
				if( groupedArray.length != 0 )
		        	$("#random-table").append("<tr><td>" + groupedArray.join(', ') + "</td></tr>");
		        var groupedArray = [];
		    }
		 },
        error: function (error) {
            console.error("Error:", error);
            alert("error");
        }
	});
};
