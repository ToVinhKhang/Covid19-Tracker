// -----------------------------------------------
// SWITCH LANGUAGES (TRANSLATE)
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

// SELECT LANGUAGES
$("#SwitchLanguages").change(function(){
	// LANG TARGET
	lang = $(this).val();
	var Population = document.getElementById("Population");
	var GlobalCases = document.getElementById("GlobalCases");
	var GlobalRecovered = document.getElementById("GlobalRecovered");
	var GlobalDeaths = document.getElementById("GlobalDeaths");
	
	// English
	if(lang=="EN"){
		fetch("./lang/en.json")
		.then(data => data.json())
		.then(dataEN => {
			displayDataTranslated(dataEN);
			Population.innerHTML = Population.innerHTML.replace("Tr","M");
			GlobalCases.innerHTML = GlobalCases.innerHTML.replace("Tr","M");
			GlobalRecovered.innerHTML = GlobalRecovered.innerHTML.replace("Tr","M");
			GlobalDeaths.innerHTML = GlobalDeaths.innerHTML.replace("Tr","M");
		}).catch(e => console.log(e));
	}
	
	// Vietnamses
	if(lang=="VN"){
		fetch("./lang/vn.json")
		.then(data => data.json())
		.then(dataVN => {
			displayDataTranslated(dataVN);
			Population.innerHTML = Population.innerHTML.replace("M","Tr");
			GlobalCases.innerHTML = GlobalCases.innerHTML.replace("M","Tr");
			GlobalRecovered.innerHTML = GlobalRecovered.innerHTML.replace("M","Tr");
			GlobalDeaths.innerHTML = GlobalDeaths.innerHTML.replace("M","Tr");
		}).catch(e => console.log(e));
	}
});

function displayDataTranslated(dataLang){
	var txtTitle = document.getElementById("txtTitle");
	var txtDesc = document.getElementById("txtDesc");
	var th_contries = document.getElementById("th-contries");
	var th_cases = document.getElementById("th-cases");
	var th_recovered = document.getElementById("th-recovered");
	var th_deaths = document.getElementById("th-deaths");
	var th_tests = document.getElementById("th-tests");
	var th_citiesprovinces = document.getElementById("th-citiesprovinces");
	var th_citiesCases = document.getElementById("th-citiesCases");
	var th_citiesRecovered = document.getElementById("th-citiesRecovered");
	var th_citiesDeaths = document.getElementById("th-citiesDeaths");
	var txtGlobal = document.getElementById("txtGlobal");
	var txtGlobalCases = document.getElementById("txtGlobalCases");
	var txtGlobalRecovered = document.getElementById("txtGlobalRecovered");
	var txtGlobalDeaths = document.getElementById("txtGlobalDeaths");
	var txtTotalCases = document.getElementById("txtTotalCases");
	var txtTotalRecovered = document.getElementById("txtTotalRecovered");
	var txtTotalDeaths = document.getElementById("txtTotalDeaths");
	var txtIncidenceRate = document.getElementById("txtIncidenceRate");
	var txtRecoveryRate = document.getElementById("txtRecoveryRate");
	var txtDeathRate = document.getElementById("txtDeathRate");
	var designedBy = document.getElementById("designedBy");
	var searchInput = document.getElementById("searchInput");
	var txtAboutData = document.getElementById("txtAboutData");
	var vnName = document.getElementById("vnName");
	var nameAbData = document.getElementById("nameAbData");
	var aboutTheData = document.getElementById("aboutTheData");
	var nameVaccine = document.getElementById("nameVaccine");
	var aboutTheVaccine = document.getElementById("aboutTheVaccine");
	var nameVaccineDetails = document.getElementById("nameVaccineDetails");
	var aboutTheVaccineDetails = document.getElementById("aboutTheVaccineDetails");
	var nameGuide = document.getElementById("nameGuide");
	var aboutGuide = document.getElementById("aboutGuide");
	var txtOneDose = document.getElementById("txtOneDose");
	var txtVaccines = document.getElementById("txtVaccines");
	var txtTwoDose = document.getElementById("txtTwoDose");
	var txtFullyVaccinatedRate = document.getElementById("txtFullyVaccinatedRate");
			
			
	txtTitle.innerHTML = dataLang.title;
	txtDesc.innerHTML = dataLang.desc;
	txtGlobal.innerHTML = dataLang.global;
	txtGlobalCases.innerHTML = dataLang.totalVietnam.txt1;
	txtGlobalRecovered.innerHTML = dataLang.totalVietnam.txt2;
	txtGlobalDeaths.innerHTML = dataLang.totalVietnam.txt3;
	th_contries.innerHTML = dataLang.tableWorld.th1;
	th_cases.innerHTML = dataLang.tableWorld.th2;
	th_recovered.innerHTML = dataLang.tableWorld.th3;
	th_deaths.innerHTML = dataLang.tableWorld.th4;
	th_tests.innerHTML = dataLang.tableWorld.th5;
	th_citiesprovinces.innerHTML = dataLang.tableVietnam.th1;
	th_citiesCases.innerHTML = dataLang.tableVietnam.th2;
	th_citiesRecovered.innerHTML = dataLang.tableVietnam.th3;
	th_citiesDeaths.innerHTML = dataLang.tableVietnam.th4;
	txtTotalCases.innerHTML = dataLang.totalVietnam.txt1;
	txtTotalRecovered.innerHTML = dataLang.totalVietnam.txt2;
	txtTotalDeaths.innerHTML = dataLang.totalVietnam.txt3;
	txtPopulation.innerHTML = dataLang.totalVietnam.txt4;
	txtIncidenceRate.innerHTML = dataLang.rateVietnam.txt1;
	txtRecoveryRate.innerHTML = dataLang.rateVietnam.txt2;
	txtDeathRate.innerHTML = dataLang.rateVietnam.txt3;
	designedBy.innerHTML = dataLang.footer;
	searchInput.placeholder = dataLang.searching;
	txtAboutData.innerHTML = dataLang.AboutData;
	vnName.innerHTML = dataLang.vnName;
	nameAbData.textContent = dataLang.AboutTheData.title;
	aboutTheData.innerHTML = dataLang.AboutTheData.content;
	nameVaccine.textContent = dataLang.AboutVaccineTechnology.title;
	aboutTheVaccine.innerHTML = dataLang.AboutVaccineTechnology.content;
	nameVaccineDetails.textContent = dataLang.AboutVaccineDetails.title;
	aboutTheVaccineDetails.innerHTML = dataLang.AboutVaccineDetails.content;
	nameGuide.textContent = dataLang.SoftwareInfo.title;
	aboutGuide.innerHTML = dataLang.SoftwareInfo.content;
	txtOneDose.innerHTML = dataLang.Vaccines.txtOneDose;
	txtVaccines.innerHTML = dataLang.Vaccines.txtVaccines;
	txtTwoDose.innerHTML  = dataLang.Vaccines.txtTwoDose;
	txtFullyVaccinatedRate.innerHTML = dataLang.Vaccines.txtFullyVaccinatedRate;
}

// ----
// END
// ----