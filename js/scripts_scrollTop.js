// -----------------------------------------------
// SCROLL TOP
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

var btnScrollTop = document.getElementById("scrollTop");
window.onscroll = ()=>{scrollFunction()};

function scrollFunction(){
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {btnScrollTop.style.display = "block";}
	else{btnScrollTop.style.display = "none";}
}

$('#scrollTop').click(()=>{
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
})
