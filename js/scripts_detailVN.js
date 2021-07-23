// -----------------------------------------------
// COVID19 VIETNAM TRACKER
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

// API for Chart
const API_Chart = "https://coronavirus-map.p.rapidapi.com/v1/spots/week?region=vietnam";
const rapidApi_Key  = "e31e70a2c1msh591d8f2e6b09477p127223jsn35e5e23857d4";
const rapidApi_Host = "coronavirus-map.p.rapidapi.com";

// API for City
const API_City  = "https://tovinhkhang.github.io/API/data/VNCityData.json";

// API for Dose Vaccine 
const API_Dose = "https://tovinhkhang.github.io/API/data/VNVaccineData.json";

// API for Vaccine Type
const API_VacType = "https://tovinhkhang.github.io/API/data/VNVacTypeData.json";

// Init
let tableVN;
let tableVNdose;
let tableVNvacType;
window.addEventListener('load',() => {
	tableVN = document.getElementById("tableVN");
	tableVNdose = document.getElementById("tableVNdose");
	tableVNvacType = document.getElementById("tableVNvacType");
	getDataCity();
	getDataDose();
	getDataVacType();
	getDataChart();
});

// Get Data City 
function getDataCity(){
	tableVN.innerHTML = '';
	fetch(API_City)
		.then(data => data.json())
		.then(jsonData => {
			var totalCases = 0;
			var totalRecovered = 0;
			var totalDeaths = 0;
			for(i=0; i<=62;i++){
				let tr = document.createElement("tr");
				let City = document.createElement("td");City.textContent = jsonData.data[i].name.replace("TP. ","");
				let Cases = document.createElement("td");Cases.textContent = jsonData.data[i].cases.replace(".",",");
				let Recovered = document.createElement("td");Recovered.textContent = jsonData.data[i].recovered.replace(".",",");
				let Deaths = document.createElement("td");Deaths.textContent = jsonData.data[i].deaths.replace(".",",");
				
				
				totalCases += parseInt(jsonData.data[i].cases.replace(".",""));
				totalRecovered += parseInt(jsonData.data[i].recovered.replace(".",""));
				totalDeaths += parseInt(jsonData.data[i].deaths.replace(".",""));
				
				tr.appendChild(City);
				tr.appendChild(Cases);
				tr.appendChild(Recovered);
				tr.appendChild(Deaths);
				tableVN.appendChild(tr);
			}
			displayTotalVN(totalCases,totalRecovered,totalDeaths);
			//Make sure focus max value at first
			setTimeout(()=>{$('#th-citiesCases').trigger('click');$('#th-citiesCases').trigger('click');}, 2000);	
		})
		.catch(err => {console.error(err);});
}

// Get Data Dose Vaccine 
function getDataDose(){
	tableVNdose.innerHTML = '';
	fetch(API_Dose)
		.then(data => data.json())
		.then(jsonData => {
			for(i=0; i<=62;i++){
				let tr = document.createElement("tr");
				let City = document.createElement("td");City.textContent = jsonData.data[i].name;
				let Vaccines = document.createElement("td");Vaccines.textContent = jsonData.data[i].vaccines;
				let Onedose = document.createElement("td");Onedose.textContent = jsonData.data[i].onedose;
				let Fulldose = document.createElement("td");Fulldose.textContent = jsonData.data[i].fulldose;

				tr.appendChild(City);
				tr.appendChild(Vaccines);
				tr.appendChild(Onedose);
				tr.appendChild(Fulldose);
				tableVNdose.appendChild(tr);
			}
			//Make sure focus max value at first
			setTimeout(()=>{$('#th-citiesProVac').trigger('click');$('#th-citiesProVac').trigger('click');}, 2000);	
		})
		.catch(err => {console.error(err);});
}

// Get Data Vaccine Type
function getDataVacType(){
	tableVNvacType.innerHTML = '';
	fetch(API_VacType)
		.then(data => data.json())
		.then(jsonData => {
			var totalAstraZ = 0;
			var totalPfizer = 0;
			var totalModerna = 0;
			for(i=0; i<=62;i++){
				let tr = document.createElement("tr");
				let City = document.createElement("td");City.textContent = jsonData.data[i].name;
				let AstraZ = document.createElement("td");AstraZ.textContent = parseInt(jsonData.data[i].astraz).toLocaleString('en-US');
				let Pfizer = document.createElement("td");Pfizer.textContent = parseInt(jsonData.data[i].pfizer).toLocaleString('en-US');
				let Moderna = document.createElement("td");Moderna.textContent = parseInt(jsonData.data[i].moderna).toLocaleString('en-US');

				totalAstraZ += parseInt(jsonData.data[i].astraz);
				totalPfizer += parseInt(jsonData.data[i].pfizer);
				totalModerna += parseInt(jsonData.data[i].moderna);
				
				tr.appendChild(City);
				tr.appendChild(AstraZ);
				tr.appendChild(Pfizer);
				tr.appendChild(Moderna);
				tableVNvacType.appendChild(tr);
			}
			displayTotalVacType(totalAstraZ,totalPfizer,totalModerna);
			//Make sure focus max value at first
			setTimeout(()=>{$('#th-citiesAstraZ').trigger('click');$('#th-citiesAstraZ').trigger('click');}, 2000);	
		})
		.catch(err => {console.error(err);});
}

// Get Data Chart
function getDataChart(){
	fetch(API_Chart, {"method": "GET","headers": {"x-rapidapi-key": rapidApi_Key,"x-rapidapi-host": rapidApi_Host}})
		.then(data => data.json())
		.then(jsonData => {var dataChart = jsonData.data;
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
		})
		.catch(err => {console.error(err);});
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

function displayTotalVN(TotalCases,TotalRecovered,TotalDeaths){
	document.getElementById("TotalCases").innerHTML      = TotalCases.toLocaleString('en-US');
	document.getElementById("TotalRecovered").innerHTML  = TotalRecovered.toLocaleString('en-US');
	document.getElementById("TotalDeaths").innerHTML     = TotalDeaths.toLocaleString('en-US');
}
function displayTotalVacType(totalAstraZ,totalPfizer,totalModerna){
	document.getElementById("totalAstraZ").innerHTML = totalAstraZ.toLocaleString('en-US');
	document.getElementById("totalPfizer").innerHTML = totalPfizer.toLocaleString('en-US');
	document.getElementById("totalModerna").innerHTML = totalModerna.toLocaleString('en-US');
}

// Update data every 15 mins
setInterval(()=>{getDataCity();getDataChart();getDataDose();},(1000*60*15));

// -----
// END
// -----


