// -----------------------------------------------
// POPUP - MODAL
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------


$("#txtAboutData").change(function(){
	target = $(this).val();
	// About Data
	if(target=="AboutTheData"){
		displayPopupModal("#imgCfmCovid","https://img.icons8.com/bubbles/2x/question-mark.png","#viewModalData")
		$(this).val('');
	}
	// About Vaccine Details
	if(target=="VaccineDetails"){
		displayPopupModal("#imgVaccineDetails","https://ca-times.brightspotcdn.com/dims4/default/f083751/2147483647/strip/true/crop/4832x3222+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F68%2Fd8%2Ff92f9ad365fa18a23b836492b207%2F1bd25766c1ef4fb7bea146b3eb1807bc","#viewModalVaccineDetails");
		$(this).val('');
	}
	// About Vaccine Technology
	if(target=="VaccineTechnology"){
		displayPopupModal("#imgVaccine","https://www.atascientific.com.au/wp-content/uploads/2021/02/COVID-vaccine.jpg","#viewModalVaccine");
		$(this).val('');
	}
});

function displayPopupModal(idImg,urlImg,idModal){
	$(idImg).attr("src", urlImg);
	$(idModal).modal("toggle");
	$(document).keydown(function(e){if(e.keyCode == 27){$(idModal).modal("hide");}});
}

