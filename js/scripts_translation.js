// -----------------------------------------------
// SWITCH LANGUAGES (TRANSLATE)
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

// SELECT LANGUAGES
$("#SwitchLanguages").change(function(){
	// LANG TARGET
	lang = $(this).val();
	
	// SETUP
	var txtTitle = document.getElementById("txtTitle");
	var txtDesc = document.getElementById("txtDesc");
	var tspan = document.getElementsByTagName("tspan")[0];
	var th_contries = document.getElementById("th-contries");
	var th_cases = document.getElementById("th-cases");
	var th_recovered = document.getElementById("th-recovered");
	var th_deaths = document.getElementById("th-deaths");
	var th_tests = document.getElementById("th-tests");
	var th_citiesprovinces = document.getElementById("th-citiesprovinces");
	var th_citiesCases = document.getElementById("th-citiesCases");
	var th_citiesRecovered = document.getElementById("th-citiesRecovered");
	var th_citiesDeaths = document.getElementById("th-citiesDeaths");
	var txtTotalCases = document.getElementById("txtTotalCases");
	var txtTotalRecovered = document.getElementById("txtTotalRecovered");
	var txtTotalDeaths = document.getElementById("txtTotalDeaths");
	var Population = document.getElementById("Population");
	var txtIncidenceRate = document.getElementById("txtIncidenceRate");
	var txtRecoveryRate = document.getElementById("txtRecoveryRate");
	var txtDeathRate = document.getElementById("txtDeathRate");
	var designedBy = document.getElementById("designedBy");
	var searchInput = document.getElementById("searchInput");
	var txtAboutData = document.getElementById("txtAboutData");
	var vnName = document.getElementById("vnName");
	$("#imgCfmCovid").attr("src", "https://img.icons8.com/bubbles/2x/question-mark.png");
	var nameAbData = document.getElementById("nameAbData");
	var aboutTheData = document.getElementById("aboutTheData");

	
	// -------
	// English
	// -------
	if(lang=="EN"){
		fetch("./lang/en.json")
		.then(data => data.json())
		.then(dataEN => {
			txtTitle.innerHTML = dataEN.title;
			txtDesc.innerHTML = dataEN.desc;
			tspan.innerHTML = dataEN.global;
			th_contries.innerHTML = dataEN.tableWorld.th1;
			th_cases.innerHTML = dataEN.tableWorld.th2;
			th_recovered.innerHTML = dataEN.tableWorld.th3;
			th_deaths.innerHTML = dataEN.tableWorld.th4;
			th_tests.innerHTML = dataEN.tableWorld.th5;
			th_citiesprovinces.innerHTML = dataEN.tableVietnam.th1;
			th_citiesCases.innerHTML = dataEN.tableVietnam.th2;
			th_citiesRecovered.innerHTML = dataEN.tableVietnam.th3;
			th_citiesDeaths.innerHTML = dataEN.tableVietnam.th4;
			txtTotalCases.innerHTML = dataEN.totalVietnam.txt1;
			txtTotalRecovered.innerHTML = dataEN.totalVietnam.txt2;
			txtTotalDeaths.innerHTML = dataEN.totalVietnam.txt3;
			txtPopulation.innerHTML = dataEN.totalVietnam.txt4;
			Population.innerHTML = Population.innerHTML.replace("Tr","M");
			txtIncidenceRate.innerHTML = dataEN.rateVietnam.txt1;
			txtRecoveryRate.innerHTML = dataEN.rateVietnam.txt2;
			txtDeathRate.innerHTML = dataEN.rateVietnam.txt3;
			designedBy.innerHTML = dataEN.footer;
			searchInput.placeholder = dataEN.searching;
			txtAboutData.innerHTML = dataEN.AboutData;
			vnName.innerHTML = dataEN.vnName;
			nameAbData.textContent = dataEN.AboutTheData.title;
			aboutTheData.innerHTML = dataEN.AboutTheData.content;
		}).catch(e => console.log(e));
	}
	
	
	// ----------
	// Vietnamses
	// ----------
	if(lang=="VN"){
		fetch("./lang/vn.json")
		.then(data => data.json())
		.then(dataVN => {
			txtTitle.innerHTML = dataVN.title;
			txtDesc.innerHTML = dataVN.desc;
			tspan.innerHTML = dataVN.global;
			th_contries.innerHTML = dataVN.tableWorld.th1;
			th_cases.innerHTML = dataVN.tableWorld.th2;
			th_recovered.innerHTML = dataVN.tableWorld.th3;
			th_deaths.innerHTML = dataVN.tableWorld.th4;
			th_tests.innerHTML = dataVN.tableWorld.th5;
			th_citiesprovinces.innerHTML = dataVN.tableVietnam.th1;
			th_citiesCases.innerHTML = dataVN.tableVietnam.th2;
			th_citiesRecovered.innerHTML = dataVN.tableVietnam.th3;
			th_citiesDeaths.innerHTML = dataVN.tableVietnam.th4;
			txtTotalCases.innerHTML = dataVN.totalVietnam.txt1;
			txtTotalRecovered.innerHTML = dataVN.totalVietnam.txt2;
			txtTotalDeaths.innerHTML = dataVN.totalVietnam.txt3;
			txtPopulation.innerHTML = dataVN.totalVietnam.txt4;
			Population.innerHTML = Population.innerHTML.replace("M","Tr");
			txtIncidenceRate.innerHTML = dataVN.rateVietnam.txt1;
			txtRecoveryRate.innerHTML = dataVN.rateVietnam.txt2;
			txtDeathRate.innerHTML = dataVN.rateVietnam.txt3;
			designedBy.innerHTML = dataVN.footer;
			searchInput.placeholder = dataVN.searching;
			txtAboutData.innerHTML = dataVN.AboutData;
			vnName.innerHTML = dataVN.vnName;
			nameAbData.textContent = dataVN.AboutTheData.title;
			aboutTheData.innerHTML = dataVN.AboutTheData.content;
		}).catch(e => console.log(e));
	}
});

// ----
// END
// ----