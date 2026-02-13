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

	// adding the beginning of Chapter 3's content here:

// function jsAjax(){
//     // Step 1: Define the data request
//     var request = new Request('data/cities.geojson'); 
// 	//Step 2: define Fetch parameters 
//     var init = {
//         method: 'GET'
// 	}
// 	//Step 3: use Fetch to retrieve the data
//     fetch(request, init)
// 		.then(conversion) // send retrieved data to callback jc	
// 		.then(callback)	
// };

// // define conversion:
// function conversion(response){
// 	// convert data to usable form
// 	return response.json();
// }

// // define callback function 
// function callback(response){
// 	// tasks using the data go here
// 	console.log(response)
// }

//  shorter version: -jc
// function jsAjax(){
// 	// use fetch to retrieve the data
// 	fetch('data/cities.geojson')
// 		.then(function(response){
// 			return response.json();
// 		})
// 		.then(callback)
// };

// // define callback function
// function callback(response){
// 	// tasks using the data go here
// 	console.log(response)
// }

// hypothetical version with no conversion: -jc

function jsAjax(){
	// fetch('data/cities.geojson')
	// 	.then(function(response){
	// 		return response.json();
	// 	})
	// 	.then(callback) -- commenting this out to test ex 3.5 - jc
	
	// define variable to hold data:
	var myData;
	
	fetch('data/cities.geojson')
		.then(function(response){
			return response.json();
		})
		.then(function(response){
			myData = response;
		// }) these belong after the console.log - jc

		// check data
		console.log(myData)
		})

		//check again
	console.log(myData)

};

document.addEventListener('DOMContentLoaded', jsAjax);

// function callback(response){
// 	console.log(response)
// };

// example 3.4: calling a new function from within callback function
// define callback function:
function callback(response){

	var myData = response;

	nextFunction(myData);
};

function nextFunction(data){ // contains response data held by myData in callback

	console.log(data);
};



window.onload = jsAjax();

// begin debug ajax

// we're creating a fx called debugCallback and handing it (response)
//	because response is grayed out, it shows it's not called? 
function debugCallback(response){ // what if we gave it nothing instead?
// function debugCallback(){ -- don't think so 4:48
	// my div is called myDiv, so updating that here:
	// document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
		// document.querySelector("#myDiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData)); -- i also believe the variables are incorrect
	// document.querySelector("#myDiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(response)) // calling it response instead of myData
	// adding a variable to hold the data:
	// var myData = document.querySelector("#myDiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(response)) -- comparing to later lines, it seems like we
	// would need the <br> tag
	// var myData = document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data: </br>' + JSON.stringify(response)) // added br tag 4:37

	document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data: <br>' + JSON.stringify(response)) // changing this because i'm not sure it needs the variable 
	// removed closing tag 5:09
	
	// // passing it to the next function with nextFunction(myData) copy from above but with debugAjax instead of nextFunction
	// debugAjax(myData); -- actually not sure about this 4:39

// going to play around with it, but i think we want these two functions in the same block
// }; - i was incorrect, i think.
}; // putting it back - jc

function debugAjax(){
	
	// var myData; -- this is not needed because we're passing the data through the function call 5:18
	
	// fetch("data/MegaCities.geojson") // oh mine is named cities.geojson! 5:16
	fetch("data/cities.geojson")	
		.then(function(response){ //i think we need to focus on this part next. 4:23
			// debugCallback(response); // commenting out. we need to return response.json
			return response.json();
		})
		.then(function(response){ // and then set it to myData 4:27 
			// myData = response;


			debugCallback(response);
		});
// we'll start with the red lines. we need a comma here -- ooh, and a slash!
	// document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:</br>' + JSON.stringify(myData)) -- learned this doesn't need a closing tag 5:09
	// document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData)) // let's try renaming this to response
	// document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(response)) // changing this to response 5:19
};

// then let's call the function! 5:23

window.onload = debugAjax();

// document.querySelector("#myDiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData)) // reading my console log, it says the error is myData being undefined.
// document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data: </br>' + JSON.stringify(myData)) // changing this to include the <br> tags 4:41, still doesn't change the undefined myData
// document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data: <br>' + JSON.stringify(myData)) // removing closing tag here too 5:09
// document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:</br>' + JSON.stringify(response))

// Chapter 4 Activity Completed!