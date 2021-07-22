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

// Init
let tableVN;
window.addEventListener('load',() => {
	tableVN = document.getElementById("tableVN");
	getDataCity();
	getDataChart();
});

// Get Data City 
async function getDataCity(){
	tableVN.innerHTML = '';
	fetch(API_City)
		.then(data => data.json())
		.then(jsonData => {
			for(i=0; i<=62;i++){
				let tr = document.createElement("tr");
				let City = document.createElement("td");City.textContent = jsonData.data[i].name;
				let Cases = document.createElement("td");Cases.textContent = jsonData.data[i].cases.replace(".",",");
				let Recovered = document.createElement("td");Recovered.textContent = jsonData.data[i].recovered.replace(".",",");
				let Deaths = document.createElement("td");Deaths.textContent = jsonData.data[i].deaths.replace(".",",");
				
				tr.appendChild(City);
				tr.appendChild(Cases);
				tr.appendChild(Recovered);
				tr.appendChild(Deaths);
				tableVN.appendChild(tr);
			}
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
			
			for(i=6; i>=0; i--){
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


// Update data every 15 mins
setInterval(()=>{getDataCity();getDataChart();},(1000*60*15));

// -----
// END
// -----


