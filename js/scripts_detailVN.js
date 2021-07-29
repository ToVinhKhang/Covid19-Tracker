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

// Init
let tableVN;
let tableVNdose;
let tableVNvacDistribution;
window.addEventListener('load',() => {
	tableVN = document.getElementById("tableVN");
	tableVNdose = document.getElementById("tableVNdose");
	tableVNvacDistribution = document.getElementById("tableVNvacDistribution");
	getDataCity();
	getDataDetailVaccine();
	getDataDailyVietnam();
});


//---------
// GET DATA
//---------
// Get Data City 
function getDataCity(){
	tableVN.innerHTML = '';
	fetch(API_CityVietnam)
		.then(data => data.json())
		.then(jsonData => {displayCity(jsonData);})
		.catch(err => {ForEr();console.error(err);});
}

// Get Data Detail Vaccine 
function getDataDetailVaccine(){
	fetch(API_DetailVaccine)
		.then(data => data.json())
		.then(jsonData => {displayVacDose(jsonData);displayVacDistribution(jsonData);})
		.catch(err => {ForEr();console.error(err);});
}
// Get Data DailyVietnam
function getDataDailyVietnam(){
	fetch(API_DailyVietnam)
		.then(data => data.json())
		.then(jsonData => {displayDailyVietnam(jsonData);})
		.catch(err => {console.error(err);unDisplayChart();});
}
// Get Data Daily Vaccines
function getDataDailyVaccines(Population){
	fetch(API_DailyVaccines)
		.then(data => data.json())
		.then(jsonData => {displayDailyVaccines(jsonData,Population);})
		.catch(e => {console.log(e);unDisplayChart();});
}


//---------
// Display
//---------
function displayCity(jsonData){
	for(i=0; i<=62;i++){
		let tr = document.createElement("tr");
		let City = document.createElement("td");City.textContent = jsonData.detail[i].name.replace("- ","");
		let Cases = document.createElement("td");Cases.textContent = jsonData.detail[i].cases.toLocaleString('en-US');
		let Recovered = document.createElement("td");Recovered.textContent = jsonData.detail[i].recovered.toLocaleString('en-US');
		let Deaths = document.createElement("td");Deaths.textContent = jsonData.detail[i].deaths.toLocaleString('en-US');
		
		tr.appendChild(City);
		tr.appendChild(Cases);
		tr.appendChild(Recovered);
		tr.appendChild(Deaths);
		tableVN.appendChild(tr);
	}
	displayTotalVN(jsonData.total.totalCases,jsonData.total.totalRecovered,jsonData.total.totalDeaths);
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
	var totalPlanned = ShorterValue(jsonData.totalDistribution.totalPlanned);
	var totalRealistic = ShorterValue(jsonData.totalDistribution.totalRealistic);
	var totalDistributedRate = jsonData.totalDistribution.totalDistributedRate;
	displayTotalVacDistribution(totalPlanned,totalRealistic,totalDistributedRate);
	//Make sure focus max value at first
	setTimeout(()=>{$('#th-citiesPlanned').trigger('click');$('#th-citiesPlanned').trigger('click');}, 3000);	
}

function displayDailyVietnam(jsonData){
	var dataChart = jsonData.data;
	var dateArray = [];
	var casesArray = [];
	var deathsArray = [];
	var recoveredArray = [];
	var casesArray_New = [];
	var deathsArray_New = [];
	var recoveredArray_New = [];
	
	const MapJsonData = Object.entries(dataChart).map(([date, detail]) => ({date,detail,}));
	const {date,detail: {total_cases,recovered,deaths},} = MapJsonData[0];
	const MapJsonData_Week = Object.entries(dataChart).map(([date, detail]) => ({date,detail,}));
	
	for(i=6; i>0; i--){
		var dataChart_Date = MapJsonData_Week[i].date;
		var dataChart_Detail = MapJsonData_Week[i].detail;
		var dataChart_Yesterday = MapJsonData_Week[i+1].detail;
		
		dateArray.push(dataChart_Date);
		casesArray.push(dataChart_Detail.total_cases);
		recoveredArray.push(dataChart_Detail.recovered);
		deathsArray.push(dataChart_Detail.deaths);

		casesArray_New.push(Math.abs(dataChart_Detail.total_cases - dataChart_Yesterday.total_cases));
		recoveredArray_New.push(Math.abs(dataChart_Detail.recovered - dataChart_Yesterday.recovered));
		deathsArray_New.push(Math.abs(dataChart_Detail.deaths - dataChart_Yesterday.deaths));
	}
	createChart(dateArray,casesArray,"Total Cases","#186FB5","casesChart");
	createChart(dateArray,recoveredArray,"Total Recovered","#006233","recoveredChart");
	createChart(dateArray,deathsArray,"Total Deaths","#E41E20","deathsChart");
	createChart(dateArray,casesArray_New,"New Cases","#186FB5","newcasesChart");
	createChart(dateArray,recoveredArray_New,"New Recovered","#006233","newrecoveredChart");
	createChart(dateArray,deathsArray_New,"New Deaths","#E41E20","newdeathsChart");
}
function displayDailyVaccines(jsonData,Population){
	var dateArray = [];
	var vaccineArray = [];
	var vaccineArray_New = [];
	var lastedUpdateData = jsonData.data.length-1;
	var vaccineData = jsonData.data[lastedUpdateData];
	
	vacTotal = vaccineData.total_vaccinations;
	vacOneDose = vaccineData.people_vaccinated;
	vacTwoDose = vaccineData.people_fully_vaccinated;
	
	document.getElementById("vacTotal").innerHTML = ShorterValue(vacTotal);
	document.getElementById("vacOneDose").innerHTML = ShorterValue(vacOneDose);
	document.getElementById("vacTwoDose").innerHTML = ShorterValue(vacTwoDose);
	document.getElementById("vacFullyVaccinatedRate").innerHTML = parseFloat((vacTwoDose/Population)*100).toFixed(2)+`%`;
	
	for(i=lastedUpdateData-5; i<=lastedUpdateData; i++){
		dateArray.push(jsonData.data[i].date);
		vaccineArray.push(jsonData.data[i].total_vaccinations);
		vaccineArray_New.push(jsonData.data[i].total_vaccinations - jsonData.data[i-1].total_vaccinations);
	}
	createChart(dateArray,vaccineArray,"Total Dose Vaccinated","#666666","vaccineChart");
	createChart(dateArray,vaccineArray_New,"New Dose Vaccinated","#666666","newvaccineChart");
}
function displayTotalVN(TotalCases,TotalRecovered,TotalDeaths){
	document.getElementById("TotalCases").innerHTML      = TotalCases.toLocaleString('en-US');
	document.getElementById("TotalRecovered").innerHTML  = TotalRecovered.toLocaleString('en-US');
	document.getElementById("TotalDeaths").innerHTML     = TotalDeaths.toLocaleString('en-US');
}
function displayTotalVacDistribution(totalPlanned,totalRealistic,totalDistributedRate){
	document.getElementById("totalPlanned").innerHTML = totalPlanned.toLocaleString('en-US');
	document.getElementById("totalRealistic").innerHTML = totalRealistic.toLocaleString('en-US');
	document.getElementById("totalDistriRate").innerHTML = totalDistributedRate + `%`;
}

// Handle Error
function unDisplayChart(){
	document.getElementById("AllChart").style.display="none";
}
function ForEr(){
	document.getElementById("message").style.display="block";
	document.getElementById("content-total").style.display="none";
	document.getElementById("content-detail").style.display="none";
	document.getElementById("footer").style.display="none";
}



// Create Chart
function createChart(dateArray, dataArray, name, color, idChart){
	var targetChart = document.getElementById(idChart);
    var data = {labels: dateArray,datasets:[{
			barPercentage: 0.25,
			label: name,
			backgroundColor: color,
			borderColor: color,
			data: dataArray,
		}]
	};
    var config = {type:'line',data,options:{tension: 0.3}};
	var myChart = new Chart(document.getElementById(idChart),config);
}

// Update data every 15 mins
setInterval(()=>{getDataCity();getDataDetailVaccine();},(1000*60*15));

// -----
// END
// -----


