var d = document;
function addRow()
{
	
	var fname = d.getElementById('fname').value;
	var lname = d.getElementById('lname').value;
	var group = d.getElementById('group').value;
	var course = d.getElementById('course').value;
	var isOnVoenka = d.getElementById('ison').value;
	alert(fname);
	var tbody = d.getElementById('st_table').getElementsByTagName('TBODY')[0];

	var row = d.createElement("TR");
	body.appendChild(row);

	var td1 = d.createElement("TD");
	var td2 = d.createElement("TD");
	var td3 = d.createElement("TD");
	var td4 = d.createElement("TD");
	var td5 = d.createElement("TD");

	row.appendChild(td1);
	row.appendChild(td2);
	row.appendChild(td3);
	row.appendChild(td4);
	row.appendChild(td5);

	td1.innerHTML = fname;
	td2.innerHTML = lname;
	td3.innerHTML = group;
	td4.innerHTML = course;
	td5.innerHTML = isOnVoenka;
}
