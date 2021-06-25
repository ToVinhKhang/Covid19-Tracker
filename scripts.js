// Demo Load data by Fetch & AJAX
let table;
const API = "https://corona.lmao.ninja/v2/countries";

window.addEventListener('load',() => {
	table = document.getElementById("table");
	loadByFetch();
});

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

		td0.innerHTML = `<img style="width:50px; height: 25px;" src="`+u.countryInfo.flag+`">`;
		td1.innerHTML = u.country;
		td2.innerHTML = u.cases.toLocaleString('en-US'); //number.toLocaleString('en-US') is number with commas as thousands
		td3.innerHTML = u.recovered.toLocaleString('en-US');
		td4.innerHTML = u.deaths.toLocaleString('en-US');
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

function loadByFetch(){
	fetch(API) /* [Promise] Method */
		.then(data => data.json())
		.then(jsonData => {displayData(jsonData);})
		.catch(e => console.log(e));
}

function loadByAjax(){
	let xmlHttpRequest = new XMLHttpRequest();
	xmlHttpRequest.addEventListener('load',e => {
		if(xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200){
			let jsonData = xmlHttpRequest.response;
			displayData(jsonData);
		}else{console.log(e);}
	});
	xmlHttpRequest.open('GET',API,true);
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
    loadByAjax();
},1000);

