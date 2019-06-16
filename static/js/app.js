// from data.js
var tableData = data;

var button = d3.select("#filter-btn")

function handleClick() {
    d3.event.preventDefault();
    var DateValue = d3.select("#datetime").property("value");
    var CityValue = d3.select("#city").property("value");
    var StateValue = d3.select("#state").property("value");
    var CountryValue = d3.select("#country").property("value");
    var ShapeValue = d3.select("#shape").property("value");
    
    var filteredData = tableData.filter(occurance => (occurance.datetime === DateValue && occurance.city === CityValue && occurance.state === StateValue && occurance.country === CountryValue && occurance.shape === ShapeValue));
    var tbody = d3.select("tbody");
    d3.selectAll("td").remove()
    filteredData.forEach((filteredOccurance) => {
	    var row = tbody.append("tr");
	    Object.entries(filteredOccurance).forEach(([key, value]) => {
		    var cell = row.append("td");
		    cell.text(value);
	    });
    });

	
}

button.on("click", handleClick);


