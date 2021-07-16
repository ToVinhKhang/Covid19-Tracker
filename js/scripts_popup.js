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
		$("#viewModalData").modal("toggle");
		$(this).val('');
	}
	// About Vaccine
	if(target=="Vaccine"){
		$("#imgVaccine").attr("src", "https://content.govdelivery.com/attachments/fancy_images/USVHA/2021/01/4005196/covid-vaccine-01_original.png");
		$("#viewModalVaccine").modal("toggle");
		$(this).val('');
	}
});
