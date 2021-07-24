// -----------------------------------------------
// COVID19 VIETNAM TRACKER
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

//----------
// 	API
//----------

// API for DailyVietnam
const API_DailyVietnam = "https://coronavirus-map.p.rapidapi.com/v1/spots/week?region=vietnam";
const rapidApi_Key  = "e31e70a2c1msh591d8f2e6b09477p127223jsn35e5e23857d4";
const rapidApi_Host = "coronavirus-map.p.rapidapi.com";

// API for City
const API_City  = "https://tovinhkhang.github.io/API/data/VNCityData.json";

// API for Detail Vaccine 
const API_DetailVaccine = "https://tovinhkhang.github.io/API/data/VNVaccineData.json";

// Init
let tableVN;
let tableVNdose;
let tableVNvacType;
window.addEventListener('load',() => {
	tableVN = document.getElementById("tableVN");
	tableVNdose = document.getElementById("tableVNdose");
	tableVNvacType = document.getElementById("tableVNvacType");
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
	fetch(API_City)
		.then(data => data.json())
		.then(jsonData => {
			displayCity(jsonData);
		})
		.catch(err => {console.error(err);});
}

// Get Data Detail Vaccine 
function getDataDetailVaccine(){
	fetch(API_DetailVaccine)
		.then(data => data.json())
		.then(jsonData => {
			displayVacDose(jsonData);
			displayVacType(jsonData);
		})
		.catch(err => {console.error(err);});
}
// Get Data DailyVietnam
function getDataDailyVietnam(){
	fetch(API_DailyVietnam, {"method": "GET","headers": {"x-rapidapi-key": rapidApi_Key,"x-rapidapi-host": rapidApi_Host}})
		.then(data => data.json())
		.then(jsonData => {
			displayDailyVietnam(jsonData);
		})
		.catch(err => {console.error(err);});
}


//---------
// Display
//---------
function displayCity(jsonData){
	for(i=0; i<=61;i++){
		let tr = document.createElement("tr");
		let City = document.createElement("td");City.textContent = jsonData.detail[i].name;
		let Cases = document.createElement("td");Cases.textContent = jsonData.detail[i].cases;
		let Recovered = document.createElement("td");Recovered.textContent = jsonData.detail[i].recovered;
		let Deaths = document.createElement("td");Deaths.textContent = jsonData.detail[i].deaths;
		
		tr.appendChild(City);
		tr.appendChild(Cases);
		tr.appendChild(Recovered);
		tr.appendChild(Deaths);
		tableVN.appendChild(tr);
	}
	displayTotalVN(jsonData.total.totalCases,jsonData.total.totalRecovered,jsonData.total.totalDeaths,jsonData.lastUpdated);
	//Make sure focus max value at first
	setTimeout(()=>{$('#th-citiesCases').trigger('click');$('#th-citiesCases').trigger('click');}, 2000);	
}
function displayVacDose(jsonData){
	tableVNdose.innerHTML = '';
	for(i=0; i<=62;i++){
		let tr = document.createElement("tr");
		let City = document.createElement("td");City.textContent = jsonData.dataVacDose[i].name;
		let Vaccines = document.createElement("td");Vaccines.textContent = jsonData.dataVacDose[i].vaccines;
		let Onedose = document.createElement("td");Onedose.textContent = jsonData.dataVacDose[i].onedose;
		let Fulldose = document.createElement("td");Fulldose.textContent = jsonData.dataVacDose[i].fulldose;

		tr.appendChild(City);
		tr.appendChild(Vaccines);
		tr.appendChild(Onedose);
		tr.appendChild(Fulldose);
		tableVNdose.appendChild(tr);
	}
	//Make sure focus max value at first
	setTimeout(()=>{$('#th-citiesProVac').trigger('click');$('#th-citiesProVac').trigger('click');}, 2000);
}
function displayVacType(jsonData){
	tableVNvacType.innerHTML = '';
	for(i=0; i<=62;i++){
		let tr = document.createElement("tr");
		let City = document.createElement("td");City.textContent = jsonData.dataVacType[i].name;
		let AstraZ = document.createElement("td");AstraZ.textContent = parseInt(jsonData.dataVacType[i].astraz).toLocaleString('en-US');
		let Pfizer = document.createElement("td");Pfizer.textContent = parseInt(jsonData.dataVacType[i].pfizer).toLocaleString('en-US');
		let Moderna = document.createElement("td");Moderna.textContent = parseInt(jsonData.dataVacType[i].moderna).toLocaleString('en-US');
		
		tr.appendChild(City);
		tr.appendChild(AstraZ);
		tr.appendChild(Pfizer);
		tr.appendChild(Moderna);
		tableVNvacType.appendChild(tr);
	}
	displayTotalVacType(jsonData.totalVacType.totalAstraZ,jsonData.totalVacType.totalPfizer,jsonData.totalVacType.totalModerna);
	//Make sure focus max value at first
	setTimeout(()=>{$('#th-citiesAstraZ').trigger('click');$('#th-citiesAstraZ').trigger('click');}, 2000);	
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
function displayTotalVN(TotalCases,TotalRecovered,TotalDeaths,LastUpdated){
	document.getElementById("TotalCases").innerHTML      = TotalCases.toLocaleString('en-US');
	document.getElementById("TotalRecovered").innerHTML  = TotalRecovered.toLocaleString('en-US');
	document.getElementById("TotalDeaths").innerHTML     = TotalDeaths.toLocaleString('en-US');
	document.getElementById("LastUpdated").innerHTML     = "(Last Updated: "+LastUpdated+")";
}
function displayTotalVacType(totalAstraZ,totalPfizer,totalModerna){
	document.getElementById("totalAstraZ").innerHTML = totalAstraZ.toLocaleString('en-US');
	document.getElementById("totalPfizer").innerHTML = totalPfizer.toLocaleString('en-US');
	document.getElementById("totalModerna").innerHTML = totalModerna.toLocaleString('en-US');
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
setInterval(()=>{getDataCity();getDataDetailVaccine();getDataDailyVietnam();},(1000*60*15));

// -----
// END
// -----


