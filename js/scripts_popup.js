// -----------------------------------------------
// POPUP - MODAL
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------


$("#txtAboutData").change(function(){
	target = $(this).val();
	// About Data
	if(target=="Data"){
		$("#imgCfmCovid").attr("src", "https://img.icons8.com/bubbles/2x/question-mark.png");
		$("#viewModal").modal("toggle");
		$(this).val("none");
	}
	// About Vaccine
	if(target=="Vaccine"){

		$(this).val("none");
	}
});
