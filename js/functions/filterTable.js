// -----------------------------------------------
// SEARCH INPUT
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

$("#searchInput").keyup(function() {
	var input = document.getElementById("searchInput");
	var filter = input.value.toUpperCase();
	var table = document.getElementById("table");
	var tr = table.getElementsByTagName("tr");

	for (var i=0; i<tr.length; i++){
		td = tr[i].getElementsByTagName("td")[1];
		if(td){var txtValue = td.textContent || td.innerText;
			if(txtValue.toUpperCase().indexOf(filter) > -1){tr[i].style.display = "";}
			else{tr[i].style.display = "none";}
		}
	}
});