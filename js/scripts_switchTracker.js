// -----------------------------------------------
// SWITCH TRACKER
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

$("#switchTracker").click(function() {
	SwitchTracker();
});

function SwitchTracker(){
	var checkClass = document.getElementById("switchTracker").classList;
	
	// Display Vietnam Tracker
	if(checkClass.contains("WorldLogo") == true){
		checkClass.toggle("vnLogo");
		document.getElementById("content").style.display = "none";
		document.getElementById("contentWorld").style.display = "block";
		document.getElementById("txtVNTracker").innerHTML = "Vietnam Tracker";
		$(".WorldLogo").attr("src", "https://img.icons8.com/color/452/vietnam-circular.png");
		checkClass.remove("WorldLogo");
	}
	
	// Display World Tracker
	else if(checkClass.contains("WorldLogo") == false){
		checkClass.toggle("WorldLogo");
		document.getElementById("contentWorld").style.display = "none";
		document.getElementById("content").style.display = "block";
		document.getElementById("txtVNTracker").innerHTML = "World Tracker";
		$(".vnLogo").attr("src", "https://image.flaticon.com/icons/png/512/1652/1652844.png");
		checkClass.remove("vnLogo");
	}
	
	// Scroll Top 
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};
