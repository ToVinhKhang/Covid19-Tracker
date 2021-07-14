// -----------------------------------------------
// SORT TABLE
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

window.addEventListener('load',()=>{
	var DataTable = [];
	var SortTable = document.getElementsByClassName("sortable-table");
	for(let i = 0; i < SortTable.length; i++){
		// Wait 2s For Data Collected Already
		setTimeout(function(){
			SortTable[i].setAttribute("data-sort-index", i);
			let tableRows = SortTable[i].getElementsByTagName("tbody")[0].getElementsByTagName("tr");
			for(var j = 0; j < tableRows.length; j++){let tableRowCells = tableRows[j].getElementsByTagName("td");
				for(let k = 0; k < tableRowCells.length; k++){
					if(DataTable[i] === void 0) {DataTable.splice(i,0,[]);}
					if(DataTable[i][j] === void 0){DataTable[i].splice(j, 0, []);}
					DataTable[i][j].splice(k,0,tableRowCells[k].innerHTML);
				}
			}
		}, 2000);
		
		// Header Click Event
		let thead = SortTable[i].getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].getElementsByTagName("th");
		for(let m = 0; m < thead.length; m++){
			let isNum = thead[m].classList.contains("numeric-sort");
			thead[m].setAttribute("data-sort-direction", 0);
			thead[m].setAttribute("data-sort-index", m);
			thead[m].addEventListener('click', function() {
				let colTarget = this.getAttribute("data-sort-direction");
				let m = this.getAttribute("data-sort-index");
				let i = findParent(this, "sortable-table").getAttribute("data-sort-index");
				if(colTarget == 1){targetColumnHeader(-1, m, thead)}
				else {targetColumnHeader(1, m, thead)}

				DataTable[i] = DataTable[i].sort((a,b)=>{let x = formatContent(a[m]);let y = formatContent(b[m]);
					if(isNum){x = UnFormatStringNum(x);y = UnFormatStringNum(y);}
					if(x===y){return 0;}else{if(colTarget == 1){return (x > y) ? -1 : 1;}else{return (x < y) ? -1 : 1;}}
				});
				RenderSortedTable(SortTable[i], DataTable[i]);
			});
		}
	}
});

function findParent(ele,cls){while((ele = ele.parentElement) && !ele.classList.contains(cls));return ele;}
function UnFormatStringNum(n){n = n.replace(/[^\d\.-]/g, '');return Number(n);}
function formatContent(string){var span = document.createElement('span');span.innerHTML = string.split('<')[0];return span.textContent || span.innerText;};
function targetColumnHeader(target, colIndex, colHeaders) {
	for(let i = 0; i < colHeaders.length; i++){
		if(i == colIndex){colHeaders[colIndex].setAttribute("data-sort-direction", target);}
		else{colHeaders[i].setAttribute("data-sort-direction", 0);}
	}
}
function RenderSortedTable(table, data){
	let tableRows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
	for(let i = 0; i < tableRows.length; i++){let tableRowCells = tableRows[i].getElementsByTagName("td");
		for(let cellIndex = 0; cellIndex < tableRowCells.length; cellIndex++){
			tableRowCells[cellIndex].innerHTML = data[i][cellIndex];
		}
	}
}

// -------------
// 	END
// -------------

