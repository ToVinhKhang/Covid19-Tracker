// -----------------------------------------------
// SIMPLE MAP - CONFIG
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

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
				color: "#F7F7F7",
				type: "location",
				shape: "square",
				ids: ""
			},{
				name: "1-9",
				color: "#F7ED97",
				type: "location",
				shape: "square",
				ids: ""
			},{
				name: "10-99",
				color: "#FFDA47",
				type: "location",
				shape: "square",
				ids: ""
			},{
				name: "100-999",
				color: "#FFBD57",
				type: "location",
				shape: "square",
				ids: ""
			},{
				name: "1000-9999",
				color: "#FF3C00",
				type: "location",
				shape: "square",
				ids: ""
			},{
				name: ">10000",
				color: "#E80000",
				type: "location",
				shape: "square",
				ids: ""
			}
		]
	},
	regions: {}
};

async function OK(){await getVNMap();simplemaps_countrymap_mapdata.state_specific = state_specific;simplemaps_countrymap.refresh();}
OK();

// END