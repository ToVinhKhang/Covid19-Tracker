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
const API_City  = "https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST";
const API_HcKey = "https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST";

// Get Data City 
async function getDataCity(){
	var {detail} = await(await fetch(API_City)).json();
    var {key}    = await(await fetch(API_HcKey)).json();
	
    for(let i=0; i<detail.length; i++){
		var tr = document.createElement("tr");
		var name = key.find(k => k["hec-key"] == detail[i]["hc-key"]);
		
        if(name){
			var City = document.createElement("td");City.textContent = ConvertString(name.name);
            var Cases = document.createElement("td");Cases.textContent = detail[i].value;
            var Recovered = document.createElement("td");Recovered.textContent = detail[i].socakhoi;
            var Deaths = document.createElement("td");Deaths.textContent = detail[i].socatuvong;
			
            tr.appendChild(City);
            tr.appendChild(Cases);
            tr.appendChild(Recovered);
            tr.appendChild(Deaths);
            document.getElementById("tableVN").appendChild(tr)
        }
    }
}
// Get Data Chart
function getDataChart(){
	fetch(API_Chart, {"method": "GET","headers": {"x-rapidapi-key": rapidApi_Key,"x-rapidapi-host": rapidApi_Host}})
	.then(data => data.json())
	.then(jsonData => {
		var dataChart = jsonData.data;
		var dateArray = [];
		var casesArray = [];
		var deathsArray = [];
		var recoveredArray = [];
		
		const MapJsonData = Object.entries(dataChart).map(([date, detail]) => ({date,detail,}));
        const {date,detail: {total_cases,recovered,deaths},} = MapJsonData[0];
        const MapJsonData_Week = Object.entries(dataChart).map(([date, detail]) => ({date,detail,}));
		
		for(i=7; i>=0; i--){
			var dataChart_Date = MapJsonData_Week[i].date;
			var dataChart_Detail = MapJsonData_Week[i].detail;
			
			dateArray.push(dataChart_Date);
			casesArray.push(dataChart_Detail.total_cases);
			recoveredArray.push(dataChart_Detail.recovered);
			deathsArray.push(dataChart_Detail.deaths);
		}
		createChart(dateArray,casesArray,"Cases","#186FB5","casesChart");
		createChart(dateArray,recoveredArray,"Recovered","#006233","recoveredChart");
		createChart(dateArray,deathsArray,"Deaths","#E41E20","deathsChart");
	})
	.catch(err => {console.error(err);});
}

// Some Support Functions
function createChart(dateArray, dataArray, name, color, idChart){
    var data = {labels: dateArray, 
		datasets:[{
			label: name,
			backgroundColor: color,
			borderColor: color,
			data: dataArray,
		}]
	};
    var config = {type:'line',data,options:{tension: 0.3}};
    var myChart = new Chart(document.getElementById(idChart),config);
}
function ConvertString(s){var string = "";
	s.split("-").forEach(t => {
		string += CapitalizeString(t);
		string += " ";
	});
	return string.trim();
}
function CapitalizeString(s){return s.charAt(0).toUpperCase()+s.slice(1);}

// Display
getDataCity();
getDataChart();
	



// -----
// END
// -----


