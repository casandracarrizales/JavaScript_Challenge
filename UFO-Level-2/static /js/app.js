// from data.js

var tableData = data;

// YOUR CODE HERE!
// APPEND TABLE TO WEB PAGE 
   
var tbody = d3.select("tbody");
tableData.forEach((data) => {

    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {

        var data = row.append("td");
        data.text(value);
    });
});

// ADDS NEW ROWS OF DATA

// COLUMNS FOR `date/time`, `city`, `state`, `country`, `shape`, and`comment` 

// DATE/TIME

var button = d3.select("#filter-btn");
button.on("click", function () {

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(datetime => datetime.datetime === inputValue);
    console.log(filteredData);

    var tbody = d3.select("tbody");
    filteredData.forEach((record) => {

        var row = tbody.append("tr");
        Object.entries(record).forEach(([key, value]) => {
            var row_data = row.append("td");
            row_data.text(value);
        });
    });
});

//CITY

var button = d3.select("#filter-btn");
button.on("click", function () {

    var inputElement = d3.select("#city");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(city => city.city === inputValue);
    console.log(filteredData);

    var tbody = d3.select("tbody");
    filteredData.forEach((record) => {

        var row = tbody.append("tr");
        Object.entries(record).forEach(([key, value]) => {
            var row_data = row.append("td");
            row_data.text(value);
        });
    });
});

// STATE

var button = d3.select("#filter-btn");
button.on("click", function () {

    var inputElement = d3.select("#state");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(state => state.state === inputValue);
    console.log(filteredData);

    var tbody = d3.select("tbody");
    filteredData.forEach((record) => {

        var row = tbody.append("tr");
        Object.entries(record).forEach(([key, value]) => {
            var row_data = row.append("td");
            row_data.text(value);
        });
    });
});

// COUNTRY

var button = d3.select("#filter-btn");
button.on("click", function () {

    var inputElement = d3.select("#country");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(country => country.country === inputValue);
    console.log(filteredData);

    var tbody = d3.select("tbody");
    filteredData.forEach((record) => {

        var row = tbody.append("tr");
        Object.entries(record).forEach(([key, value]) => {
            var row_data = row.append("td");
            row_data.text(value);
        });
    });
});

// SHAPE

var button = d3.select("#filter-btn");
button.on("click", function () {

    var inputElement = d3.select("#shape");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(shape => shape.shape === inputValue);
    console.log(filteredData);

    var tbody = d3.select("tbody");
    filteredData.forEach((record) => {

        var row = tbody.append("tr");
        Object.entries(record).forEach(([key, value]) => {
            var row_data = row.append("td");
            row_data.text(value);

        });
    });
});

// COMMENTS

var button = d3.select("#filter-btn");
button.on("click", function () {

    var inputElement = d3.select("#comment");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(comment => comment.comment === inputValue);
    console.log(filteredData);

    var tbody = d3.select("tbody");
    filteredData.forEach((record) => {

        var row = tbody.append("tr");
        Object.entries(record).forEach(([key, value]) => {
            var row_data = row.append("td");
            row_data.text(value);
        });
    });
});