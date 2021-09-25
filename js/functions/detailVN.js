// -----------------------------------------------
// COVID19 VIETNAM TRACKER
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

//----------
// 	API
//----------

// API for CityVietnam
const API_CityVietnam   = "https://api-kent.netlify.app/.netlify/functions/api/vn";

// API for DailyVietnam
const API_DailyVietnam  = "https://api-kent.netlify.app/.netlify/functions/api/vn/daily/covid";

// API for Detail Vaccine 
const API_DetailVaccine = "https://api-kent.netlify.app/.netlify/functions/api/vn/vaccines/distribution";

// API for Daily Vaccines
const API_DailyVaccines = "https://api-kent.netlify.app/.netlify/functions/api/vn/daily/vaccines";


// Init
let tableVN;
let tableVNdose;
let tableVNvacDistribution;

window.addEventListener('load',() => {
	tableVN = document.getElementById("tableVN");
	tableVNdose = document.getElementById("tableVNdose");
	tableVNvacDistribution = document.getElementById("tableVNvacDistribution");
	getDataVNCity();
	getDataVNDaily();
	getDataVNDailyCityProvince();
	getDataVNDetailVaccine();
	getDataVNDailyVaccines();
});


//---------
// GET DATA
//---------
// Get Data City 
async function getDataVNCity(){
	tableVN.innerHTML = '';
	await fetch(API_CityVietnam)
		.then(data => data.json())
		.then(jsonData => {displayCity(jsonData);})
		.catch(err => {ForEr();console.error(err);});
}
// Get Data Detail Vaccine 
async function getDataVNDetailVaccine(){
	await fetch(API_DetailVaccine)
		.then(data => data.json())
		.then(jsonData => {displayVacDose(jsonData);displayVacDistribution(jsonData);})
		.catch(err => {ForEr();console.error(err);});
}


// Get Data DailyVietnam
async function getDataVNDaily(label1="TOTAL DATA OF DAY",label2="NEW DATA OF DAY"){
	await fetch(API_DailyVietnam,{headers: {'Access-Control-Allow-Origin': '*'}})
		.then(data => data.json())
		.then(jsonData => {displayDailyVietnam(jsonData,label1,label2);})
		.catch(err => {console.error(err);unDisplayChart();});
}
// Get Data Daily Vaccines
async function getDataVNDailyVaccines(label1="TOTAL DATA OF DAY",label2="NEW DATA OF DAY"){
	await fetch(API_DailyVaccines)
		.then(data => data.json())
		.then(jsonData => {displayDailyVaccines(jsonData,label1,label2);})
		.catch(e => {console.log(e);unDisplayChart();});
}
// Get Data Daily CityProvince (Most Interest)
function getDataVNDailyCityProvince(label1="TOTAL DATA OF DAY",label2="NEW DATA OF DAY"){
	$('#hcm').on('click',()=>{fetchCityProvince("hochiminh",label1,label2,$('#hcm').text());});
	$('#hn').on('click', ()=>{fetchCityProvince("hanoi",label1,label2,$('#hn').text());});
	$('#bd').on('click', ()=>{fetchCityProvince("binhduong",label1,label2,$('#bd').text());});
}
function fetchCityProvince(key,label1,label2,name){
	fetch("https://api.zingnews.vn/public/v2/corona/getChart?loc="+key)
		.then(data => data.json())
		.then(jsonData => {displayDailyCityProvince(jsonData,label1,label2);document.getElementById("MostInterest").innerHTML = name;})
		.catch(e => {console.log(e);});
}


//---------
// Display
//---------
function displayCity(jsonData){
	for(i=0; i<=62;i++){
		let tr = document.createElement("tr");
		let City = document.createElement("td");City.textContent = jsonData.detail[i].name.replace("- ","");
		let Cases = document.createElement("td");Cases.textContent = parseInt(jsonData.detail[i].cases).toLocaleString('en-US');
		let Recovered = document.createElement("td");Recovered.textContent = parseInt(jsonData.detail[i].recovered).toLocaleString('en-US');
		let Deaths = document.createElement("td");Deaths.textContent = parseInt(jsonData.detail[i].deaths).toLocaleString('en-US');
		
		tr.appendChild(City);
		tr.appendChild(Cases);
		tr.appendChild(Recovered);
		tr.appendChild(Deaths);
		tableVN.appendChild(tr);
	}
	var totalCases     = jsonData.total.totalCases;
	var totalRecovered = jsonData.total.totalRecovered;
	var totalDeaths    = jsonData.total.totalDeaths;
	
	displayTotalVN(totalCases,totalRecovered,totalDeaths);
	displayRate(totalCases,totalRecovered,totalDeaths);
	
	//Make sure focus max value at first
	setTimeout(()=>{$('#th-citiesCases').trigger('click');$('#th-citiesCases').trigger('click');}, 3000);	
}
function displayVacDose(jsonData){
	tableVNdose.innerHTML = '';
	for(i=0; i<=62;i++){
		let tr = document.createElement("tr");
		let City = document.createElement("td");City.textContent = jsonData.dataVacDose[i].name;
		let Vaccines = document.createElement("td");Vaccines.textContent = jsonData.dataVacDose[i].vaccines.toLocaleString('en-US');
		let Onedose = document.createElement("td");Onedose.textContent = jsonData.dataVacDose[i].onedose.toLocaleString('en-US');
		let Fulldose = document.createElement("td");Fulldose.textContent = jsonData.dataVacDose[i].fulldose.toLocaleString('en-US');

		tr.appendChild(City);
		tr.appendChild(Vaccines);
		tr.appendChild(Onedose);
		tr.appendChild(Fulldose);
		tableVNdose.appendChild(tr);
	}
	//Make sure focus max value at first
	setTimeout(()=>{$('#th-citiesProVac').trigger('click');$('#th-citiesProVac').trigger('click');}, 3000);
}
function displayVacDistribution(jsonData){
	tableVNvacDistribution.innerHTML = '';
	for(i=0; i<=62;i++){
		let tr = document.createElement("tr");
		let City = document.createElement("td");City.textContent = jsonData.dataDistribution[i].name;
		let Planned = document.createElement("td");Planned.textContent = jsonData.dataDistribution[i].Planned.toLocaleString('en-US');
		let Realistic = document.createElement("td");Realistic.textContent = jsonData.dataDistribution[i].Realistic.toLocaleString('en-US');
		let DistributedRate = document.createElement("td");DistributedRate.textContent =  formatTailNum(jsonData.dataDistribution[i].DistributedRate) + `%`;
		
		tr.appendChild(City);
		tr.appendChild(Planned);
		tr.appendChild(Realistic);
		tr.appendChild(DistributedRate);
		tableVNvacDistribution.appendChild(tr);
	}
	var totalPlanned = ShorterValue(jsonData.totalDistribution.totalPlanned,2);
	var totalRealistic = ShorterValue(jsonData.totalDistribution.totalRealistic,2);
	var totalDistributedRate = jsonData.totalDistribution.totalDistributedRate;
	displayTotalVacDistribution(totalPlanned,totalRealistic,totalDistributedRate);
	//Make sure focus max value at first
	setTimeout(()=>{$('#th-citiesPlanned').trigger('click');$('#th-citiesPlanned').trigger('click');}, 3000);	
}

async function FetchUsingAsync0(){
    const data = await fetch(API_CityVietnam);
    const jsonData = await data.json();
    return {jsonData};
}
async function displayDailyVietnam(jsonData,label1,label2){
	var dataChart = jsonData.data;
	var dateArray = [];
	var casesArray = [];
	var deathsArray = [];
	var recoveredArray = [];
	var casesArray_New = [];
	var deathsArray_New = [];
	var recoveredArray_New = [];
	const {total} = await(await FetchUsingAsync0()).jsonData;
	
	var hour = new Date().getUTCHours();
	if(hour>=0&&hour<6){
		// For 5 day ago
		m=6;
		for(i=2; i<7; i++){
			var todayDate = new Date(new Date().setDate(new Date().getDate()-m)).toISOString().split("T")[0];
			dateArray.push(todayDate);
			casesArray.push(jsonData.data[i].total_cases);
			deathsArray.push(jsonData.data[i].total_deaths);
			casesArray_New.push(jsonData.data[i].new_cases);
			deathsArray_New.push(jsonData.data[i].new_deaths);
			m-=1;
		}
		// For today
		var todayDate = new Date(new Date().setDate(new Date().getDate()-m)).toISOString().split("T")[0];
		dateArray.push(todayDate);
		casesArray.push(total.totalCases);deathsArray.push(total.totalDeaths);
		casesArray_New.push(total.totalCases-jsonData.data[6].total_cases);
		deathsArray_New.push(total.totalDeaths-jsonData.data[6].total_deaths);
	}
	else{
		// For 5 day ago
		m=5;
		for(i=2; i<7; i++){
			var todayDate = new Date(new Date().setDate(new Date().getDate()-m)).toISOString().split("T")[0];
			dateArray.push(todayDate);
			casesArray.push(jsonData.data[i].total_cases);
			deathsArray.push(jsonData.data[i].total_deaths);
			casesArray_New.push(jsonData.data[i].new_cases);
			deathsArray_New.push(jsonData.data[i].new_deaths);
			m-=1;
		}
		// For today
		var todayDate = new Date(new Date().setDate(new Date().getDate()-m)).toISOString().split("T")[0];
		dateArray.push(todayDate);
		casesArray.push(total.totalCases);deathsArray.push(total.totalDeaths);
		casesArray_New.push(total.totalCases-jsonData.data[6].total_cases);
		deathsArray_New.push(total.totalDeaths-jsonData.data[6].total_deaths);
	}

	createChart(dateArray,casesArray,label1,"#186FB5","casesChart","bar","casesChartDiv");
	createChart(dateArray,deathsArray,label1,"#E41E20","deathsChart","bar","deathsChartDiv");
	createChart(dateArray,casesArray_New,label2,"#186FB5","newcasesChart","line","newcasesChartDiv");
	createChart(dateArray,deathsArray_New,label2,"#E41E20","newdeathsChart","line","newdeathsChartDiv");
}

var population = 98450000;

function displayDailyVaccines(jsonData,label1,label2){
	var dateArray = [];
	var vaccineArray = [];
	var vaccineArray_New = [];
	var lastedUpdateData = jsonData.data.length-1;
	var vaccineData = jsonData.data[lastedUpdateData];
	
	vacTotal = vaccineData.total_vaccinations;
	vacOneDose = vaccineData.people_vaccinated;
	vacTwoDose = vaccineData.people_fully_vaccinated;
	
	document.getElementById("vacTotal").innerHTML = ShorterValue(vacTotal,2);
	document.getElementById("vacOneDose").innerHTML = ShorterValue(vacOneDose,2);
	document.getElementById("vacTwoDose").innerHTML = ShorterValue(vacTwoDose,2);
	document.getElementById("vacFullyVaccinatedRate").innerHTML = parseFloat((vacTwoDose/population)*100).toFixed(2)+`%`;
	
	// Set Zero Until 18h of day
	var hour = new Date().getUTCHours();
	if(hour>=0&&hour<17){
		// For 5 day ago
		m=5;
		for(i=lastedUpdateData-4; i<=lastedUpdateData; i++){
			var todayDate = new Date(new Date().setDate(new Date().getDate()-m)).toISOString().split("T")[0];
			dateArray.push(todayDate);
			vaccineArray.push(jsonData.data[i].total_vaccinations);
			vaccineArray_New.push(jsonData.data[i].total_vaccinations - jsonData.data[i-1].total_vaccinations);
			m-=1;
		}
		// For today
		var todayDate = new Date(new Date().setDate(new Date().getUTCDate()-0)).toISOString().split("T")[0];
		dateArray.push(todayDate);
		vaccineArray.push(jsonData.data[lastedUpdateData].total_vaccinations);
		vaccineArray_New.push(0);
		m-=1;
	}
	else{
		// For real data
		m=6;
		for(i=lastedUpdateData-5; i<=lastedUpdateData; i++){
			var todayDate = new Date(new Date().setDate(new Date().getDate()-m)).toISOString().split("T")[0];
			dateArray.push(todayDate);
			vaccineArray.push(jsonData.data[i].total_vaccinations);
			vaccineArray_New.push(jsonData.data[i].total_vaccinations - jsonData.data[i-1].total_vaccinations);
			m-=1;
		}
	}
	createChart(dateArray,vaccineArray,label1,"#666666","vaccineChart","bar","vaccineChartDiv");
	createChart(dateArray,vaccineArray_New,label2,"#666666","newvaccineChart","line","newvaccineChartDiv");
}
function displayDailyCityProvince(jsonData,label1,label2){
	var dateArray = [];
	var hcmArray = [];
	var hcmArray_New = [];
	var lengthData = jsonData.data.data.length-1;
	
	// Set Zero Until 12h of day
	var hour = new Date().getUTCHours();
	if(hour>=0&&hour<11){
		// For 5 day ago
		m=5;
		for(i=lengthData-4;i<=lengthData;i++){
			var todayDate = new Date(new Date().setDate(new Date().getUTCDate()-m)).toISOString().split("T")[0];
			dateArray.push(todayDate);
			hcmArray.push(jsonData.data.data[i].total.replaceAll(".",""));
			hcmArray_New.push(jsonData.data.data[i].daily.replaceAll(".",""));
			m-=1;
		}
		// For today set Zero
		var todayDate = new Date(new Date().setDate(new Date().getUTCDate()-m)).toISOString().split("T")[0];
		dateArray.push(todayDate);
		hcmArray.push(jsonData.data.data[lengthData].total.replaceAll(".",""));
		hcmArray_New.push(0);
	}
	else{
		// For real data
		for(i=lengthData-5;i<=lengthData;i++){
			dateArray.push(jsonData.data.data[i].date);
			hcmArray.push(jsonData.data.data[i].total.replaceAll(".",""));
			hcmArray_New.push(jsonData.data.data[i].daily.replaceAll(".",""));
		}
	}
	createChart(dateArray,hcmArray,label1,"#186FB5","casesChartCityProvince","bar","casesChartCityProvinceDiv");
	createChart(dateArray,hcmArray_New,label2,"#186FB5","newcasesChartCityProvince","line","newcasesChartCityProvinceDiv");
}

function displayTotalVN(TotalCases,TotalRecovered,TotalDeaths){
	document.getElementById("TotalCases").innerHTML      = parseInt(TotalCases).toLocaleString('en-US');
	document.getElementById("TotalRecovered").innerHTML  = parseInt(TotalRecovered).toLocaleString('en-US');
	document.getElementById("TotalDeaths").innerHTML     = parseInt(TotalDeaths).toLocaleString('en-US');
}
function displayTotalVN_Population(Population){document.getElementById("Population").innerHTML = ShorterValue(Population,2);}

function displayRate(totalCases,totalRecovered,totalDeaths){
	var incidenceRate = parseFloat((parseInt(totalCases)/(population))*100).toFixed(2)+`%`;
	var recoveryRate  = parseFloat((parseInt(totalRecovered)/totalCases)*100).toFixed(2)+`%`;
	var deathRate     = parseFloat((parseInt(totalDeaths)/totalCases)*100).toFixed(2)+`%`;
	
	document.getElementById("IncidenceRate").innerHTML = incidenceRate;
	document.getElementById("RecoveryRate").innerHTML  = recoveryRate;
	document.getElementById("DeathRate").innerHTML     = deathRate;
}
function displayTotalVacDistribution(totalPlanned,totalRealistic,totalDistributedRate){
	document.getElementById("totalPlanned").innerHTML = totalPlanned.toLocaleString('en-US');
	document.getElementById("totalRealistic").innerHTML = totalRealistic.toLocaleString('en-US');
	document.getElementById("totalDistriRate").innerHTML = totalDistributedRate + `%`;
}
function NationalDailyBtn(){
	document.getElementById("National").style.display = "block";
	document.getElementById("CityProvince").style.display = "none";
	document.getElementById("NationalDailyBtn").style.backgroundColor = "#ddd";
	document.getElementById("MostInterest").style.backgroundColor = "#f1f2f5";
}
function CityProvinceDaily(){
	document.getElementById("CityProvince").style.display = "block";
	document.getElementById("National").style.display = "none";
	document.getElementById("MostInterest").style.backgroundColor = "#ddd";
	document.getElementById("NationalDailyBtn").style.backgroundColor = "#f1f2f5";
}


// Handle Error
function unDisplayChart(){document.getElementById("AllChart").style.display="none";}
function ForEr(){
	document.getElementById("message").style.display="block";
	document.getElementById("content-total").style.display="none";
	document.getElementById("content-detail").style.display="none";
}

// Create Chart
function createChart(dateArray, dataArray, name, color, idChart, type, idChartDiv){
	document.getElementById(idChartDiv).innerHTML = `<canvas id="`+idChart+`" width="400" height="250" class="chart"></canvas></div>`
	var data = {labels: dateArray,datasets:[{
			barPercentage: 0.25,
			label: name,
			backgroundColor: color,
			borderColor: color,
			data: dataArray,
		}]
	};
    var config = {type:type,data,options:{tension: 0.3}};
	var myChart = new Chart(document.getElementById(idChart),config);
}

// Update data every 15 mins
setInterval(()=>{getDataVNCity();getDataVNDetailVaccine();},(1000*60*15));

// -----
// END
// -----


