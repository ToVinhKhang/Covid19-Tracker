// -----------------------------------------------
// COVID19 TRACKER
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

//----------
// 	API
//----------

// API for GlobalCountries
const API_GlobalCountries = "https://corona.lmao.ninja/v2/countries";

// API for Daily Vaccines
const API_DailyVaccines = "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json";

// Init
let table;
window.addEventListener('load',() => {
	table = document.getElementById("table");
	getDataGlobal();
	loadDataPopupAtFirst();
});


//----------
// Get Data
//----------

// Get Data Global
function getDataGlobal(){
	fetch(API_GlobalCountries)
		.then(data => data.json())
		.then(jsonData => {displayDataGlobal(jsonData);
			document.getElementById("loader").style.display = "none";
			document.getElementById("global").style.display = "block";
			document.getElementById("footer").style.display = "block";
		})
		.catch(e => console.log(e));
}
function loadDataPopupAtFirst(){
	fetch("./lang/en.json")
		.then(data => data.json())
		.then(dataEN => {loadDataPopup(dataEN);})
		.catch(e => console.log(e));
}


// AJAX
function getDataGlobalAgain(){
	let xmlHttpRequest = new XMLHttpRequest();xmlHttpRequest.addEventListener('load',e => {
		if(xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200){let jsonData = xmlHttpRequest.response;
			displayDataGlobal(jsonData);
		}else{console.log(e);}
	});xmlHttpRequest.open('GET',API_GlobalCountries,true);xmlHttpRequest.responseType = 'json';xmlHttpRequest.send();
}


//---------
// Display
//---------
function displayDataGlobal(jsonData){
	table.innerHTML = '';
	var GlobalCases = 0;
	var GlobalRecovered = 0;
	var GlobalDeaths = 0;
	jsonData.forEach(u => {
		// Global
		GlobalCases+=u.cases;
		GlobalRecovered+=u.recovered;
		GlobalDeaths+=u.deaths;
		document.getElementById("GlobalCases").innerHTML = ShorterNum(GlobalCases);
		document.getElementById("GlobalRecovered").innerHTML = ShorterNum(GlobalRecovered);
		document.getElementById("GlobalDeaths").innerHTML = ShorterNum(GlobalDeaths);
		
		// Countries		
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
		td5.innerHTML = u.population.toLocaleString('en-US');
		
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
			
			document.getElementById("Population").innerHTML = ShorterValue(Population);
			getDataDailyVaccines(Population);
			displayRate(incidenceRate,recoveryRate,deathRate);
		}
	});
}
function displayRate(incidenceRate,recoveryRate,deathRate){
	document.getElementById("IncidenceRate").innerHTML = incidenceRate;
	document.getElementById("RecoveryRate").innerHTML  = recoveryRate;
	document.getElementById("DeathRate").innerHTML     = deathRate;
}

function loadDataPopup(dataEN){
	document.getElementById("nameAbData").textContent = dataEN.AboutTheData.title;
	document.getElementById("aboutTheData").innerHTML = dataEN.AboutTheData.content;
	$("#imgCfmCovid").attr("src", "https://img.icons8.com/bubbles/2x/question-mark.png");
	document.getElementById("nameVaccine").textContent = dataEN.AboutVaccineTechnology.title;
	document.getElementById("aboutTheVaccine").innerHTML = dataEN.AboutVaccineTechnology.content;
	document.getElementById("nameVaccineDetails").textContent = dataEN.AboutVaccineDetails.title;
	document.getElementById("aboutTheVaccineDetails").innerHTML = dataEN.AboutVaccineDetails.content;
	document.getElementById("nameGuide").textContent = dataEN.SoftwareInfo.title;
	document.getElementById("aboutGuide").innerHTML = dataEN.SoftwareInfo.content;
}


//---------
// SHORTER 
//---------
// Shorter Num - Just Million
function ShorterNum(num) {
    var units = ["M"];
    var unit = Math.floor((num / 1.0e+1).toFixed(0).toString().length);
    var r = unit%3;
    var x =  Math.abs(Number(num))/Number('1.0e+'+(unit-r)).toFixed(2);
    return x.toFixed(0) + units[Math.floor(unit/3)-2];
}
// Shorter Value - For All
function ShorterValue(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "K", "M", "B","T"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
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
setInterval(()=>{getDataGlobalAgain();},(1000*60*15));

//------
// END
//------



