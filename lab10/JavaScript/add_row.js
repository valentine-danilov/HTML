var ava; 
function addRow()
{
	var d = document;
	var ava = d.getElementById('avatar').value;
alert(ava);
	
	var fname = d.getElementById('fname').value;
	var lname = d.getElementById('lname').value;
	var group = d.getElementById('group').value;
	var course = d.getElementById('course').value;
	var isOnVoenka = d.getElementById('ison').checked;
	var tbody = d.getElementById('st_table').getElementsByTagName('TBODY')[0];
	
	var row = d.createElement("TR");
	tbody.appendChild(row);

	var td1 = d.createElement("TD");
	var td2 = d.createElement("TD");
	var td3 = d.createElement("TD");
	var td4 = d.createElement("TD");
	var td5 = d.createElement("TD");
	var td6 = d.createElement("TD");	

	row.appendChild(td1);
	row.appendChild(td2);
	row.appendChild(td3);
	row.appendChild(td4);
	row.appendChild(td5);
	row.appendChild(td6);
	
	
	td1.innerHTML = fname;
	td2.innerHTML = lname;
	td3.innerHTML = group;
	td4.innerHTML = course;
	td5.innerHTML = isOnVoenka;
	if(isOnVoenka==true) td5.innerHTML = 'Yes';
	if(isOnVoenka==false) td5.innerHTML = 'No';
	//td6.innerHTML = ava;
	td6.innerHTML = '<img src="'+ava+'" style="width:10%">';
	
	
}

