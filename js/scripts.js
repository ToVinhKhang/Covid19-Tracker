// -----------------------------------------------
// COVID19 TRACKER
// Demo Load data by Fetch & AJAX
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
	timeDataUpdated();
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
	});
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
			  chart.title("THE SITUATION OF COVID-19 IN GLOBAL");
			  chart.yScale().ticks().interval(500000);chart.yScale().minorTicks().interval(100000);
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
function timeDataUpdated(){var secs = 0;
    setInterval(()=>{secs++; mins = parseInt(secs/60,10);
		if(secs <= 60){document.getElementById("minutes").innerHTML = "Data Updated: 1 minute ago";}
		if(secs > 60){document.getElementById("minutes").innerHTML = "Data Updated: " + mins + " minutes ago";}
		if(mins == 15){secs = 0;}
    },1000);
}
setInterval(()=>{Countries_Ajax();timeDataUpdated();},(1000*60*15));

//------
// END
//------



