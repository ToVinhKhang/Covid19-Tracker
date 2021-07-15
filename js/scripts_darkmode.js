// -----------------------------------------------
// DARK MODE
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

$("#darkMode").click(function() {
	document.body.classList.toggle("dark-mode");
	var darkMode = document.getElementById("darkMode").classList;
	if(darkMode.contains("fa-moon-o") == true){
		darkMode.toggle("fa-sun-o");darkMode.remove("fa-moon-o");}
	else if(darkMode.contains("fa-moon-o") == false){
		darkMode.toggle("fa-moon-o");darkMode.remove("fa-sun-o");}
});