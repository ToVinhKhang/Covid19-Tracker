// -----------------------------------------------
// SORT TABLE
// Author: ToVinhKhang
// Portfolio: https://tovinhkhang.netlify.app/
// -----------------------------------------------

window.addEventListener('load',()=>{var sortableTables = document.getElementsByClassName("sortable-table");var tablesData = [];
	for(let tableIndex = 0; tableIndex < sortableTables.length; tableIndex++){
		// Wait 2s For Data Collected Already
		setTimeout(function(){
			sortableTables[tableIndex].setAttribute("data-sort-index", tableIndex);
			let tableRows = sortableTables[tableIndex].getElementsByTagName("tbody")[0].getElementsByTagName("tr");
			for (var rowIndex = 0; rowIndex < tableRows.length; rowIndex++){
				let tableRowCells = tableRows[rowIndex].getElementsByTagName("td");
				for(let cellIndex = 0; cellIndex < tableRowCells.length; cellIndex++){
					if(tablesData[tableIndex] === void 0) {tablesData.splice(tableIndex,0,[]);}
					if(tablesData[tableIndex][rowIndex] === void 0){tablesData[tableIndex].splice(rowIndex, 0, []);}
					tablesData[tableIndex][rowIndex].splice(cellIndex,0,tableRowCells[cellIndex].innerHTML);
				}
			}
		}, 2000);
		
		// Header Click Event
		let tableHeaders = sortableTables[tableIndex].getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].getElementsByTagName("th");
		for(let headerIndex = 0; headerIndex < tableHeaders.length; headerIndex++){
			let colIsNumeric = tableHeaders[headerIndex].classList.contains("numeric-sort");
			tableHeaders[headerIndex].setAttribute("data-sort-direction", 0);
			tableHeaders[headerIndex].setAttribute("data-sort-index", headerIndex);
			tableHeaders[headerIndex].addEventListener('click', function() {
				let colSortDirection = this.getAttribute("data-sort-direction");
				let headerIndex = this.getAttribute("data-sort-index");
				let tableIndex = findAncestor(this, "sortable-table").getAttribute("data-sort-index");
				if(colSortDirection == 1){setColHeaderDirection(-1, headerIndex, tableHeaders)}
				else {setColHeaderDirection(1, headerIndex, tableHeaders)}

				tablesData[tableIndex] = tablesData[tableIndex].sort((a,b)=>{
					let x = extractStringContent(a[headerIndex]);
					let y = extractStringContent(b[headerIndex]);
					if(colIsNumeric){x = unformatNumberString(x);y = unformatNumberString(y);}
					if (x === y){return 0;}
					else{
						if(colSortDirection == 1){return (x > y) ? -1 : 1;}
						else{return (x < y) ? -1 : 1;}
					}
				});
				renderSortedTable(sortableTables[tableIndex], tablesData[tableIndex]);
			});
		}
	}
});

function findAncestor(el,cls){while((el = el.parentElement) && !el.classList.contains(cls));return el;}
function unformatNumberString(number){number = number.replace(/[^\d\.-]/g, '');return Number(number);}
function extractStringContent(s){var span = document.createElement('span');span.innerHTML = s.split('<')[0];return span.textContent || span.innerText;};
function setColHeaderDirection(newDirection, colIndex, colHeaders) {
	for(let index = 0; index < colHeaders.length; index++) {
		if(index == colIndex){colHeaders[colIndex].setAttribute("data-sort-direction", newDirection);}
		else{colHeaders[index].setAttribute("data-sort-direction", 0);}
	}
}
function renderSortedTable(table, data){
	let tableRows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
	for (let rowIndex = 0; rowIndex < tableRows.length; rowIndex++){
		let tableRowCells = tableRows[rowIndex].getElementsByTagName("td");
		for(let cellIndex = 0; cellIndex < tableRowCells.length; cellIndex++){
			tableRowCells[cellIndex].innerHTML = data[rowIndex][cellIndex];
		}
	}
}

// -------------
// 	END
// -------------

