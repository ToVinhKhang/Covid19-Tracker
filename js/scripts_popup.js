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
		$(document).keydown(function(e){if(e.keyCode == 27){$('#viewModalData').hide();}});
	}
	// About Vaccine
	if(target=="Vaccine"){
		$("#imgVaccine").attr("src", "https://cms.wellcome.org/sites/default/files/styles/image_full_hi/public/2021-01/FINAL_ExplainerThumbnails_Ex9_What_Different_Types_Of_Covid_Vaccine_Are_There-1600x900.png?itok=uHtvnnMM");
		$("#viewModalVaccine").modal("toggle");
		$(this).val('');
		$(document).keydown(function(e){if(e.keyCode == 27){$('#viewModalVaccine').hide();}});
	}
});

