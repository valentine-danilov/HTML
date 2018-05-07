var arr[];
var buf;
var td1, td2, td3, td4, td5, td6;
function addRowToSession()
{
	var d = document;
	var ava = d.getElementById('avatar').value;
	var fname = d.getElementById('fname').value;
	var lname = d.getElementById('lname').value;
	var group = d.getElementById('group').value;
	var course = d.getElementById('course').value;
	var isOnVoenka = d.getElementById('ison').checked;
	var tbody = d.getElementById('st_table').getElementsByTagName('TBODY')[0];
	
	var row = d.createElement("TR");
	tbody.appendChild(row);

	td1 = d.createElement("TD");
	td2 = d.createElement("TD");
	td3 = d.createElement("TD");
	td4 = d.createElement("TD");
	td5 = d.createElement("TD");
	td6 = d.createElement("TD");	

	row.appendChild(td1);
	row.appendChild(td2);
	row.appendChild(td3);
	row.appendChild(td4);
	row.appendChild(td5);
	row.appendChild(td6);
	
	if(isOnVoenka==true) buf = 'Yes';
	if(isOnVoenka==false) buf = 'No';
	var table = {ava, fname, lname, group, course, buf};
	arr[arr.length]=table;
	sessionStorage.setItem('arr', arr);
}

function addRowFromSession(){
	for(var i: arr){
		td1.innerHTML = arr[i].ava;
		td2.innerHTML = arr[i].fname;
		td3.innerHTML = arr[i].lname;
		td4.innerHTML = arr[i].group;
		td5.innerHTML = arr[i].course;
		td6.innerHTML = arr[i].buf;
	}
}
function addRow(){
	addRowToSession();
	addRowFromSession();
	alert(arr);
}
