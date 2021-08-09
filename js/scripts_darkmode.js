// -----------------------------------------------
// DARK MODE
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------
var darkModeLocal = localStorage.getItem("theme");
console.log(darkModeLocal)

$("#darkMode").click(function() {
	document.body.classList.toggle("dark-mode");
	var darkMode = document.getElementById("darkMode").classList;
	
	if(darkModeLocal == "dark"){
		darkMode.toggle("fa-sun-o");
		darkMode.remove("fa-moon-o");
		console.log(darkModeLocal)
		localStorage.setItem("theme","light");
	}
	else if(darkModeLocal == "light"){
		darkMode.toggle("fa-moon-o");
		darkMode.remove("fa-sun-o");
		console.log(darkModeLocal)
		localStorage.setItem("theme","dark");
	}
});