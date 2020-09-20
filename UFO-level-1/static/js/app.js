// from data.js
var tableData = data;
console.log(tableData);

// append data to table (Day 3, Activity 03 bonus)
function appendTable(data) {
    d3.select('tbody').html('');
    data.forEach((selection) => {
        var tableRow = d3.select('tbody').append('tr');
        Object.values(selection).forEach((value) => {
            var tableData = tableRow.append('td');
            tableData.text(value);
        });
    })
}

appendTable(tableData);

// filter results based on user input (Day 3, Activities 07, 08 & 09)
function clickEvent() {
    d3.event.preventDefault();
    var inputElement = d3.select('#datetime');
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData;
    if (inputElement) {filteredData = filteredData.filter((row) => row.datetime === inputValue);
    }
    appendTable(filteredData);
}

d3.selectAll('#filter-btn').on('click', clickEvent);