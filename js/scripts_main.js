// -----------------------------------------------
// COVID19 TRACKER
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------


// Init
const API_Global    = "https://api.covid19api.com/summary";
const API_Countries = "https://corona.lmao.ninja/v2/countries";
let table;

window.addEventListener('load',() => {
	table = document.getElementById("table");
	Global_FetchAndDrawChart();
	Countries_Fetch();
	AboutData();
});


// Display
function displayData(jsonData){
	table.innerHTML = '';
	jsonData.forEach(u => {
		let tr = document.createElement('tr');
		let td0 = document.createElement('td');
		let td1 = document.createElement('td');
		let td2 = document.createElement('td');
		let td3 = document.createElement('td');
		let td4 = document.createElement('td');
		let td5 = document.createElement('td');

		td0.innerHTML = `<img class="flagCountry" src="`+u.countryInfo.flag+`">`;
		td1.innerHTML = u.country;
		td2.innerHTML = u.cases.toLocaleString('en-US')+`<br><span>+`+u.todayCases.toLocaleString('en-US')+`</span>`; //Commas thousands
		td3.innerHTML = u.recovered.toLocaleString('en-US')+`<br><span>+`+u.todayRecovered.toLocaleString('en-US')+`</span>`;
		td4.innerHTML = u.deaths.toLocaleString('en-US')+`<br><span>+`+u.todayDeaths.toLocaleString('en-US')+`</span>`;
		td5.innerHTML = u.tests.toLocaleString('en-US');
		
		tr.appendChild(td0);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		table.appendChild(tr);
		
		// Custom Rate in Vietnam
		if(u.country == "Vietnam"){
			var totalCases     = u.cases;
			var totalRecovered = u.recovered;
			var totalDeaths    = u.deaths;
			var Population     = u.population;
			
			var incidenceRate = parseFloat((totalCases/Population)*100).toFixed(2)+`%`;
			var recoveryRate  = parseFloat((totalRecovered/totalCases)*100).toFixed(2)+`%`;
			var deathRate     = parseFloat((totalDeaths/totalCases)*100).toFixed(2)+`%`;
			displayTotal(totalCases,totalRecovered,totalDeaths,ShorterNum(Population));
			displayRate(incidenceRate,recoveryRate,deathRate);
		}
	});
}
function displayTotal(TotalCases,TotalRecovered,TotalDeaths,Population){
	document.getElementById("TotalCases").innerHTML      = TotalCases.toLocaleString('en-US');
	document.getElementById("TotalRecovered").innerHTML  = TotalRecovered.toLocaleString('en-US');
	document.getElementById("TotalDeaths").innerHTML     = TotalDeaths.toLocaleString('en-US');
	document.getElementById("Population").innerHTML      = Population;
}
function displayRate(incidenceRate,recoveryRate,deathRate){
	document.getElementById("IncidenceRate").innerHTML = incidenceRate;
	document.getElementById("RecoveryRate").innerHTML  = recoveryRate;
	document.getElementById("DeathRate").innerHTML     = deathRate;
}


// ---------
// Load Data
// ---------

// Fetch and Draw Chart
function Global_FetchAndDrawChart(){
	fetch(API_Global)
		.then(data => data.json())
		.then(jsonData => {
			anychart.onDocumentReady(function() {
				var data = {header: ["Name", "Number"],
				rows:[
					["Cases", jsonData.Global.TotalConfirmed],
					["Recovered", jsonData.Global.TotalRecovered],
					["Deaths", jsonData.Global.TotalDeaths],
				]};
				var chart = anychart.bar();
				anychart.theme(anychart.themes.darkTurquoise);chart.data(data);
				chart.title("COVID-19 DATA IN GLOBAL");
				chart.yScale().ticks().interval(50000);chart.yScale().minorTicks().interval(10000);
				chart.padding().right("60px");
				chart.yAxis().labels().format("{%value}{groupsSeparator:.}");
				chart.yGrid().enabled(true);chart.yMinorGrid().enabled(true);
				chart.background().cornerType("round");chart.background().corners(10);
				chart.animation(true);chart.container("global");chart.draw();
			});
			// Hide Loading after display success
			document.getElementById("loader").style.display = "none";
		})
		.catch(e => console.log(e));
}
// Fetch
function Countries_Fetch(){
	fetch(API_Countries) /* [Promise] Method */
		.then(data => data.json())
		.then(jsonData => {displayData(jsonData);})
		.catch(e => console.log(e));
}
// AJAX
function Countries_Ajax(){
	let xmlHttpRequest = new XMLHttpRequest();
	xmlHttpRequest.addEventListener('load',e => {
		if(xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200){
			let jsonData = xmlHttpRequest.response;
			displayData(jsonData);
		}else{console.log(e);}
	});
	xmlHttpRequest.open('GET',API_Countries,true);
	xmlHttpRequest.responseType = 'json';
	xmlHttpRequest.send();
}
// Load data in MoreAbout
function AboutData(){
	fetch("./lang/en.json")
		.then(data => data.json())
		.then(dataEN => {
			document.getElementById("nameAbData").textContent = dataEN.AboutTheData.title;
			document.getElementById("aboutTheData").innerHTML = dataEN.AboutTheData.content;
			document.getElementById("nameVaccine").textContent = dataEN.AboutTheVaccine.title;
			document.getElementById("aboutTheVaccine").innerHTML = dataEN.AboutTheVaccine.content;
		}).catch(e => console.log(e));
}


// Shorter Num
function ShorterNum(num) {
    var units = ["M"]
    var unit = Math.floor((num / 1.0e+1).toFixed(0).toString().length)
    var r = unit%3
    var x =  Math.abs(Number(num))/Number('1.0e+'+(unit-r)).toFixed(2)
    return x.toFixed(0) + units[Math.floor(unit/3)-2]
}

// DateTime
function Zero(num) {return (num >= 0 && num < 10) ? "0" + num : num + "";}
setInterval(()=>{
    var now = new Date();
    var strDateTime = [[Zero(now.getDate()), 
        Zero(now.getMonth() + 1), now.getFullYear()].join("/"), 
        [Zero(now.getHours()),Zero(now.getMinutes())].join(":"), 
        now.getHours() >= 12 ? "PM" : "AM"].join(" ");
    document.getElementById("time").innerHTML = strDateTime;
},1000);


// Update data every 15 mins
setInterval(()=>{Countries_Ajax();},(1000*60*15));

//------
// END
//------



