let numR = 0;
let numC = 0;


function changeColor(cn){
	let objs = document.querySelectorAll(cn);
	let arr = Array.from(objs);
	console.log(arr);

}

function isRowsEmpty(){
	if(numR == 0){
		document.getElementsByClassName("columns")[0].innerHTML="";
	}
}

function isColsEmpty(){
	if(numC == 0){
		document.getElementsByClassName("rows")[0].innerHTML="";
	}
}

function addRow(){
	isRowsEmpty();
	let rows = document.getElementsByClassName("rows")[0];
	rows.innerHTML+="<div class='boxRow' onmousedown='changeColor()'></div>\n"
	numR++;
	let fullCols = document.getElementsByClassName("column");
	for(let i = 0; i < fullCols.length; i++){
		fullCols[i].innerHTML+="<div class='boxColumn'></div>\n";
	}	

	if(numR == 1){
		numC = 1;
	}

	changeColor(".boxRow");
}

function addCol(){
	if(numR == 0){
		let rows = document.getElementsByClassName("rows")[0];
		rows.innerHTML+="<div class='boxRow'></div>\n"
		numR++;
	} else {
		let cols = document.getElementsByClassName("columns")[0];
		let fullCol = document.createElement("div");
		fullCol.className="column";
		for(let i = 0; i < numR; i++){
			fullCol.innerHTML+="<div class='boxColumn'></div>\n";
		}
		cols.append(fullCol);
	}
	

	changeColor(".boxColumn");
	numC++;
}



function removeRow(){
	let rows = document.getElementsByClassName("rows")[0];
	let fullCols = document.getElementsByClassName("column");
	
	rows.removeChild(rows.children[rows.children.length-1]);
	for(let i = 0; i < fullCols.length; i++){
		fullCols[i].removeChild(fullCols[i].children[fullCols[i].children.length-1]);
	}	
	numR--;
}	

function removeCol(){
	let cols = document.getElementsByClassName("columns")[0];
	if(numC > 1){
		cols.removeChild(cols.children[cols.children.length-1]);
		numC--;
	} else {
		numC = 0;
		numR = 0;
		isColsEmpty();
	} 
}	


