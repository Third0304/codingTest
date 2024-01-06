/**
 * 
 */
// 조건을 위한 전역변수
var listCnk = 0;

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
			if ( listCnk == 0 ) {
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
				listCnk = 1;
			}
		}
}

// 추가
function addPerson() {
    const nameInput = document.getElementById('addName');
    const name = nameInput.value.trim();  

    if (name === "") {
        alert("Please enter a valid name.");
        return;
    }

    $.ajax({
        type: 'post',
        data: { "name": name },
        url: "/addPerson",
        datatype: 'json',
        success: function () {
            alert("Success!!");
            nameInput.value = "";
        },
        error: function (error) {
            console.error("Error:", error);
            alert("Error");
        }
    });
};


// 삭제
function delPerson() {
    const idInput = document.getElementById('delId');
    const id = idInput.value.trim();

    if (id === "") {
        alert("Please enter a valid ID.");
        return;
    }
	
	if ( confirm("Are you sure you want to delete it?") ){
	    $.ajax({
	        type: 'post',
	        data: { "id": id },
	        url: "/delPerson",
	        datatype: 'json',
	        success: function () {
	            alert("Success!!");
	            idInput.value = "";
	        },
	        error: function (error) {
	            console.error("Error:", error);
	            alert("Error");
	        }
	    });
	}
};


// 수정
function updatePerson() {
    const idInput = document.getElementById('upId');
    const nameInput = document.getElementById('upName');
    const id = idInput.value.trim(); 
    const name = nameInput.value.trim(); 
    
    if (id === "" || name === "") {
        alert("Please enter valid ID and name.");
        return;
    }

    $.ajax({
        type: 'post',
        data: { "id": id, "name": name },
        url: "/updatePerson",
        datatype: 'json',
        success: function () {
            alert("Success!!");
            idInput.value = "";
            nameInput.value = "";
        },
        error: function (error) {
            console.error("Error:", error);
            alert("Error");
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
		    
		    // 그룹의 인원 수가 정해진 인원 수보다 적으면 오류 메시지를 출력하고 함수 종료
            if (data.length < groupSize * peoplePerGroup) {
                alert("There are not enough people to create groups with the given input.");
                return;
            }
		
		// 그룹 나누기
		    for (let i = 0; i < groupSize; i++) {
		        const startIdx = i * peoplePerGroup;
		        const endIdx = startIdx + peoplePerGroup;
		        const group = data.slice(startIdx, endIdx);
		
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


 function checkEnter(event, btn) {
        if (event.key === "Enter") {
            document.getElementById(btn).click(); 
        }
    }
