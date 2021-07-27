// -----------------------------------------------
// SWITCH LANGUAGES (TRANSLATE)
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

// SELECT LANGUAGES
$("#SwitchLanguages").change(function(){
	// LANG TARGET
	lang = $(this).val();
	
	// English
	if(lang=="EN"){
		fetch("./lang/en.json")
		.then(data => data.json())
		.then(dataEN => {displayDataTranslated(dataEN);
			Swap("Tr","M");
		}).catch(e => console.log(e));
	}
	
	// Vietnamses
	if(lang=="VN"){
		fetch("./lang/vn.json")
		.then(data => data.json())
		.then(dataVN => {displayDataTranslated(dataVN);
			Swap("M","Tr");
		}).catch(e => console.log(e));
	}
});

// Custom
function Swap(Tr,M){
	var Population = document.getElementById("Population");
	var GlobalCases = document.getElementById("GlobalCases");
	var GlobalRecovered = document.getElementById("GlobalRecovered");
	var GlobalDeaths = document.getElementById("GlobalDeaths");
	
	Population.innerHTML = Population.innerHTML.replace(Tr,M);
	GlobalCases.innerHTML = GlobalCases.innerHTML.replace(Tr,M);
	GlobalRecovered.innerHTML = GlobalRecovered.innerHTML.replace(Tr,M);
	GlobalDeaths.innerHTML = GlobalDeaths.innerHTML.replace(Tr,M);
}

function displayDataTranslated(dataLang){
	var th_contries = document.getElementById("th-contries");
	var th_cases = document.getElementById("th-cases");
	var th_recovered = document.getElementById("th-recovered");
	var th_deaths = document.getElementById("th-deaths");
	var th_tests = document.getElementById("th-tests");
	var th_citiesprovinces = document.getElementById("th-citiesprovinces");
	var th_citiesCases = document.getElementById("th-citiesCases");
	var th_citiesRecovered = document.getElementById("th-citiesRecovered");
	var th_citiesDeaths = document.getElementById("th-citiesDeaths");
	var th_citiesprovincesVac = document.getElementById("th-citiesprovincesVac");
	var th_citiesProVac = document.getElementById("th-citiesProVac");
	var th_citiesOneDose = document.getElementById("th-citiesOneDose");
	var th_citiesTwoDose = document.getElementById("th-citiesTwoDose");
	var th_citiesprovincesVacDistribution = document.getElementById("th-citiesprovincesVacDistribution");
	var th_citiesPlanned = document.getElementById("th-citiesPlanned");
	var th_citiesRealistic = document.getElementById("th-citiesRealistic");
	var th_citiesDistriRate = document.getElementById("th-citiesDistriRate");
	
	var txtTitle = document.getElementById("txtTitle");
	var txtDesc = document.getElementById("txtDesc");
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
	var txtOneDose = document.getElementById("txtOneDose");
	var txtVaccines = document.getElementById("txtVaccines");
	var txtTwoDose = document.getElementById("txtTwoDose");
	var txtPlanned = document.getElementById("txtPlanned");
	var txtRealistic = document.getElementById("txtRealistic");
	var txtDistriRate = document.getElementById("txtDistriRate");
	var txtFullyVaccinatedRate = document.getElementById("txtFullyVaccinatedRate");
	var txtNewDataChart = document.getElementById("txtNewDataChart");
	var txtTotalDataChart = document.getElementById("txtTotalDataChart");
	var txtDetailsVaccination = document.getElementById("txtDetailsVaccination");
	var txtVaccineDistribution = document.getElementById("txtVaccineDistribution");
	
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
	var dailyChart = document.getElementById("dailyChart");	
	var message = document.getElementById("message");	
	
	th_contries.innerHTML = dataLang.tableWorld.th1;
	th_cases.innerHTML = dataLang.tableWorld.th2;
	th_recovered.innerHTML = dataLang.tableWorld.th3;
	th_deaths.innerHTML = dataLang.tableWorld.th4;
	th_tests.innerHTML = dataLang.tableWorld.th5;
	th_citiesprovinces.innerHTML = dataLang.tableVietnam.th1;
	th_citiesCases.innerHTML = dataLang.tableVietnam.th2;
	th_citiesRecovered.innerHTML = dataLang.tableVietnam.th3;
	th_citiesDeaths.innerHTML = dataLang.tableVietnam.th4;
	th_citiesprovincesVac.innerHTML = dataLang.tableVietnamVac.th1;
	th_citiesProVac.innerHTML = dataLang.tableVietnamVac.th2;
	th_citiesOneDose.innerHTML = dataLang.tableVietnamVac.th3;
	th_citiesTwoDose.innerHTML = dataLang.tableVietnamVac.th4;
	th_citiesprovincesVacDistribution.innerHTML = dataLang.tableVietnamVac.th1;
	th_citiesPlanned.innerHTML  = dataLang.VaccinesDistribution.txt4;
	th_citiesRealistic.innerHTML  = dataLang.VaccinesDistribution.txt5;
	th_citiesDistriRate.innerHTML  = dataLang.VaccinesDistribution.txt6;
	
	txtTitle.innerHTML = dataLang.title;
	txtDesc.innerHTML = dataLang.desc;
	txtGlobal.innerHTML = dataLang.global;
	txtGlobalCases.innerHTML = dataLang.totalVietnam.txt1;
	txtGlobalRecovered.innerHTML = dataLang.totalVietnam.txt2;
	txtGlobalDeaths.innerHTML = dataLang.totalVietnam.txt3;
	txtTotalCases.innerHTML = dataLang.totalVietnam.txt1;
	txtTotalRecovered.innerHTML = dataLang.totalVietnam.txt2;
	txtTotalDeaths.innerHTML = dataLang.totalVietnam.txt3;
	txtPopulation.innerHTML = dataLang.totalVietnam.txt4;
	txtIncidenceRate.innerHTML = dataLang.rateVietnam.txt1;
	txtRecoveryRate.innerHTML = dataLang.rateVietnam.txt2;
	txtDeathRate.innerHTML = dataLang.rateVietnam.txt3;
	txtDetailsVaccination.innerHTML  = dataLang.Vaccines.title;
	txtOneDose.innerHTML = dataLang.Vaccines.txt1;
	txtVaccines.innerHTML = dataLang.Vaccines.txt2;
	txtTwoDose.innerHTML = dataLang.Vaccines.txt3;
	txtVaccineDistribution.innerHTML  = dataLang.VaccinesDistribution.title;
	txtPlanned.innerHTML = dataLang.VaccinesDistribution.txt1;
	txtRealistic.innerHTML = dataLang.VaccinesDistribution.txt2;
	txtDistriRate.innerHTML = dataLang.VaccinesDistribution.txt3;
	txtFullyVaccinatedRate.innerHTML = dataLang.rateVietnam.txt4;
	txtNewDataChart.innerHTML = dataLang.Chart.title1;
	txtTotalDataChart.innerHTML = dataLang.Chart.title2;
	
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
	dailyChart.innerHTML = dataLang.Chart.title3;
	message.innerHTML = dataLang.forEr;
	
}

// ----
// END
// ----