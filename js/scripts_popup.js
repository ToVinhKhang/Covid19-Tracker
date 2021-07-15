// -----------------------------------------------
// POPUP - MODAL
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

// About Data
$("#txtAboutData").click(function() {
	$("#imgCfmCovid").attr("src", "https://img.icons8.com/bubbles/2x/question-mark.png");
	$("#viewImage").attr("src", "");
	$("#viewModal").modal("toggle");
});

// Zoom Flag
$("body").on("click", ".flagCountry", (e) => {
	let Img = e.target.getAttribute("src"); e.preventDefault();
	let nameCountry = e.target.parentNode.parentNode.cells[1].innerHTML;
	document.getElementById("nameCountry").textContent = nameCountry;
	document.getElementById("aboutTheData").textContent = "";
	$("#viewImage").attr("src", Img);
	$("#imgCfmCovid").attr("src", "");
	$("#viewModal").modal("toggle");
});