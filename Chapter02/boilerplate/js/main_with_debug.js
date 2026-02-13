// Copied code: - jc

//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cities = [
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population = [
        233209,
        594833,
        104057,
        27244
    ];

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    //add the table to the div in index.html
    var myDiv = document.getElementById("myDiv");
    myDiv.appendChild(table);
};

//call the initialize function when the window has loaded
window.onload = initialize();

var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];
console.log(cityPop);
// okay, the console log finds the cityPop array correctly and lists all 4 rows

function addColumns(cityPop){
    // this is setting up the function to add columns to cityPop
    document.querySelectorAll("tr").forEach(function(row, i){

    	// if (i == 0){
			// i needs to be = 0, not == 0
		// if (i = 0){ <- incorrect, == is best
		if (i == 0){

    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');

    	} else {

    		var citySize;
			// this is setting up citySize, but it is not being defined as anything yet

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

			// row.insertAdjacentHTML = '<td>' + citySize + '</td>'; <- this is a function and needs these elements added, not equted to
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
    });
};

// and now we call it!
addColumns(cityPop);

function addEvents(){

	// document.querySelector("table").addEventListener("mouseover", function(){
	// i believe table shouldn't be in quotes <-- actually wrong should be in quotes!
	document.querySelector("table").addEventListener("mouseover", function(){
		
		// var color = "rgb"; this needs an open parenthesis
		var color = "rgb(";

		// for (var i=0; i<3; i++){
		// changing this to match main.js, with i<cityPop.length
		// actually this is incorrect, i see now we're setting up rgb values

		// for (var i=0; i<cityPop.length; i++){
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			};
	}
	

	
		// } pulling this bracket above the querySelector 
		document.querySelector("table").style.color = color;
		// document.querySelector("table").addEventListener("mouseover", addEvents); <- nope, that didn't work.
	});
	// console.log("addEvents ran"); 
	// yep, console is not loggin the addEvent function. may need to add trigger? i'll pull the 
	// existing mouseover call below the function definition
	
};

// adding add events outside the fuction: hey, that worked!
addEvents();
// mouseover isn't doing anything so i'm adding console logs.

	function clickme(){
		// this function triggers at the later event listener

			alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme);
