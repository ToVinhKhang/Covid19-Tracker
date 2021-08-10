// -----------------------------------------------
// DARK MODE
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

// Check theme at first 
window.addEventListener("load", () => {
	var theme = window.localStorage.getItem("theme");
	if(theme == "dark"){Dark();}
	else if(theme == "light"){Light();}
})

// Init
var darkModeToggle = document.querySelector("#darkMode");
var darkMode = document.getElementById("darkMode").classList;
const Dark = ()=>{
	document.body.classList.add("dark-mode");
	darkMode.add("fa-sun-o");darkMode.remove("fa-moon-o");
}
const Light = ()=>{
	document.body.classList.remove("dark-mode");
	darkMode.add("fa-moon-o");darkMode.remove("fa-sun-o");
}
const addThemeDark = ()=>{window.localStorage.setItem("theme","dark");}
const addThemeLight = ()=>{window.localStorage.setItem("theme","light");}


// Change theme on click 
darkModeToggle.addEventListener("click", ()=>{
	var theme = window.localStorage.getItem("theme");
	if(theme !== "dark"){Dark();addThemeDark();}
	else if(theme !== "light"){Light();addThemeLight();}
})

// END




