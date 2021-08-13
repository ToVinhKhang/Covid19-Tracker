// -----------------------------------------------
// SIMPLE MAP - MAIN
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

// Async Await
async function FetchUsingAsync(){
    const data = await fetch(API_CityVietnam);
    const jsonData = await data.json();
    return {jsonData};
}
async function getVNMap(){
    const {detail} = await(await FetchUsingAsync()).jsonData;
    displayVNMap(detail);
}

// Init
var state_specific = {
    VNM429: {name: "Quảng Ninh"},
    VNM444: {name: "Tây Ninh"},
    VNM450: {name: "Điện Biên"},
    VNM451: {name: "Bắc Kạn"},
    VNM452: {name: "Thái Nguyên"},
    VNM453: {name: "Lai Châu"},
    VNM454: {name: "Lạng Sơn"},
    VNM455: {name: "Sơn La"},
    VNM456: {name: "Thanh Hóa"},
    VNM457: {name: "Tuyên Quang"},
    VNM458: {name: "Yên Bái"},
    VNM459: {name: "Hòa Bình"},
    VNM460: {name: "Hải Dương"},
    VNM604: {name: "Hải Phòng"},
    VNM461: {name: "Hưng Yên"},
    VNM462: {name: "Hà Nội"},
    VNM463: {name: "Bắc Ninh"},
    VNM464: {name: "Vĩnh Phúc"},
    VNM466: {name: "Ninh Bình"},
    VNM467: {name: "Hà Nam"},
    VNM468: {name: "Nam Định"},
    VNM469: {name: "Phú Thọ"},
    VNM470: {name: "Bắc Giang"},
    VNM471: {name: "Thái Bình"},
    VNM474: {name: "Hà Tĩnh"},
    VNM475: {name: "Nghệ An"},
    VNM476: {name: "Quảng Bình"},
    VNM477: {name: "Đắk Lắk"},
    VNM478: {name: "Gia Lai"},
    VNM479: {name: "Khánh Hòa"},
    VNM480: {name: "Lâm Đồng"},
    VNM481: {name: "Ninh Thuận"},
    VNM482: {name: "Phú Yên"},
    VNM483: {name: "Bình Dương"},
    VNM603: {name: "Tiền Giang"},
    VNM602: {name: "Đắk Nông"},
    VNM484: {name: "Bình Phước"},
    VNM485: {name: "Bình Định"},
    VNM486: {name: "Kon Tum"},
    VNM487: {name: "Quảng Nam"},
    VNM488: {name: "Quảng Ngãi"},
    VNM489: {name: "Quảng Trị"},
    VNM490: {name: "Thừa Thiên – Huế"},
    VNM491: {name: "Đà Nẵng"},
    VNM495: {name: "Bà Rịa – Vũng Tàu"},
    VNM496: {name: "Bình Thuận"},
    VNM497: {name: "Đồng Nai"},
    VNM498: {name: "An Giang"},
    VNM499: {name: "Cần Thơ"},
    VNM500: {name: "Đồng Tháp"},
    VNM501: {name: "Hồ Chí Minh"},
    VNM502: {name: "Kiên Giang"},
    VNM503: {name: "Long An"},
    VNM504: {name: "Bến Tre"},
    VNM505: {name: "Hậu Giang"},
    VNM506: {name: "Bạc Liêu"},
    VNM507: {name: "Cà Mau"},
    VNM508: {name: "Sóc Trăng"},
    VNM509: {name: "Trà Vinh"},
    VNM510: {name: "Vĩnh Long"},
    VNM511: {name: "Cao Bằng"},
    VNM512: {name: "Hà Giang"},
    VNM601: {name: "Lào Cai"}
}
var colors = ["#F7F7F7","#F7ED97","#FFDA47","#FFBD57","#FF3C00","#E80000"];

// Display
function displayVNMap(detail){
    for(var i = 0; i < 62; i++){
		for (const VNM in state_specific) {
			if(state_specific[VNM].name == detail[i].name){
				state_specific[VNM].color = setColor(detail[i].cases, colors);
				state_specific[VNM].description = `
					<span>Cases: <badge>${detail[i].cases}</badge></span><br>
					<span>Recovered: <badge>${detail[i].recovered}</badge></span><br>
					<span>Deaths: <badge>${detail[i].deaths}</badge></span>
				`;
			}
		}
    }
}
// Set
function setColor(n){
    if(n >= 1 && n <= 10){return colors[1];}
	else if(n > 10 && n < 100){return colors[2];}
	else if(n >= 100 && n < 1000){return colors[3];}
	else if(n >= 1000 && n < 10000){return colors[4];}
	else if(n >= 10000){return colors[5];}
	else{return colors[0];}
}

// END


