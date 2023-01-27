const COL = Object.freeze({ "LOGO":0, "NAME":1, "TYPE":2, "L_RATE":3, "L_TERM":4, "L_TYPE":5 })

fetch('https://lenderspotlight.ca/widgets/products', {
   headers: {
      'Accept': 'application/json'
   }})
.then(response => response.text())
.then(text => buildTable(text))

function buildTable(text) {
  let table = document.getElementById("lender_table");
  let lender_list = JSON.parse(text);
  lender_list.forEach(line => addLine(table, line));
}

function addLine(table, line) {
  let row = table.insertRow(-1);

  logo_html = "<img src='" + line.lender_logo + "'     >";
  row.insertCell(COL.LOGO).innerHTML = logo_html;
  row.insertCell(COL.NAME).innerText = line.lender_name;
  row.insertCell(COL.TYPE).innerText = line.lender_type;
  row.insertCell(COL.L_RATE).innerText = line.rate;
  row.insertCell(COL.L_TERM).innerText = line.term;
  row.insertCell(COL.L_TYPE).innerText = line.type;

  console.log(line)
}
