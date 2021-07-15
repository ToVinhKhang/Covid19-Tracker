// -----------------------------------------------
// TRANSLATION
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

// SELECT LANGUAGES
$("#SwitchLanguages").change(function(){
	// LANG TARGET
	lang = $(this).val();
	
	// SETUP
	var txtTitle = document.getElementById("txtTitle");
	var txtDesc = document.getElementById("txtDesc");
	var tspan = document.getElementsByTagName("tspan")[0];
	var th_contries = document.getElementById("th-contries");
	var th_cases = document.getElementById("th-cases");
	var th_recovered = document.getElementById("th-recovered");
	var th_deaths = document.getElementById("th-deaths");
	var th_tests = document.getElementById("th-tests");
	var th_citiesprovinces = document.getElementById("th-citiesprovinces");
	var th_citiesCases = document.getElementById("th-citiesCases");
	var th_citiesRecovered = document.getElementById("th-citiesRecovered");
	var th_citiesDeaths = document.getElementById("th-citiesDeaths");
	var txtTotalCases = document.getElementById("txtTotalCases");
	var txtTotalRecovered = document.getElementById("txtTotalRecovered");
	var txtTotalDeaths = document.getElementById("txtTotalDeaths");
	var Population = document.getElementById("Population");
	var txtIncidenceRate = document.getElementById("txtIncidenceRate");
	var txtRecoveryRate = document.getElementById("txtRecoveryRate");
	var txtDeathRate = document.getElementById("txtDeathRate");
	var designedBy = document.getElementById("designedBy");
	var searchInput = document.getElementById("searchInput");
	var txtAboutData = document.getElementById("txtAboutData");
	var vnName = document.getElementById("vnName");
	$("#imgCfmCovid").attr("src", "https://img.icons8.com/bubbles/2x/question-mark.png");
	var nameCountry = document.getElementById("nameCountry");
	var aboutTheData = document.getElementById("aboutTheData");
	var aboutDataInEN = `Changes rapidly`+
						`<h6>This data updates every 15 minutes and might not reflect some cases still being reported.</h6>`+
					`Only includes people tested`+
						`<h6>Numbers are based on official estimates, which may not account for unverified cases in countries lacking the proper infrastructure to diagnose patients.</h6><h6 class="plusSign">The "+" sign means that the newly collected data is recorded during the day.</h6>`+
					`May discrepancies from other sources`+
						`<h6>A change may result in inaccurate/no data being reported for the associated region.</h6>`+
					`New updates`+
						`<h6>Detailed information on the Covid-19 epidemic situation by cities/provinces and weekly chart statistics in Vietnam has been supported at the button on the top-right screen.</h6>`;
	var aboutDataInVN = `Thay đổi nhanh chóng`+
						`<h6>Dữ liệu này cập nhật 15 phút một lần và có thể không phản ánh một số trường hợp vẫn đang được báo cáo.</h6>`+
					`Chỉ bao gồm những người đã được xét nghiệm`+
						`<h6>Các con số dựa trên ước tính chính thức, có thể không tính đến các trường hợp chưa được xác minh ở các quốc gia thiếu cơ sở hạ tầng thích hợp để chẩn đoán bệnh nhân.</h6><h6 class="plusSign">Dấu "+" có nghĩa là dữ liệu mới thu thập được ghi nhận trong ngày.</h6>`+
					`Có thể có sự khác biệt so với các nguồn khác`+
						`<h6>Thay đổi có thể dẫn đến dữ liệu không chính xác/không được báo cáo cho khu vực được liên kết.</h6>`+
					`Cập nhật mới`+
						`<h6>Thông tin chi tiết về tình hình dịch bệnh Covid-19 theo thành phố/tỉnh và thống kê biểu đồ hàng tuần tại Việt Nam đã được hỗ trợ tại nút trên màn hình bên phải.</h6>`;
	
	
	
	// -------
	// English
	// -------
	if(lang=="EN"){
		fetch("./lang/en.json")
		.then(data => data.json())
		.then(dataEN => {
			txtTitle.innerHTML = dataEN.title;
			txtDesc.innerHTML = dataEN.desc;
			tspan.innerHTML = dataEN.global;
			th_contries.innerHTML = dataEN.tableWorld.th1;
			th_cases.innerHTML = dataEN.tableWorld.th2;
			th_recovered.innerHTML = dataEN.tableWorld.th3;
			th_deaths.innerHTML = dataEN.tableWorld.th4;
			th_tests.innerHTML = dataEN.tableWorld.th5;
			th_citiesprovinces.innerHTML = dataEN.tableVietnam.th1;
			th_citiesCases.innerHTML = dataEN.tableVietnam.th2;
			th_citiesRecovered.innerHTML = dataEN.tableVietnam.th3;
			th_citiesDeaths.innerHTML = dataEN.tableVietnam.th4;
			txtTotalCases.innerHTML = dataEN.totalVietnam.txt1;
			txtTotalRecovered.innerHTML = dataEN.totalVietnam.txt2;
			txtTotalDeaths.innerHTML = dataEN.totalVietnam.txt3;
			txtPopulation.innerHTML = dataEN.totalVietnam.txt4;
			Population.innerHTML = Population.innerHTML.replace("Tr","M");
			txtIncidenceRate.innerHTML = dataEN.rateVietnam.txt1;
			txtRecoveryRate.innerHTML = dataEN.rateVietnam.txt2;
			txtDeathRate.innerHTML = dataEN.rateVietnam.txt3;
			designedBy.innerHTML = dataEN.footer;
			searchInput.placeholder = dataEN.searching;
			txtAboutData.innerHTML = dataEN.AboutData;
			vnName.innerHTML = dataEN.vnName;
			nameCountry.textContent = "About The Data";
			aboutTheData.innerHTML = aboutDataInEN;
		}).catch(e => console.log(e));
	}
	
	
	// ----------
	// Vietnamses
	// ----------
	if(lang=="VN"){
		fetch("./lang/vn.json")
		.then(data => data.json())
		.then(dataVN => {
			txtTitle.innerHTML = dataVN.title;
			txtDesc.innerHTML = dataVN.desc;
			tspan.innerHTML = dataVN.global;
			th_contries.innerHTML = dataVN.tableWorld.th1;
			th_cases.innerHTML = dataVN.tableWorld.th2;
			th_recovered.innerHTML = dataVN.tableWorld.th3;
			th_deaths.innerHTML = dataVN.tableWorld.th4;
			th_tests.innerHTML = dataVN.tableWorld.th5;
			th_citiesprovinces.innerHTML = dataVN.tableVietnam.th1;
			th_citiesCases.innerHTML = dataVN.tableVietnam.th2;
			th_citiesRecovered.innerHTML = dataVN.tableVietnam.th3;
			th_citiesDeaths.innerHTML = dataVN.tableVietnam.th4;
			txtTotalCases.innerHTML = dataVN.totalVietnam.txt1;
			txtTotalRecovered.innerHTML = dataVN.totalVietnam.txt2;
			txtTotalDeaths.innerHTML = dataVN.totalVietnam.txt3;
			txtPopulation.innerHTML = dataVN.totalVietnam.txt4;
			Population.innerHTML = Population.innerHTML.replace("M","Tr");
			txtIncidenceRate.innerHTML = dataVN.rateVietnam.txt1;
			txtRecoveryRate.innerHTML = dataVN.rateVietnam.txt2;
			txtDeathRate.innerHTML = dataVN.rateVietnam.txt3;
			designedBy.innerHTML = dataVN.footer;
			searchInput.placeholder = dataVN.searching;
			txtAboutData.innerHTML = dataVN.AboutData;
			vnName.innerHTML = dataVN.vnName;
			nameCountry.textContent = "Thông tin về dữ liệu";
			aboutTheData.innerHTML = aboutDataInVN;
		}).catch(e => console.log(e));
	}
});

// ----
// END
// ----