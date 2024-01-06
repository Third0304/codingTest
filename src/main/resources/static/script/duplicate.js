/**
 * 
 */

// 중복체크
$().ready(function(){
	
	// 추가기능 이름 중복체크
	$('.name-chk').on('propertychange change input paste',function(){
		$.ajax({
			async:true,
			type:'post',
			url:'/nameCheck',
			data:{'name':$('.name-chk').val()},
			dataType:"json",
			success:function(data){
				if(data>0){ //이미 존재하는 이름
					$('font[id=warning]').text('');
					$('font[id=warning]').attr('color','red');
					$('font[id=warning]').text('Invalid name.');
					$('button[id=addBtn]').attr('onclick','alert("A person with the same name already exists")');
					$('.name-chk').focus();
				}else{ //사용가능한 이름
					$('font[id=warning]').text('');
					$('font[id=warning]').attr('color','blue');
					$('font[id=warning]').text('Usable name.');
					$('button[id=addBtn]').attr('onclick','javascript:addPerson()');
					$('.name-chk').focus();
				}
			},
	       error: function (error) {
            console.error("Error:", error);
            alert("error");
	        }
		});
	});	
	
	// 삭제기능 아이디 중복체크
	$('.id-chk').on('propertychange change input paste',function(){
		$.ajax({
			async:true,
			type:'post',
			url:'/idCheck',
			data:{'id':$('.id-chk').val()},
			dataType:"json",
			success:function(data){
				if(data>0){ //존재하는 아이디 삭제가능
					$('font[id=warning-id]').text('');
					$('font[id=warning-id]').attr('color','blue');
					$('font[id=warning-id]').text('ID exist.');
					$('button[id=delBtn]').attr('onclick','javascript:delPerson()');
					$('.id-chk').focus();
				} else { //존재하지 않는 아이디 삭제불가
					$('font[id=warning-id]').text('');
					$('font[id=warning-id]').attr('color','red');
					$('font[id=warning-id]').text('ID does not exist.');
					$('button[id=delBtn]').attr('onclick','alert("The Person ID does not exist")');
					$('.id-chk').focus();
				}
			},
	       error: function (error) {
            console.error("Error:", error);
            alert("error");
	        }
		});
	});	
	
	// 수정기능 중복체크
	var idChk = 0;
	var nameChk = 0;

	$('.id-chk-up').on('propertychange change input paste', function () {
	    $.ajax({
	        async: true,
	        type: 'post',
	        url: '/idCheck',
	        data: { 'id': $('.id-chk-up').val() },
	        dataType: "json",
	        success: function (data) {
	            if (data > 0) { // 존재하는 아이디 삭제가능
	                $('font[id=warning-id]').text('');
	                $('font[id=warning-id]').attr('color', 'blue');
	                $('font[id=warning-id]').text('ID exist.');
	                $('.id-chk-up').focus();
	                idChk = 0;
	            } else { // 존재하지 않는 아이디 삭제불가
	                $('font[id=warning-id]').text('');
	                $('font[id=warning-id]').attr('color', 'red');
	                $('font[id=warning-id]').text('ID does not exist.');
	                $('.id-chk-up').focus();
	                idChk = 1;
	            }
	
	            updateButtonStatus();
	        },
		       error: function (error) {
	            console.error("Error:", error);
	            alert("error");
		        }
	    });
	});

	$('.name-chk-up').on('propertychange change input paste', function () {
	    $.ajax({
	        async: true,
	        type: 'post',
	        url: '/nameCheck',
	        data: { 'name': $('.name-chk-up').val() },
	        dataType: "json",
	        success: function (data) {
	            if (data > 0) { // 이미 존재하는 이름
	                $('font[id=warning]').text('');
	                $('font[id=warning]').attr('color', 'red');
	                $('font[id=warning]').text('Invalid name.');
	                $('.name-chk-up').focus();
	                nameChk = 1;
	            } else { // 사용 가능한 이름
	                $('font[id=warning]').text('');
	                $('font[id=warning]').attr('color', 'blue');
	                $('font[id=warning]').text('Usable name.');
	                $('.name-chk-up').focus();
	                nameChk = 0;
	            }
	
	            updateButtonStatus();
	        },
		       error: function (error) {
	            console.error("Error:", error);
	            alert("error");
		        }
	    });
	});

function updateButtonStatus() {
    if (idChk == 0 && nameChk == 0) {
        $('button[id=upBtn]').attr('onclick', 'javascript:updatePerson()');
    } else if (idChk == 1) {
        $('button[id=upBtn]').attr('onclick', 'alert("The Person ID does not exist")');
    } else if (nameChk == 1) {
        $('button[id=upBtn]').attr('onclick', 'alert("A person with the same name already exists")');
    }
}

}); // ready end