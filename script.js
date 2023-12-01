let numRows, numCols;

function generateTable() {
    // Get the number of rows and columns from user input
    numRows = parseInt(document.getElementById('t1').value);
    numCols = parseInt(document.getElementById('t2').value);

    // Create a table element
    let table = document.createElement('table');

    // Generate the rows and columns for the table
    for (let i = 0; i < numRows; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < numCols; j++) {
            let cell = row.insertCell(j);
            cell.classList.add('table-cell');
        }
    }

    // Clear the existing content on the page
    document.body.innerHTML = '';

    // Add the generated table to the page
    document.body.appendChild(table);

    // Add "Add Column" and "Add Row" buttons
    let addColumnButton = document.createElement('button');
    addColumnButton.textContent = 'Add Column';
    addColumnButton.onclick = addColumn;
    document.body.appendChild(addColumnButton);


    let addRowButton = document.createElement('button');
    addRowButton.textContent = 'Add Row';
    addRowButton.onclick = addRow;
    document.body.appendChild(addRowButton);
}

function addColumn() {
    // Add a new cell to each existing row
    let table = document.querySelector('table');
    for (let i = 0; i < numRows; i++) {
        let cell = table.rows[i].insertCell(numCols);
        cell.classList.add('table-cell');
    }
    numCols++;
}

function addRow() {
    // Add a new row with cells to the table
    let table = document.querySelector('table');
    let newRow = table.insertRow(numRows);
    for (let j = 0; j < numCols; j++) {
        let cell = newRow.insertCell(j);

        cell.classList.add('table-cell');
    }
    numRows++;
}
