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
var colors = ["#F7F7F7","#A1BFCF","#7FABCF","#24A6CF","#0D7197","#0D4164"];

// Config
var simplemaps_countrymap_mapdata = {
	main_settings: {
		width: "500", 
		background_color: "white",
		background_transparent: "no",
		border_color: "rgb(204, 204, 204)",
		state_description: "- None -",
		state_color: "rgb(247, 247, 247)",
		state_hover_color: "#17a2b8",
		state_url: "",
		border_size: 3,
		all_states_inactive: "no",
		all_states_zoomable: "no",
		location_description: "Vietnam Map",
		location_url: "",
		location_color: "#FF0067",
		location_opacity: 0.8,
		location_hover_opacity: 1,
		location_size: 25,
		location_type: "square",
		location_image_source: "frog.png",
		location_border_color: "#FFF",
		location_border: 2,
		location_hover_border: 2.5,
		all_locations_inactive: "no",
		all_locations_hidden: "no",
		label_color: "#d5ddec",
		label_hover_color: "#d5ddec",
		label_size: 22,
		label_font: "Arial",
		hide_labels: "no",
		hide_eastern_labels: "no",
		zoom: "yes",
		manual_zoom: "yes",
		back_image: "no",
		initial_back: "no",
		initial_zoom: "-1",
		initial_zoom_solo: "no",
		region_opacity: 1,
		region_hover_opacity: 0.6,
		zoom_out_incrementally: "yes",
		zoom_percentage: 0.99,
		zoom_time: 0.5,
		popup_color: "white",
		popup_opacity: 0.9,
		popup_shadow: 1,
		popup_corners: 5,
		popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
		popup_nocss: "no",
		div: "map",
		auto_load: "yes",
		url_new_tab: "no",
		images_directory: "default",
		fade_time: 0.1,
		link_text: "View Website",
		popups: "detect",
		state_image_url: "",
		state_image_position: "",
		location_image_url: ""
	},
	state_specific,
	locations: {},labels: {},
	legend: {
		entries: [{
				name: "0",
				color: colors[0],
				type: "location",
				shape: "square",
				ids: ""
			},{
				name: "1-9",
				color: colors[1],
				type: "location",
				shape: "square",
				ids: ""
			},{
				name: "10-99",
				color: colors[2],
				type: "location",
				shape: "square",
				ids: ""
			},{
				name: "100-999",
				color: colors[3],
				type: "location",
				shape: "square",
				ids: ""
			},{
				name: "1000-9999",
				color: colors[4],
				type: "location",
				shape: "square",
				ids: ""
			},{
				name: ">10000",
				color: colors[5],
				type: "location",
				shape: "square",
				ids: ""
			}
		]
	},
	regions: {}
};


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

// Run
async function OK(){await getVNMap();simplemaps_countrymap_mapdata.state_specific = state_specific;simplemaps_countrymap.refresh();}
OK();

// End
