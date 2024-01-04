/**
 * 
 */
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('add');
    var btn = document.getElementById('openAdd');
    var span = document.getElementsByClassName('close')[0];

    btn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    span.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

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
