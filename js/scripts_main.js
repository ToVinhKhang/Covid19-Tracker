// -----------------------------------------------
// COVID19 TRACKER
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

//----------
// 	API
//----------

// API for GlobalAll
const API_GlobalAll       = "https://api-kent.netlify.app/.netlify/functions/api/global/all";

// API for GlobalCountries
const API_GlobalCountries = "https://api-kent.netlify.app/.netlify/functions/api/global/countries";

// API for Daily Vaccines
const API_DailyVaccines   = "https://api-kent.netlify.app/.netlify/functions/api/vn/daily/vaccines";

// Init
let table;
window.addEventListener('load',() => {
	table = document.getElementById("table");
	getDataGlobalAll();
	getDataGlobalDetails();
	loadDataPopupAtFirst();
});


//----------
// Get Data
//----------

// Get Data Global
function getDataGlobalDetails(){
	fetch(API_GlobalCountries)
		.then(data => data.json())
		.then(jsonData => {
			displayDataGlobalDetails(jsonData);
			Loader();
		})
		.catch(e => console.log(e));
}
function getDataGlobalAll(){
	fetch(API_GlobalAll)
		.then(data => data.json())
		.then(jsonData => {
			displayDataGlobalAll(jsonData);
		})
		.catch(e => console.log(e));
}
// Popup Modal Need Load data at first
function loadDataPopupAtFirst(){
	fetch("./lang/en.json")
		.then(data => data.json())
		.then(dataEN => {
			loadDataPopup(dataEN);
		})
		.catch(e => console.log(e));
}


// Just Test by AJAX :D
function getDataGlobalDetailsAgain(){
	let xmlHttpRequest = new XMLHttpRequest();xmlHttpRequest.addEventListener('load',e => {
		if(xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200){let jsonData = xmlHttpRequest.response;
			displayDataGlobalDetails(jsonData);
		}else{console.log(e);}
	});xmlHttpRequest.open('GET',API_GlobalCountries,true);xmlHttpRequest.responseType = 'json';xmlHttpRequest.send();
}
function getDataGlobalAllAgain(){
	let xmlHttpRequest = new XMLHttpRequest();xmlHttpRequest.addEventListener('load',e => {
		if(xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200){let jsonData = xmlHttpRequest.response;
			displayDataGlobalAll(jsonData);
		}else{console.log(e);}
	});xmlHttpRequest.open('GET',API_GlobalAll,true);xmlHttpRequest.responseType = 'json';xmlHttpRequest.send();
}


//---------
// Display
//---------
function displayDataGlobalDetails(jsonData){
	// Continent
	var Asia = 0;
	var Europe = 0;
	var Africa = 0;
	var NorthAmerica = 0;
	var SouthAmerica = 0;
	var Oceania = 0;
	
	jsonData.forEach(u => {
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
		td2.innerHTML = u.cases.toLocaleString('en-US')+`<br><span>+`+u.todayCases.toLocaleString('en-US')+`</span>`;
		td3.innerHTML = u.recovered.toLocaleString('en-US')+`<br><span>+`+u.todayRecovered.toLocaleString('en-US')+`</span>`;
		td4.innerHTML = u.deaths.toLocaleString('en-US')+`<br><span>+`+u.todayDeaths.toLocaleString('en-US')+`</span>`;
		
		// Custom in Vietnam
		if(u.country == "Vietnam"){
			td5.innerHTML = u.population.toLocaleString('en-US')+`<br><span class="cursorPointer" onclick="SwitchTracker()">See Details!</span>`;
			
			displayTotalVN_Population(u.population);
			getDataDailyVaccines(u.population);
		}
		else{td5.innerHTML = u.population.toLocaleString('en-US');}

		tr.appendChild(td0);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		table.appendChild(tr);
		
		// Continent
		if(u.continent == "Asia"){Asia+=u.cases;}
		else if(u.continent == "Europe"){Europe+=u.cases;}
		else if(u.continent == "North America"){NorthAmerica+=u.cases;}
		else if(u.continent == "South America"){SouthAmerica+=u.cases;}
		else if(u.continent == "Africa"){Africa+=u.cases;}
		else if(u.continent == "Australia-Oceania"){Oceania+=u.cases;}
	});
	displayContinent(Asia,Europe,NorthAmerica,SouthAmerica,Africa,Oceania)
	//Wait 2s
	setTimeout(()=>{$('#th-cases').trigger('click');$('#th-cases').trigger('click');}, 2000);
}

function displayDataGlobalAll(jsonData){
	document.getElementById("GlobalCases").innerHTML = ShorterValue(jsonData.cases,1);
	document.getElementById("GlobalRecovered").innerHTML = ShorterValue(jsonData.recovered,1);
	document.getElementById("GlobalDeaths").innerHTML = ShorterValue(jsonData.deaths,1);
	document.getElementById("todayGlobalCases").innerHTML = `+`+jsonData.todayCases.toLocaleString('en-US');
	document.getElementById("todayGlobalRecovered").innerHTML = `+`+jsonData.todayRecovered.toLocaleString('en-US');
	document.getElementById("todayGlobalDeaths").innerHTML = `+`+jsonData.todayDeaths.toLocaleString('en-US');
}
function displayContinent(Asia,Europe,NorthAmerica,SouthAmerica,Africa,Oceania){
	document.getElementById("Asia").innerHTML = ShorterValue(Asia,2);
	document.getElementById("Europe").innerHTML = ShorterValue(Europe,2);
	document.getElementById("NorthAmerica").innerHTML = ShorterValue(NorthAmerica,2);
	document.getElementById("SouthAmerica").innerHTML = ShorterValue(SouthAmerica,2);
	document.getElementById("Africa").innerHTML = ShorterValue(Africa,2);
	document.getElementById("Oceania").innerHTML = ShorterValue(Oceania,2);
}
function loadDataPopup(dataEN){
	document.getElementById("nameAbData").textContent = dataEN.AboutTheData.title;
	document.getElementById("aboutTheData").innerHTML = dataEN.AboutTheData.content;
	document.getElementById("nameVaccine").textContent = dataEN.AboutVaccineTechnology.title;
	document.getElementById("aboutTheVaccine").innerHTML = dataEN.AboutVaccineTechnology.content;
	document.getElementById("nameVaccineDetails").textContent = dataEN.AboutVaccineDetails.title;
	document.getElementById("aboutTheVaccineDetails").innerHTML = dataEN.AboutVaccineDetails.content;
	document.getElementById("nameVariant").textContent = dataEN.AboutCoronavirusVariant.title;
	document.getElementById("aboutTheVariant").innerHTML = dataEN.AboutCoronavirusVariant.content;
	document.getElementById("nameMedicine").textContent = dataEN.AboutTreatmentMedicine.title;
	document.getElementById("aboutTheMedicine").innerHTML = dataEN.AboutTreatmentMedicine.content;
	document.getElementById("nameGuide").textContent = dataEN.SoftwareInfo.title;
	document.getElementById("aboutGuide").innerHTML = dataEN.SoftwareInfo.content;
}
function Loader(){
	document.getElementById("loader").style.display = "none";
	document.getElementById("global").style.display = "block";
	document.getElementById("continent").style.display = "block";
	document.getElementById("footer").style.display = "block";
}

//---------
// SHORTER 
//---------
// Shorter Num Million Not Tail
function ShorterNum(num) {
    var units = ["M"];
    var unit = Math.floor((num / 1.0e+1).toFixed(0).toString().length);
    var r = unit%3;
    var x =  Math.abs(Number(num))/Number('1.0e+'+(unit-r)).toFixed(2);
    return x.toFixed(0) + units[Math.floor(unit/3)-2];
}
// Shorter Num Million With Tail
function ShorterValue(num,n) {
    var newValue = num;
	var suffixes = ["", "K", "M", "M"];
	var suffixNum = Math.floor((""+num).length/3 );
	var shortValue = '';
	shortValue = parseFloat((suffixNum != 0 ? (num/Math.pow(1000,suffixNum)):num));
	if(shortValue<1 && suffixNum==3){shortValue*=1000}
	shortValue = shortValue.toFixed(n);
	newValue = shortValue+suffixes[suffixNum];
    return newValue;
}
// Format Percent Num
function numDigitsAfterDecimal(num) {
	var afterDecimalStr = num.toString().split('.')[1] || ''
	return afterDecimalStr.length
}
function formatTailNum(num){
	if(numDigitsAfterDecimal(num)==0){num+=`.00`}
	if(numDigitsAfterDecimal(num)==1){num+=`0`}
	return num;
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
setInterval(()=>{getDataGlobalDetailsAgain();getDataGlobalAllAgain();},(1000*60*15));

//------
// END
//------



