
dataEN = `{
	"title": "Covid-19 Tracker",
	"desc": "The situation of the Coronavirus epidemic data around the World",
	"global": "COVID-19 DATA IN GLOBAL",
	"tableWorld": {
		"th1": "Countries",
		"th2": "Cases",
		"th3": "Recovered",
		"th4": "Deaths",
		"th5": "Tests"
	},
	"tableVietnam": {
		"th1": "Cities/Provinces",
		"th2": "Cases",
		"th3": "Recovered",
		"th4": "Deaths"
	},
	"totalVietnam": {
		"txt1": "Cases",
		"txt2": "Recovered",
		"txt3": "Deaths",
		"txt4": "Population"
	},
	"rateVietnam": {
		"txt1": "Incidence Rate",
		"txt2": "Recovery Rate",
		"txt3": "Death Rate"
	},
	"searching" : "Searching by names of countries . . .",
	"footer": "Designed by ",
	"AboutData" : "About Data?",
	"vnName" : "VIETNAM"
}`;
dataVN = `{
	"title": "Bộ Theo Dõi Covid-19",
	"desc": "Dữ liệu về Tình hình Dịch bệnh các nước trên toàn Thế giới",
	"global": "DỮ LIỆU COVID-19 TRÊN TOÀN CẦU ",
	"tableWorld": {
		"th1": "Quốc gia",
		"th2": "Ca nhiễm",
		"th3": "Khỏi bệnh",
		"th4": "Tử vong",
		"th5": "Xét nghiệm"
	},
	"tableVietnam": {
		"th1": "Thành Phố/Tỉnh",
		"th2": "Ca nhiễm",
		"th3": "Khỏi bệnh",
		"th4": "Tử vong"
	},
	"totalVietnam": {
		"txt1": "Ca nhiễm",
		"txt2": "Khỏi bệnh",
		"txt3": "Tử vong",
		"txt4": "Dân số"
	},
	"rateVietnam": {
		"txt1": "Tỉ lệ mắc bệnh",
		"txt2": "Tỉ lệ khỏi bệnh",
		"txt3": "Tỉ lệ tử vong"
	},
	"searching" : "Tìm kiếm theo tên quốc gia . . .",
	"footer": "Được thiết kế bởi ",
	"AboutData" : "Về Dữ liệu?",
	"vnName" : "VIỆT NAM"
}`;
dataEN = JSON.parse(dataEN);dataVN = JSON.parse(dataVN);

$("#SwitchLanguages").change(function(){lang = $(this).val();
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
	

	if(lang=="EN"){
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
	}

	if(lang=="VN"){
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
	}
});